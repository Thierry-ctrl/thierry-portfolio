import { Route, Router, Switch } from "wouter";
import Home from "@/pages/Home";
export default function App() {
  return (
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <main className="section shell">
            <p className="eyebrow">404 / PAGE NOT FOUND</p>
            <h1>This route is uncharted.</h1>
            <p>The page may have moved. Head back to the portfolio.</p>
            <a className="button primary" href={import.meta.env.BASE_URL}>
              Return to portfolio
            </a>
          </main>
        </Route>
      </Switch>
    </Router>
  );
}
