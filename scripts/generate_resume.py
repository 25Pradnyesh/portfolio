import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36,
    )

    styles = getSampleStyleSheet()

    # Color Palette: Clean Swiss Minimalist Monochrome with Emerald Accent
    c_primary = colors.HexColor("#111827")
    c_secondary = colors.HexColor("#4b5563")
    c_accent = colors.HexColor("#059669")
    c_rule = colors.HexColor("#e5e7eb")

    title_style = ParagraphStyle(
        "Name",
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=22,
        textColor=c_primary,
    )

    subtitle_style = ParagraphStyle(
        "Subtitle",
        fontName="Helvetica",
        fontSize=10,
        leading=13,
        textColor=c_accent,
    )

    contact_style = ParagraphStyle(
        "Contact",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        alignment=TA_RIGHT,
        textColor=c_secondary,
    )

    heading_style = ParagraphStyle(
        "SectionHeading",
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=c_primary,
        spaceAfter=3,
    )

    item_title_style = ParagraphStyle(
        "ItemTitle",
        fontName="Helvetica-Bold",
        fontSize=9,
        leading=11.5,
        textColor=c_primary,
    )

    item_meta_style = ParagraphStyle(
        "ItemMeta",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11.5,
        textColor=c_secondary,
        alignment=TA_RIGHT,
    )

    body_style = ParagraphStyle(
        "Body",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11.5,
        textColor=c_secondary,
    )

    story = []

    # Header Table: Name + Subtitle on Left; Contacts on Right
    left_header = [
        Paragraph("<b>PRADNYESH S</b>", title_style),
        Spacer(1, 2),
        Paragraph("AI Engineer &amp; Full-Stack Developer", subtitle_style),
    ]

    right_header = [
        Paragraph("workspace.pradnyesh@gmail.com | Mumbai / Pune, India", contact_style),
        Paragraph("github.com/25Pradnyesh | linkedin.com/in/pradnyesh-s", contact_style),
        Paragraph("x.com/Pradnyesh_25 | cal.com/pradnyesh", contact_style),
    ]

    header_table = Table([[left_header, right_header]], colWidths=[320, 220])
    header_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=c_rule, spaceAfter=8))

    # Summary
    story.append(Paragraph("<b>SUMMARY</b>", heading_style))
    story.append(Paragraph(
        "AI Engineer and Full-Stack Developer focused on building AI-powered products, high-performance web systems, "
        "and intelligent interfaces from zero to shipped. Experienced across LLM integrations, modern frontend/backend architectures, and Web3 protocols.",
        body_style
    ))
    story.append(Spacer(1, 8))

    # Education Section (SPPU, B.K. Birla, Smt. Kantaben Gandhi)
    story.append(Paragraph("<b>EDUCATION</b>", heading_style))
    edu_data = [
        [
            Paragraph("<b>B.E. - Electronics &amp; Computer Engineering</b><br/>Savitribai Phule Pune University (SPPU)", item_title_style),
            Paragraph("2023 - 2027", item_meta_style)
        ],
        [
            Paragraph("<b>B.K. Birla College of Arts, Science &amp; Commerce</b><br/>12th Grade", item_title_style),
            Paragraph("2021 - 2023", item_meta_style)
        ],
        [
            Paragraph("<b>Smt. Kantaben Chandulal Gandhi English School</b><br/>10th Grade", item_title_style),
            Paragraph("2020 - 2021", item_meta_style)
        ]
    ]
    edu_table = Table(edu_data, colWidths=[420, 120])
    edu_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 8))

    # Technical Stack
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", heading_style))
    skills_text = [
        "<b>AI &amp; ML:</b> Python | Generative AI | LLMs | Prompt Engineering | AI APIs | AI Agents",
        "<b>Frontend:</b> React | Next.js | TypeScript | JavaScript | Tailwind CSS | Framer Motion | HTML5/CSS3",
        "<b>Backend &amp; Cloud:</b> Node.js | FastAPI | Supabase | RESTful APIs | System Architecture",
        "<b>Web3:</b> Smart Contracts | Blockchain | Monad | Web3 Ecosystems | Decentralized Systems",
        "<b>Product &amp; Design:</b> Figma | UI/UX | Prototyping | Design Systems | Information Architecture",
        "<b>Tools:</b> Git | GitHub | VS Code | Linux/Windows | Postman"
    ]
    for sk in skills_text:
        story.append(Paragraph(sk, body_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 6))

    # Experience
    story.append(Paragraph("<b>EXPERIENCE</b>", heading_style))
    exp_items = [
        ("Software Development", "~1-1.5 years", "Hands-on product engineering, system architecture, and shipping full-stack production systems."),
        ("AI / GenAI Engineering", "~1 year", "Building AI-powered prototypes, LLM-orchestrated workflows, FastAPI services, and contextual intelligence."),
        ("Web Development", "~1-1.5 years", "Engineering performant, responsive web apps using React, Next.js, Node.js, and TypeScript."),
        ("Web3 Development", "~6-12 months", "Developing smart contract interfaces, decentralized syndicate applications, and participating in ecosystem hackathons."),
        ("UI/UX &amp; Product Design", "~1-1.5 years", "Designing clean, high-conversion interfaces, interactive prototypes, and design systems in Figma."),
        ("Video &amp; Media Production", "1+ year", "Independent and agency video editing, visual storytelling, and digital content creation.")
    ]
    exp_table_data = []
    for role, dur, desc in exp_items:
        exp_table_data.append([
            Paragraph(f"<b>{role}</b> - <font color='#4b5563'>{desc}</font>", body_style),
            Paragraph(dur, item_meta_style)
        ])
    exp_table = Table(exp_table_data, colWidths=[440, 100])
    exp_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(exp_table)
    story.append(Spacer(1, 8))

    # Projects
    story.append(Paragraph("<b>FEATURED PROJECTS</b>", heading_style))
    projects = [
        ("Travel AI", "Next.js, Python, FastAPI, AI, Google Maps", "AI-powered travel location extraction system that processes Instagram travel content and organizes discovered locations directly into Google Maps."),
        ("Penguin Protocol", "Monad, Web3, Smart Contracts, AI Agents", "Decentralized AI Investment Syndicate built to automate and coordinate on-chain liquidity & AI-driven investment strategies. Winner - Monad Blitz Pune."),
        ("Reclaim", "Next.js 14, Tailwind, Supabase, Cerebras API, Llama", "AI-powered digital wellbeing and screen-time management application built and shipped in 6 days during the WeMakeDevs FutureStack GenAI Hackathon."),
        ("VertiFarm", "React, IoT, AI, Dashboard, UX", "Smart vertical farming management platform for monitoring environmental telemetry, sensors, critical alerts, and crop health metrics."),
        ("Design Resource Vault", "Next.js, Tailwind CSS, Framer Motion", "Visual-first platform for discovering, bookmarking, and organizing high-utility design resources and tools.")
    ]
    for p_title, p_tech, p_desc in projects:
        story.append(Paragraph(f"<b>{p_title}</b> | <font color='#059669'>{p_tech}</font>", item_title_style))
        story.append(Paragraph(p_desc, body_style))
        story.append(Spacer(1, 3))
    story.append(Spacer(1, 5))

    # Honors & Awards
    story.append(Paragraph("<b>HONORS &amp; AWARDS</b>", heading_style))
    awards = [
        ("Winner - Monad Blitz Pune", "Penguin Protocol - Decentralized AI Investment Syndicate"),
        ("Hackathon Finalist - WeMakeDevs FutureStack GenAI Hackathon", "Reclaim - Built and shipped in 6 days using Cerebras API & Llama"),
        ("Demo Day - Starknet Outpost", "Web3 project demonstration and technical presentation"),
        ("Startup Weekend - AIBoomi Pune", "VoiceAds - AI voice advertising MVP prototype")
    ]
    for aw_event, aw_desc in awards:
        story.append(Paragraph(f"<b>{aw_event}:</b> {aw_desc}", body_style))
        story.append(Spacer(1, 2))

    doc.build(story)
    print(f"Resume regenerated successfully at: {output_path}")

if __name__ == "__main__":
    generate_resume("d:/PORTFOLIO/public/resume.pdf")
