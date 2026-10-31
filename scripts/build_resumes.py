"""Generate bilingual two-column resumes from content/resume/*.json.

Requires reportlab, Liberation Sans TTFs and a Japanese TrueType font.
Fonts are embedded as subsets and are not copied into the repository.
"""
import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, FrameBreak, KeepTogether, PageTemplate, Paragraph, Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--font-dir', type=Path, required=True)
parser.add_argument('--japanese-font', type=Path, required=True)
args = parser.parse_args()
for name, filename in [('Sans', 'LiberationSans-Regular.ttf'), ('SansBold', 'LiberationSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(args.font_dir / filename)))
pdfmetrics.registerFontFamily('Sans', normal='Sans', bold='SansBold', italic='Sans', boldItalic='SansBold')
pdfmetrics.registerFont(TTFont('Japanese', str(args.japanese_font)))
pdfmetrics.registerFontFamily('Japanese', normal='Japanese', bold='Japanese', italic='Japanese', boldItalic='Japanese')
INK = colors.HexColor('#151515')
BODY = colors.HexColor('#4C4C4C')
MUTED = colors.HexColor('#696969')
ACCENT = colors.HexColor('#666666')
PAGE_W, PAGE_H = A4
MARGIN, TOP, BOTTOM = 38, 36, 34
SIDE_W, GUTTER = 161, 28
MAIN_X = MARGIN + SIDE_W + GUTTER
MAIN_W = PAGE_W - MAIN_X - MARGIN
HEIGHT = PAGE_H - TOP - BOTTOM


def build(lang):
    data = json.loads((ROOT / f'content/resume/{lang}.json').read_text())
    ja = lang == 'ja'
    font, bold = ('Japanese', 'Japanese') if ja else ('Sans', 'SansBold')
    body = ParagraphStyle('body', fontName=font, fontSize=9.2, leading=13.1,
                          textColor=BODY, wordWrap='CJK' if ja else None)
    side = ParagraphStyle('side', parent=body, fontSize=8.8, leading=12.5)
    muted = ParagraphStyle('muted', parent=side, fontSize=8.2, leading=11.4, textColor=MUTED)
    heading = ParagraphStyle('heading', parent=body, fontName=bold, fontSize=10.5,
                             leading=14, textColor=ACCENT, spaceAfter=12)
    job_title = ParagraphStyle('job', parent=body, fontName=bold, fontSize=10.2,
                               leading=13.6, textColor=INK)
    metadata = ParagraphStyle('metadata', parent=body, fontSize=8.5, leading=12, textColor=MUTED)
    bullet = ParagraphStyle('bullet', parent=body, leftIndent=10, firstLineIndent=-10, spaceAfter=6)
    story = []

    def para(text, style=body):
        return Paragraph(text, style)

    def label(text):
        return para(escape(text), heading)

    # The explicit frame break keeps each column continuous in PDF reading order.
    story.append(para('Haruto<br/>Matsushima', ParagraphStyle(
        'name', fontName='SansBold', fontSize=25, leading=27, textColor=INK)))
    story.append(Spacer(1,8))
    story.append(para(escape(data['role']), ParagraphStyle('role', parent=side, fontSize=10.5, leading=15, textColor=MUTED)))
    story.append(Spacer(1,20))
    story.append(para(f'<link href="https://{data["website"]}">{data["website"]}</link>',
                      ParagraphStyle('website', parent=side, fontName='SansBold', fontSize=12, leading=16, textColor=INK)))
    story.append(Spacer(1,14))
    for text in [escape(data['phone']),
                 f'<link href="mailto:{data["email"]}">{data["email"]}</link>',
                 f'<link href="https://{data["linkedin"]}">{data["linkedin"]}</link>']:
        story.append(para(text,muted))
        story.append(Spacer(1,5))
    story.append(Spacer(1,16))
    story.append(para(escape(data['summary']),side))
    story.append(Spacer(1,22))
    story.append(label('専門スキル' if ja else 'SKILLS'))
    for text in data['designSkills']:
        story.append(para(escape(text),side))
        story.append(Spacer(1,2))
    story.append(Spacer(1,19))
    story.append(label('ツール・開発' if ja else 'TOOLS & CODE'))
    for text in data['tools']:
        story.append(para(text,side))
        story.append(Spacer(1,4))
    story.append(Spacer(1,16))
    story.append(label('言語' if ja else 'LANGUAGES'))
    story.append(para('<br/>'.join(escape(text) for text in data['languages']),side))
    story.append(Spacer(1,22))
    story.append(label('学歴' if ja else 'EDUCATION'))
    for school in data['education']:
        story.append(para(escape(school['title']),ParagraphStyle('school',parent=side,fontName=bold,textColor=INK)))
        story.append(para(escape(school['detail']),muted))
        story.append(Spacer(1,3))
        story.append(para(escape(school['dates']),muted))
        story.append(Spacer(1,12))
    story.append(FrameBreak())

    story.append(label(data['sections'][0]))
    for job in data['experience']:
        group=[para(escape(job['title']+' | '+job['company']),job_title),
               para(escape(job['location']+' | '+job['dates']),metadata),Spacer(1,8)]
        group.extend(para('-  '+escape(text),bullet) for text in job['bullets'])
        story.append(KeepTogether(group))
        story.append(Spacer(1,13))
    story.append(Spacer(1,5))
    story.append(label('大学院プロジェクト' if ja else 'SELECTED PROJECTS'))
    for job in data['projects']:
        url='https://hrtmtsm.com/projects/'+job['title'].lower()
        group=[para(f'<link href="{url}">{escape(job["title"])}</link>',job_title),
               para(escape(job['subtitle']),metadata),para(escape(job['dates']),metadata),Spacer(1,8)]
        group.extend(para('-  '+escape(text),bullet) for text in job['bullets'])
        story.append(KeepTogether(group))
        story.append(Spacer(1,13))

    frames=[Frame(MARGIN,BOTTOM,SIDE_W,HEIGHT,id='sidebar',leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0),
            Frame(MAIN_X,BOTTOM,MAIN_W,HEIGHT,id='main',leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0)]
    path=ROOT/'public'/('resume-ja.pdf' if ja else 'resume.pdf')
    doc=BaseDocTemplate(str(path),pagesize=A4,title=f'Haruto Matsushima | {data["role"]}',author='Haruto Matsushima')
    doc.addPageTemplates(PageTemplate(id='two-columns',frames=frames))
    doc.build(story)
    print(path)

for language in ['en','ja']:
    build(language)
