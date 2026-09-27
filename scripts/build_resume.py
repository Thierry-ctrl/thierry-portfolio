"""Generate the single-page, text-selectable resume. Requires reportlab."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

root = Path(__file__).resolve().parents[1]
output = root / 'public' / 'Thierry-Rugira-Resume.pdf'
styles = {
 'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=25, leading=29, textColor=colors.HexColor('#122c28'), spaceAfter=6),
 'title': ParagraphStyle('title', fontName='Helvetica', fontSize=12, leading=16, textColor=colors.HexColor('#32695b'), spaceAfter=8),
 'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=8.5, leading=12, spaceAfter=3),
 'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.5, leading=14, spaceAfter=7),
 'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=9, leading=13, textColor=colors.HexColor('#32695b'), spaceBefore=14, spaceAfter=7),
 'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=10.5, leading=15, spaceAfter=3),
 'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=8.5, leading=12, textColor=colors.HexColor('#4b5854'), spaceAfter=7),
 'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.5, leading=14, leftIndent=10, firstLineIndent=-9, spaceAfter=5),
}
# User-provided facts only. Formal role title is intentionally not asserted.
content = [
 ('name', 'THIERRY RUGIRA'),
 ('title', 'Data &amp; AI Engineering | APIs, Pipelines &amp; Automation'),
 ('contact', 'Kigali, Rwanda | <link href="mailto:thierry.ru34@gmail.com">thierry.ru34@gmail.com</link>'),
 ('contact', '<link href="https://github.com/Thierry-ctrl">github.com/Thierry-ctrl</link> | <link href="https://www.linkedin.com/in/thierry-rugira-644146264/">LinkedIn: Thierry Rugira</link>'),
 ('section', 'PROFILE'),
 ('body', 'Data and AI engineering practitioner building pipelines, backend APIs and practical automation. Experience spans healthcare utilization systems, environmental data and operational workflows in Rwanda. Focused on trustworthy data, maintainable systems and AI that works within real resource constraints.'),
 ('section', 'EXPERIENCE'),
 ('role', 'SAND Technologies | Kigali, Rwanda'),
 ('meta', 'Employee | December 2024 - Present | Work focus: data &amp; AI engineering'),
 ('bullet', '- Build and contribute to Python data workflows, Prefect pipelines and PostgreSQL-backed systems, including dbt transformations and data-quality work.'),
 ('bullet', '- Develop FastAPI APIs and contribute to AI solutions, support systems and workflow automation, connecting backend services with practical operational needs.'),
 ('bullet', '- Contribute to eBuzima healthcare utilization pipelines in a data context of approximately 10,500 rows per day across roughly 450 facilities.'),
 ('bullet', '- Work on Rwanda air-quality data in the REMA / PurpleAir context, supporting environmental data workflows and attention to data reliability.'),
 ('section', 'SELECTED SYSTEMS &amp; PRODUCT WORK'),
 ('role', 'eBuzima utilization systems | Professional contribution'),
 ('body', 'Ingestion, transformation and data-quality workflows for healthcare utilization data. Pipeline volume and facility figures describe data scope, not clinical outcomes or adoption.'),
 ('role', 'Waka gym platform | Prototype in development'),
 ('body', 'Systems and product prototyping for gym operations, exploring how operational workflows translate into backend structure and a coherent user experience.'),
 ('role', 'Lightweight medication-safety assistant | Early concept'),
 ('body', 'Exploring a Small AI for Development concept for low-connectivity clinics: trusted medical rules, bounded AI decisions and clinician review. Not deployed or clinically validated.'),
 ('section', 'TECHNICAL SKILLS'),
 ('body', '<b>Data:</b> Python, SQL, PostgreSQL, Prefect, dbt, data validation<br/><b>Backend &amp; automation:</b> FastAPI, APIs, backend integration, workflow automation<br/><b>Systems:</b> AI solutions, system design, product prototyping'),
 ('section', 'EDUCATION'),
 ('role', 'African Leadership University'),
 ('body', 'Bachelor of Software Engineering (BSE), in progress<br/>Current studies: Year 2 | Expected completion: January 2028'),
]
doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=44, leftMargin=44, topMargin=37, bottomMargin=35, title='Thierry Rugira - Resume', author='Thierry Rugira')
def page(canvas, doc):
 canvas.setStrokeColor(colors.HexColor('#b5d1c5'))
 canvas.line(44, 30, A4[0]-44, 30)
 canvas.setFont('Helvetica', 7)
 canvas.setFillColor(colors.HexColor('#52625b'))
 canvas.drawString(44, 19, 'Thierry Rugira | Data & AI Engineering')
doc.build([Paragraph(text, styles[kind]) for kind, text in content], onFirstPage=page, onLaterPages=page)
print(output)
