import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("project filters and scope disclosures work", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".project-card")).toHaveCount(4);
  await page.getByRole("button", { name: "Healthcare", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await page.locator("summary").click();
  await expect(page.locator("details")).toHaveAttribute("open", "");
  await expect(page.locator("details")).toContainText("not patient outcomes");
  await page.getByRole("button", { name: "All", exact: false }).click();
  await expect(page.locator(".project-card")).toHaveCount(4);
});

test("quick navigation supports keyboard search and dismissal", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("button", {
    name: "Open quick navigation (Control or Command K)",
  });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByLabel("Search destinations")).toBeFocused();
  await page.getByLabel("Search destinations").fill("resume");
  await expect(page.getByRole("dialog").getByRole("link")).toHaveCount(1);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await page.keyboard.press("Control+k");
  await page.getByLabel("Search destinations").fill("nonexistent");
  await expect(page.getByRole("dialog")).toContainText("No matches");
});

test("mobile navigation and narrow layouts stay usable", async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Open navigation", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#about$/);
});

test("resume is a real PDF and reduced motion is respected", async ({
  page,
  request,
}) => {
  const response = await request.get("/Thierry-Rugira-Resume.pdf");
  expect(response.ok()).toBe(true);
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await page.getByRole("button", { name: "Always in a learning arc" }).click();
  await expect(
    page.getByRole("button", { name: "Training arc: activated" }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("page and navigation dialog have no automated WCAG AA violations", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => Promise.all(document.getAnimations().map(animation => animation.finished)));
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page
    .getByRole("button", {
      name: "Open quick navigation (Control or Command K)",
    })
    .click();
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
});
