import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT

def build_pdf():
    output_path = os.path.join(os.path.dirname(__file__), "..", "public", "cv.pdf")
    output_path = os.path.abspath(output_path)
    
    # A4: 595.27 x 841.89 points
    # Margins: 36 points (0.5 inch / ~12.7mm) to fit page 1 content cleanly
    margin = 36
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    header_name_style = ParagraphStyle(
        'HeaderName',
        fontName='Times-Bold',
        fontSize=18,
        leading=22,
        alignment=TA_CENTER,
        textColor=colors.black
    )

    header_contact_style = ParagraphStyle(
        'HeaderContact',
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.black
    )

    summary_style = ParagraphStyle(
        'Summary',
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13.5,
        alignment=TA_JUSTIFY,
        textColor=colors.black
    )

    section_title_style = ParagraphStyle(
        'SectionTitle',
        fontName='Times-Bold',
        fontSize=10,
        leading=12,
        textColor=colors.black
    )

    entry_title_style = ParagraphStyle(
        'EntryTitle',
        fontName='Times-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=colors.black
    )

    entry_right_style = ParagraphStyle(
        'EntryRight',
        fontName='Times-Bold',
        fontSize=9.5,
        leading=12.5,
        alignment=TA_RIGHT,
        textColor=colors.black
    )

    entry_subtitle_style = ParagraphStyle(
        'EntrySubtitle',
        fontName='Times-Roman',
        fontSize=9.5,
        leading=12.5,
        textColor=colors.black
    )

    entry_desc_style = ParagraphStyle(
        'EntryDesc',
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13,
        alignment=TA_JUSTIFY,
        textColor=colors.black
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13.5,
        alignment=TA_JUSTIFY,
        leftIndent=12,
        firstLineIndent=-12,
        textColor=colors.black
    )

    skill_label_style = ParagraphStyle(
        'SkillLabel',
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.black
    )

    skill_val_style = ParagraphStyle(
        'SkillVal',
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.black
    )

    story = []
    content_width = A4[0] - 2 * margin  # 523.27 pt

    def section_header(title):
        p = Paragraph(f"<b>{title}</b>", section_title_style)
        hr = HRFlowable(width="100%", thickness=1.5, color=colors.black, spaceBefore=2, spaceAfter=5)
        return [p, hr]

    # ==================== PAGE 1 ====================
    # Header
    story.append(Paragraph("DERAJAT", header_name_style))
    story.append(Spacer(1, 3))
    contact_text = (
        '<font color="#0000EE"><u><a href="mailto:derajatminsyana2005@gmail.com">derajatminsyana2005@gmail.com</a></u></font> | '
        '<font color="#0000EE"><u><a href="https://www.linkedin.com/in/derajat">www.linkedin.com/in/derajat</a></u></font> | '
        '<font color="#0000EE"><u><a href="https://derajat.vercel.app">derajat.vercel.app</a></u></font> | '
        '+6287818895273'
    )
    story.append(Paragraph(contact_text, header_contact_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Bekasi, Jawa Barat, Indonesia", header_contact_style))
    story.append(Spacer(1, 8))

    # Summary
    summary_text = (
        "Mahasiswa D3 Teknologi Informasi Universitas Brawijaya yang berfokus pada Web Design dan Front End Developer. "
        "Berpengalaman dalam organisasi, kepanitiaan, serta kegiatan volunteer yang mengasah komunikasi dan koordinasi tim. "
        "Sosok yang cepat belajar, adaptif, dan termotivasi tinggi untuk berkembang di lingkungan kerja profesional."
    )
    story.append(Paragraph(summary_text, summary_style))
    story.append(Spacer(1, 7))

    # PENDIDIKAN
    story.extend(section_header("PENDIDIKAN"))
    
    # Edu 1: SMKS 11 MARET
    t1 = Table([
        [Paragraph("<b>SMKS 11 MARET CIKARANG BARAT</b>", entry_title_style), Paragraph("<b>Bekasi</b>", entry_right_style)],
        [Paragraph("<i>Smk/Sederajat di Teknik Komputer dan Jaringan</i> | <b>IPK: 82,44 / 100</b>", entry_subtitle_style), Paragraph("<b>2021 - 2024</b>", entry_right_style)]
    ], colWidths=[content_width - 80, 80])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t1)
    story.append(Spacer(1, 2))
    story.append(Paragraph("Mempelajari jaringan komputer, topologi LAN, MAN, dan WAN, serta praktik kabel LAN, fiber optic, Ubuntu Linux, dan hardware komputer.", entry_desc_style))
    story.append(Spacer(1, 5))

    # Edu 2: UNIVERSITAS BRAWIJAYA
    t2 = Table([
        [Paragraph("<b>UNIVERSITAS BRAWIJAYA</b>", entry_title_style), Paragraph("<b>Malang</b>", entry_right_style)],
        [Paragraph("<i>Diploma III di Teknologi Informasi</i> | <b>IPK: 3,28 / 4,0</b>", entry_subtitle_style), Paragraph("<b>2024 - Sekarang</b>", entry_right_style)]
    ], colWidths=[content_width - 100, 100])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t2)
    story.append(Spacer(1, 2))
    story.append(Paragraph("Mempelajari pengembangan aplikasi web, perangkat lunak, dan UI/UX melalui mata kuliah User Interface dan User Experience, Struktur Data, Web Framework, Basis Data, Pemograman Berorientasi Object, Rekayasa Perangkat Lunak, dan Kecerdasan Buat.", entry_desc_style))
    story.append(Spacer(1, 7))

    # EXPERIENCE
    story.extend(section_header("EXPERIENCE"))
    t3 = Table([
        [Paragraph("<b>UI/UX Designer (Internship)</b> | <i>Seven Inc, Yogyakarta, Indonesia</i>", entry_subtitle_style), Paragraph("<b>Yogyakarta</b>", entry_right_style)],
        [Paragraph("Merancang user flow, wireframe (low-fidelity), hingga desain high-fidelity dan prototipe interaktif antarmuka website.", entry_desc_style), Paragraph("<b>Sep 2026 – Sekarang</b>", entry_right_style)]
    ], colWidths=[content_width - 120, 120])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t3)
    story.append(Spacer(1, 7))

    # PROJEK
    story.extend(section_header("PROJEK"))
    projects = [
        ("• <b>PasarNgalam – Marketplace Platform</b> (<i>PHP, MySQL, JS, Laravel</i>) – Mengembangkan platform marketplace untuk penjual lokal dengan fitur manajemen produk, katalog, dan database terstruktur untuk mendukung transaksi digital."),
        ("• <b>HealtyLife – Edukasi Kesehatan</b> (<i>XAMPP, PHP, HTML, CSS, Figma</i>) – Mengembangkan website Healthy Life sebagai platform edukasi kesehatan mengenai kualitas tidur dan pola makan sehat."),
        ("• <b>WaroengKconk - UMKM</b> (<i>XAMPP, PHP, HTML, CSS, Figma</i>) – Mengembangkan website UMKM Waroeng K-Conk dengan fitur menu, pemesanan online, dan stok real-time."),
        ("• <b>Design UI/UX – Premium Industrial Sanding Solutions</b> (<i>Figma</i>) – Mendesain website perusahaan Tiaga Pertama Persada untuk menampilkan informasi produk material gerinda serta menyediakan fitur pre-order guna memudahkan proses pemesanan pelanggan."),
        ("• <b>SentinelIoT</b> – (<i>Laravel 13, React, Tailwind CSS, MySQL, ESP32, Fuzzy Logic</i>) – Sistem monitoring IoT real-time untuk deteksi kebakaran dan gas berbasis Fuzzy Logic Sugeno."),
        ("• <b>UI/UX Mobile - LOKARA (Lokal Karya Indonesia)</b> (<i>Figma</i>) – Merancang platform e-commerce dengan UX yang memudahkan pemasaran dan pembelian produk budaya Indonesia di pasar internasional.")
    ]
    for proj in projects:
        story.append(Paragraph(proj, bullet_style))
        story.append(Spacer(1, 3))
    story.append(Spacer(1, 4))

    # ORGANISASI
    story.extend(section_header("ORGANISASI"))
    t4 = Table([
        [Paragraph("<b>Direktorat Jendral Kajian Isu dan Aksi Propaganda</b>", entry_title_style), Paragraph("<b>Malang</b>", entry_right_style)],
        [Paragraph("<i>Badan Eksekutif Mahasiswa Fakultas Vokasi Universitas Brawijaya</i>", entry_subtitle_style), Paragraph("<b>2025 - 2026</b>", entry_right_style)]
    ], colWidths=[content_width - 80, 80])
    t4.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t4)
    story.append(Spacer(1, 3))

    org_bullets = [
        ("• <b>Kawal Vokasi</b> – Steering Commite mengoordinasikan aspirasi mahasiswa serta mengembangkan kemampuan kepemimpinan dan komunikasi."),
        ("• <b>Diskusi Publik</b> – Steering Commite mengoordinasikan anggota selama pelaksanaan acara serta mendukung kebutuhan desain dan operasional untuk memastikan kegiatan berjalan lancar."),
        ("• <b>Desak Vokasi</b> – Steering Commite mengoordinasikan jalannya acara, konsolidasi antar himpunan, serta mendukung kebutuhan desain dan operasional kegiatan.")
    ]
    for ob in org_bullets:
        story.append(Paragraph(ob, bullet_style))
        story.append(Spacer(1, 2.5))

    # ==================== PAGE 2 ====================
    story.append(PageBreak())

    # SERTIFIKAT
    story.extend(section_header("SERTIFIKAT"))
    certs = [
        "• <b>Microsoft Office Desktop Application</b> – Trust Training Partners (2025) <font color=\"#0000EE\"><u>[Lihat Sertifikat]</u></font>",
        "• <b>Uji Kompetensi</b> – Teknik Komputer dan Jaringan <font color=\"#0000EE\"><u>[Lihat Sertifikat]</u></font>",
        "• <b>Universitas Sumatera Utara</b> – UI/UX Competition 2026 <font color=\"#0000EE\"><u>[Lihat Sertifikat]</u></font>",
        "• <b>Kompetisi HOLOGY 9.0</b> – Fakultas Ilmu Komputer, Universitas Brawijaya",
        "• <b>Olimpiade Vokasi Indonesia (OLIVIA)</b> – Web Technology (2026)"
    ]
    for cert in certs:
        story.append(Paragraph(cert, bullet_style))
        story.append(Spacer(1, 3.5))
    story.append(Spacer(1, 10))

    # SKILL
    story.extend(section_header("SKILL"))
    skill_rows = [
        [Paragraph("<b>Soft Skill</b>", skill_label_style), Paragraph(":", skill_label_style), Paragraph("Leadership, Project Management, Teamwork, Problem Solving.", skill_val_style)],
        [Paragraph("<b>Bahasa Pemrograman</b>", skill_label_style), Paragraph(":", skill_label_style), Paragraph("HTML, CSS, JavaScript, JavaGui.", skill_val_style)],
        [Paragraph("<b>Frameworks</b>", skill_label_style), Paragraph(":", skill_label_style), Paragraph("ReactJS, Tailwind CSS.", skill_val_style)],
        [Paragraph("<b>Software & Tools</b>", skill_label_style), Paragraph(":", skill_label_style), Paragraph("GitHub, Visual Studio Code, Figma, Claude Code, Virtual Box, Draw io, XAMPP", skill_val_style)]
    ]
    t_skill = Table(skill_rows, colWidths=[130, 10, content_width - 140])
    t_skill.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
    ]))
    story.append(t_skill)

    doc.build(story)
    print("PDF generated successfully at:", output_path)

if __name__ == '__main__':
    build_pdf()
