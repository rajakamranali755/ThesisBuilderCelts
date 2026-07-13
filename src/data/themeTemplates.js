/**
 * themeTemplates.js
 *
 * HEC Pakistan Compliant Thesis Templates
 * + Urdu/Arabic RTL Format Support
 *
 * Templates based on:
 * - HEC Pakistan Thesis Writing Guide (2023)
 * - University of Punjab format
 * - Quaid-i-Azam University format
 * - NUST format
 * - COMSATS format
 * - IIU (Islamic Intl. University) format
 * - Urdu medium universities (BZU, IUB, UAF)
 */

export const TEMPLATES = {

  // ── 1. HEC STANDARD (Default) ────────────────────────────────────────────
  hec_standard: {
    id: "hec_standard",
    name: "HEC Standard",
    nameUrdu: "ایچ ای سی معیاری",
    university: "Generic HEC Compliant",
    language: "english",
    direction: "ltr",
    description: "Official HEC Pakistan standard format. Required for all PhD dissertations submitted to HEC for degree attestation.",
    badge: "HEC Official",
    badgeColor: "bg-green-700",
    preview: "cover_hec",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.8cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 1.5,
    refFontSize: "11pt",
    refLineHeight: 1.0,
    chapterNumSize: "14pt",
    chapterTitleSize: "12pt",
    sectionSize: "11pt",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#000000",
      coverAccent: "#000000",
      ruleColor: "#000000",
    },
    coverLayout: "centered",
    showLogo: true,
    showSpine: true,
  },

  // ── 2. UNIVERSITY OF PUNJAB ───────────────────────────────────────────────
  punjab: {
    id: "punjab",
    name: "University of the Punjab (IER)",
    nameUrdu: "جامعہ پنجاب",
    university: "University of the Punjab, Lahore",
    language: "english",
    direction: "ltr",
    description: "University of the Punjab — Institute of Education & Research (IER/DERE) thesis format: TNR 12 double-spaced, 14pt headings, APA 7th, roman prelim / arabic body numbering.",
    badge: "PU Lahore",
    badgeColor: "bg-blue-700",
    preview: "cover_pu",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.81cm", top: "2.54cm", right: "2.54cm", bottom: "2.0cm" },
    coverMargins: { left: "2.54cm", top: "2.54cm", right: "2.54cm", bottom: "2.0cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 2.0,
    refFontSize: "12pt",
    refLineHeight: 2.0,
    paraIndent: "0.5in",
    chapterNumSize: "14pt",
    chapterTitleSize: "14pt",
    sectionSize: "14pt",
    coverTitleSize: "18pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#003366",
      coverAccent: "#003366",
      ruleColor: "#003366",
    },
    coverLayout: "pu_style",
    showLogo: true,
    showSpine: true,
    extraFields: ["co_supervisor", "external_examiner"],
  },

  // ── 3. NUST FORMAT ────────────────────────────────────────────────────────
  nust: {
    id: "nust",
    name: "NUST",
    nameUrdu: "نسٹ",
    university: "National University of Sciences & Technology",
    language: "english",
    direction: "ltr",
    description: "NUST Islamabad official thesis format. Includes NUST-specific front matter, School/Department header style, and IEEE reference format for engineering disciplines.",
    badge: "NUST",
    badgeColor: "bg-red-700",
    preview: "cover_nust",
    fonts: { body: "Times New Roman", heading: "Arial", cover: "Arial" },
    margins: { left: "3.81cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    coverMargins: { left: "2.54cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 1.5,
    refFontSize: "10pt",
    refLineHeight: 1.0,
    chapterNumSize: "14pt",
    chapterTitleSize: "14pt",
    sectionSize: "12pt",
    coverTitleSize: "18pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "12pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "IEEE",
    colors: {
      coverTitle: "#8B0000",
      coverAccent: "#8B0000",
      ruleColor: "#8B0000",
    },
    coverLayout: "nust_style",
    showLogo: true,
    showSpine: true,
    extraFields: ["school", "co_supervisor"],
  },

  // ── 4. QUAID-I-AZAM UNIVERSITY ────────────────────────────────────────────
  qau: {
    id: "qau",
    name: "Quaid-i-Azam University",
    nameUrdu: "قائداعظم یونیورسٹی",
    university: "Quaid-i-Azam University, Islamabad",
    language: "english",
    direction: "ltr",
    description: "QAU Islamabad format for MPhil and PhD dissertations. Features formal QAU cover page layout with submission statement.",
    badge: "QAU",
    badgeColor: "bg-emerald-700",
    preview: "cover_qau",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.8cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 1.5,
    refFontSize: "11pt",
    refLineHeight: 1.0,
    chapterNumSize: "14pt",
    chapterTitleSize: "12pt",
    sectionSize: "11pt",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#005B30",
      coverAccent: "#005B30",
      ruleColor: "#005B30",
    },
    coverLayout: "qau_style",
    showLogo: true,
    showSpine: true,
  },

  // ── 5. COMSATS UNIVERSITY ─────────────────────────────────────────────────
  comsats: {
    id: "comsats",
    name: "COMSATS University",
    nameUrdu: "کامسیٹس یونیورسٹی",
    university: "COMSATS University Islamabad",
    language: "english",
    direction: "ltr",
    description: "COMSATS University Islamabad format. Used across all CUI campuses. IEEE citation style for CS/Engineering. Features two-examiner signature page.",
    badge: "CUI",
    badgeColor: "bg-indigo-700",
    preview: "cover_comsats",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.81cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    coverMargins: { left: "2.54cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 1.5,
    refFontSize: "10pt",
    refLineHeight: 1.0,
    chapterNumSize: "14pt",
    chapterTitleSize: "12pt",
    sectionSize: "11pt",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "12pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "IEEE",
    colors: {
      coverTitle: "#1a1a6e",
      coverAccent: "#1a1a6e",
      ruleColor: "#1a1a6e",
    },
    coverLayout: "comsats_style",
    showLogo: true,
    showSpine: true,
    extraFields: ["co_supervisor", "committee_member1", "committee_member2"],
  },

  // ── 6. IIU (ISLAMIC INTERNATIONAL UNIVERSITY) ────────────────────────────
  iiu: {
    id: "iiu",
    name: "IIU Islamabad",
    nameUrdu: "بین الاقوامی اسلامی یونیورسٹی",
    university: "International Islamic University, Islamabad",
    language: "bilingual",
    direction: "ltr",
    description: "IIUI format — bilingual support. Title page includes both English and Arabic/Urdu department names. Used for Islamic Studies, Arabic, and Urdu-medium programs.",
    badge: "IIUI",
    badgeColor: "bg-teal-700",
    preview: "cover_iiu",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman", urdu: "Noto Nastaliq Urdu" },
    margins: { left: "3.8cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 1.5,
    refFontSize: "11pt",
    refLineHeight: 1.0,
    chapterNumSize: "14pt",
    chapterTitleSize: "12pt",
    sectionSize: "11pt",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#006400",
      coverAccent: "#006400",
      ruleColor: "#006400",
    },
    coverLayout: "iiu_style",
    showLogo: true,
    showSpine: true,
    bilingualCover: true,
  },

  // ── 7. URDU MEDIUM (BZU / IUB / UAF / GCUF) ──────────────────────────────
  urdu_medium: {
    id: "urdu_medium",
    name: "اردو میڈیم",
    nameUrdu: "اردو میڈیم",
    university: "اردو زبان میں تحقیق",
    language: "urdu",
    direction: "rtl",
    description: "Full Urdu-medium thesis format. RTL layout. Nastaliq font (Noto Nastaliq Urdu). Used for Urdu literature, Islamic studies, Pakistani history departments at BZU Multan, IUB, UAF, GCUF.",
    badge: "اردو",
    badgeColor: "bg-rose-700",
    preview: "cover_urdu",
    fonts: {
      body: "Noto Nastaliq Urdu",
      heading: "Noto Nastaliq Urdu",
      cover: "Noto Nastaliq Urdu",
      fallback: "Arial Unicode MS, serif",
    },
    margins: { right: "3.8cm", top: "2.5cm", left: "2.5cm", bottom: "2.5cm" }, // RTL: right becomes binding
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "14pt",   // Urdu Nastaliq needs larger base size
    bodyLineHeight: 2.0,    // Nastaliq needs more vertical space
    refFontSize: "12pt",
    refLineHeight: 1.5,
    chapterNumSize: "16pt",
    chapterTitleSize: "14pt",
    sectionSize: "13pt",
    coverTitleSize: "18pt",
    coverAuthorSize: "16pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "abjad", body: "arabic_numerals" },
    referenceStyle: "APA7_Urdu",
    colors: {
      coverTitle: "#000000",
      coverAccent: "#8B0000",
      ruleColor: "#8B0000",
    },
    coverLayout: "urdu_style",
    showLogo: true,
    showSpine: true,
    rtl: true,
    urduNumerals: false, // use Arabic-Indic numerals optionally
    googleFonts: "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap",
  },

  // ── 8. UOG ASRB 2022 HANDBOOK (OFFICIAL — from uploaded handbook) ───────────
  // Sourced directly from: "Handbook for the Write-Up of Academic Documents,
  // University of Gujrat, ASRB, January 01, 2022"
  // Every spec below corresponds to a numbered clause in that handbook.
  uog: {
    id: "uog",
    name: "UoG — ASRB 2022 Handbook",
    nameUrdu: "یونیورسٹی آف گجرات",
    university: "University of Gujrat, Punjab Pakistan",
    language: "english",
    direction: "ltr",
    // Clause 1.4 / 1.9.3.11 / handbook cover page
    description: "EXACT format per the UoG ASRB January 2022 Handbook. Cover: TNR 16pt Bold ALL CAPS title, 14pt author/reg/dept/univ, logo 4.2×5.57cm. Body: 12pt TNR 1.5lh 12pt space-before. Chapters right-aligned 14pt Bold Underlined. Sections 11pt Bold. Refs 12pt single-spaced APA. Includes Certificate of Completion + Plagiarism certificate pages.",
    badge: "UoG ASRB 2022",
    badgeColor: "bg-emerald-600",
    preview: "cover_uog",
    // Clause 1.6.1: Times New Roman throughout
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    // Clause 1.5.1: left 1.5 inch (3.8cm), top/bottom 1 inch (2.5cm)
    margins: { left: "3.8cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    // Clause 1.5.2: title page 1 inch all sides
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    // Clause 1.6.1: font size 12, 1.5 line spacing, 12pt space-before
    bodyFontSize: "12pt",
    bodyLineHeight: 1.5,
    spaceBefore: "12pt",
    // Clause 1.6.3 / 2.6.2: references font size 12 (handbook says 12, not 11)
    refFontSize: "12pt",
    refLineHeight: 1.0,
    // Clause 1.6.5: Chapter number 14pt bold underlined right-aligned CAPS
    chapterNumSize: "14pt",
    // Clause 1.6.6: chapter main heading 12pt bold centered CAPS, single space, 8pt after
    chapterTitleSize: "12pt",
    chapterTitleSpaceAfter: "8pt",
    // Clause 1.6.7 / 1.6.8: sub-headings 11pt bold
    sectionSize: "11pt",
    // Clause 1.9.1.2 / 1.9.3.1: cover title 16pt bold ALL CAPS
    coverTitleSize: "16pt",
    // Clause 1.9.1.4 / 1.9.3.6: author name 14pt bold ALL CAPS
    coverAuthorSize: "14pt",
    // Clause 1.9.1.7 / 1.9.3.8: department 14pt bold first letter capital
    coverDeptSize: "14pt",
    // Clause 1.4.1 / 1.4.2
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    // Clause 2.6.1
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#000000",
      coverAccent: "#000000",
      ruleColor: "#000000",
    },
    // Clause 1.9.1.3 / 1.9.1.9: 1.5cm horizontal rule under title and under logo
    ruleWidth: "1.5cm",
    // Clause 1.9.1.8: logo 4.2cm height × 5.57cm width
    logoHeight: "4.2cm",
    logoWidth: "5.57cm",
    // Clause 1.9.2: spine bar 16.58cm × 1.49cm, bold 16pt
    spineHeight: "16.58cm",
    spineWidth: "1.49cm",
    spineFontSize: "16pt",
    coverLayout: "uog_asrb_2022",
    showLogo: true,
    showSpine: true,
    // UoG-specific preliminary pages per handbook sections 1.9.4–1.9.8
    showCompletionCertificate: true,
    showPlagiarismCertificate: true,
    showTableOfContents: true,
    // Clause 1.9.9–1.9.12: ToC as 3-row 2-column table with 1.5cm horizontal borders
    tocTableFormat: true,
    // Clause 1.2: PhD binding = Maroon with white embossed text
    bindingColor: "Maroon (PhD) / Dark Blue (MPhil) / Black (BS/MSc)",
    // Clause 1.3: A4 paper ≥ 80 grams
    paperSpec: "A4, white, ≥ 80 grams",
    handbookRef: "UoG/DAC/ACD/AC-19/4383, January 01, 2022",
  },

  // ── 9. UoG FIRST SAMPLE (original generic template — kept as reference) ──────
  uog_first_sample: {
    id: "uog_first_sample",
    name: "First Sample (Original)",
    nameUrdu: "پہلا نمونہ",
    university: "University of Gujrat",
    language: "english",
    direction: "ltr",
    description: "The original generic UoG template that was first loaded with the thesis sample data. Kept as a reference starting point. Use 'UoG — ASRB 2022 Handbook' for official submissions.",
    badge: "First Sample",
    badgeColor: "bg-slate-300",
    preview: "cover_uog",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.8cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 1.5,
    refFontSize: "11pt",
    refLineHeight: 1.0,
    chapterNumSize: "14pt",
    chapterTitleSize: "12pt",
    sectionSize: "11pt",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#000000",
      coverAccent: "#8B6914",
      ruleColor: "#8B6914",
    },
    coverLayout: "centered",
    showLogo: true,
    showSpine: true,
  },

  // ── 10. AIOU (ALLAMA IQBAL OPEN UNIVERSITY) ─────────────────────────────────
  // Based on the official AIOU Research Project / Thesis Guidelines (APA style)
  // and HEC Pakistan formatting standards. AIOU brand colours: Sky blue + Orange.
  aiou: {
    id: "aiou",
    name: "AIOU Islamabad",
    nameUrdu: "علامہ اقبال اوپن یونیورسٹی",
    university: "Allama Iqbal Open University, Islamabad",
    language: "english",
    direction: "ltr",
    // ── AIOU variant group ──
    // This is the representative card for AIOU. The faculty/programme-specific
    // AIOU formats below share variantGroup "aiou" and appear in a dropdown on
    // this card instead of as separate cards in the grid.
    variantGroup: "aiou",
    variantLabel: "General rules",
    isVariantDefault: true,
    description: "Allama Iqbal Open University format per AIOU Research Project/Thesis Guidelines. APA 7th referencing, HEC-aligned margins, and the AIOU title-page submission statement. Front matter: Executive Summary, Acknowledgements, Contents, then main body and Bibliography. Brand colours: AIOU sky blue with orange accent.",
    badge: "AIOU",
    badgeColor: "bg-sky-600",
    preview: "cover_aiou",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    // AIOU Appendix-C: Left 3.8cm, Right 2.5cm, Bottom 2.5cm, Top 3.2cm
    margins: { left: "3.8cm", top: "3.2cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 2.0,
    paraIndent: "0.5in",
    refFontSize: "11pt",
    refLineHeight: 1.0,
    chapterNumSize: "16pt",
    chapterNumAlign: "center",
    chapterTitleSize: "16pt",
    sectionSize: "14pt",
    sectionCaps: true,
    sectionColor: "#000000",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#0369a1",   // AIOU sky blue
      coverAccent: "#ea580c",  // AIOU orange accent
      ruleColor: "#0369a1",
    },
    coverLayout: "aiou_style",
    showLogo: true,
    showSpine: true,
    // AIOU title page requires this statement at the bottom (Project Layout §2)
    submissionStatement:
      "This thesis is solely the work of the author and is submitted in partial fulfillment of the requirements of the Degree of",
    extraFields: ["co_supervisor"],
  },

  // ── 10a. AIOU — MS (COMPUTER SCIENCES), FACULTY OF SCIENCE ───────────────────
  // Programme variant of the AIOU format. Modelled on the AIOU MS Computer
  // Science thesis title page: TITLE (caps) → emblem → author + Roll No. →
  // "Submitted in partial fulfillment … Master of Science in Computer Science
  // at the Faculty of Science …" → "Name of Supervisor: …" → year.
  // Single supervisor declaration. APA author–year citations.
  aiou_ms_cs: {
    id: "aiou_ms_cs",
    name: "AIOU — MS (Computer Sciences)",
    nameUrdu: "علامہ اقبال اوپن یونیورسٹی — ایم ایس کمپیوٹر سائنس",
    university: "Allama Iqbal Open University, Islamabad",
    language: "english",
    direction: "ltr",
    variantGroup: "aiou",
    variantLabel: "MS Template",
    description: "AIOU Master of Science in Computer Science thesis format (Faculty of Science). Title-page submission statement names the MS Computer Science degree and the Faculty of Science, with a single-supervisor declaration and APA 7th author–year referencing. AIOU sky-blue and orange branding.",
    badge: "AIOU · MS CS",
    badgeColor: "bg-sky-600",
    preview: "cover_aiou",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.8cm", top: "3.2cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 2.0,
    paraIndent: "0.5in",
    refFontSize: "11pt",
    refLineHeight: 1.0,
    chapterNumSize: "16pt",
    chapterNumAlign: "center",
    chapterTitleSize: "16pt",
    sectionSize: "14pt",
    sectionCaps: true,
    sectionColor: "#000000",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#0369a1",
      coverAccent: "#ea580c",
      ruleColor: "#0369a1",
    },
    coverLayout: "aiou_style",
    showLogo: true,
    showSpine: true,
    submissionStatement:
      "Submitted in partial fulfillment of the requirements for the Master of Science in Computer Science at the Faculty of Science, Allama Iqbal Open University, Islamabad.",
    // Sensible prefill for this programme's title page / declaration.
    defaults: {
      degree: "Master of Science in Computer Science",
      faculty: "Science",
      department: "Computer Science",
      subject: "Computer Science",
    },
    extraFields: ["co_supervisor"],
  },

  // ── 10b. AIOU — PhD (MASS COMMUNICATION), FACULTY OF SOCIAL SCIENCES ─────────
  // Programme variant of the AIOU format. Modelled on the AIOU PhD Mass
  // Communication thesis: TITLE (caps) → author + Roll No. → "ALLAMA IQBAL
  // OPEN UNIVERSITY, ISLAMABAD" on the cover, then a second page with
  // "Submitted in partial fulfillment … Doctor of Philosophy … with
  // specialization … At the Faculty of Social Sciences …". Includes the
  // two-part AIOU PhD declaration (student + forwarding supervisor) and a
  // viva-voce committee with Chairperson/Director, Dean and members.
  aiou_phd_masscomm: {
    id: "aiou_phd_masscomm",
    name: "AIOU — PhD (Mass Communication)",
    nameUrdu: "علامہ اقبال اوپن یونیورسٹی — پی ایچ ڈی ابلاغ عامہ",
    university: "Allama Iqbal Open University, Islamabad",
    language: "english",
    direction: "ltr",
    variantGroup: "aiou",
    variantLabel: "PhD Template",
    description: "AIOU Doctor of Philosophy thesis format for Mass Communication (Faculty of Social Sciences). Title-page submission statement names the PhD degree, discipline and specialization; includes the two-part AIOU PhD declaration (student plus supervisor forwarding) and a viva-voce committee with Chairperson/Director and Dean. APA 7th referencing, AIOU branding.",
    badge: "AIOU · PhD",
    badgeColor: "bg-sky-600",
    preview: "cover_aiou",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.8cm", top: "3.2cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt",
    bodyLineHeight: 2.0,
    paraIndent: "0.5in",
    refFontSize: "11pt",
    refLineHeight: 1.0,
    chapterNumSize: "16pt",
    chapterNumAlign: "center",
    chapterTitleSize: "16pt",
    sectionSize: "14pt",
    sectionCaps: true,
    sectionColor: "#000000",
    coverTitleSize: "16pt",
    coverAuthorSize: "14pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7",
    colors: {
      coverTitle: "#0369a1",
      coverAccent: "#ea580c",
      ruleColor: "#0369a1",
    },
    coverLayout: "aiou_style",
    showLogo: true,
    showSpine: true,
    // PhD-specific front matter flags.
    twoPartDeclaration: true,
    vivaRoles: ["Supervisor", "External Examiner", "Chairperson/Director", "Dean", "Members"],
    submissionStatement:
      "Submitted in partial fulfillment of the requirements for the Doctor of Philosophy degree in the discipline of Mass Communication with specialization in Mass Communication, at the Faculty of Social Sciences, Allama Iqbal Open University, Islamabad.",
    defaults: {
      degree: "Doctor of Philosophy",
      faculty: "Social Sciences",
      department: "Mass Communication",
      subject: "Mass Communication",
    },
    extraFields: ["co_supervisor", "external_examiner"],
  },

  // ── AIOU URDU TEMPLATE (from uploaded MPhil Islamic Studies 2018 dissertation)
  // RTL Urdu format: Jameel Noori Nastaleeq, A4, justified body with generous
  // line spacing, bold right-aligned headings, numbered footnote references.
  aiou_urdu: {
    id: "aiou_urdu",
    name: "AIOU — Urdu (Islamic Studies)",
    nameUrdu: "علامہ اقبال اوپن یونیورسٹی — اردو (علومِ اسلامیہ)",
    university: "Allama Iqbal Open University, Islamabad",
    language: "urdu",
    direction: "rtl",
    rtl: true,
    variantGroup: "aiou",
    variantLabel: "Urdu Template",
    description: "AIOU Urdu-medium thesis format (MPhil/PhD, Faculty of Arabic & Islamic Sciences). Right-to-left Nastaliq layout in Jameel Noori Nastaleeq on A4, justified body with generous line spacing, bold right-aligned headings, and numbered footnote references at the foot of the page — matching the AIOU Urdu Islamic-studies dissertation style. AIOU branding and crest.",
    badge: "AIOU · اردو",
    badgeColor: "bg-rose-700",
    preview: "cover_aiou",
    fonts: {
      body: "Jameel Noori Nastaleeq",
      heading: "Jameel Noori Nastaleeq",
      cover: "Jameel Noori Nastaleeq",
      fallback: "'Noto Nastaliq Urdu', 'Arial Unicode MS', serif",
    },
    margins: { right: "3.8cm", top: "2.5cm", left: "2.5cm", bottom: "2.5cm" }, // RTL: right = binding edge
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "14pt",   // Nastaliq needs a larger base size
    bodyLineHeight: 2.0,    // generous vertical space for Nastaliq legibility
    paraIndent: "0",
    refFontSize: "12pt",
    refLineHeight: 1.5,
    chapterNumSize: "16pt",
    chapterNumAlign: "center",
    chapterTitleSize: "16pt",
    sectionSize: "14pt",
    sectionCaps: false,     // Urdu script has no upper/lower case
    sectionColor: "#000000",
    coverTitleSize: "20pt",
    coverAuthorSize: "15pt",
    coverDeptSize: "14pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA7_Urdu",
    colors: {
      coverTitle: "#000000",
      coverAccent: "#8B0000",
      ruleColor: "#000000",
    },
    coverLayout: "aiou_style",
    showLogo: true,
    showSpine: true,
    urduNumerals: false,
    footnoteReferencing: true, // source uses numbered footnotes at the page foot
    submissionStatement: "تحقیقی مقالہ برائے ایم فل علومِ اسلامیہ",
    defaults: {
      degree: "Master of Philosophy",
      faculty: "Arabic and Islamic Sciences",
      department: "Islamic Thought, History & Culture",
      subject: "Islamic Studies",
    },
    googleFonts: "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap",
  },

  // ── 11. APA 7th — SOCIAL SCIENCES ───────────────────────────────────────────
  apa_social: {
    id: "apa_social",
    name: "APA 7th (Social Sciences)",
    nameUrdu: "اے پی اے فارمیٹ",
    university: "University / Institution Name",
    discipline: "Social Sciences",
    language: "english",
    direction: "ltr",
    description: "American Psychological Association (APA) 7th edition — the standard for psychology, education, sociology and the social sciences. Title page, double-spaced text, 1-inch margins, and a hanging-indent reference list ('References').",
    badge: "APA",
    badgeColor: "bg-indigo-600",
    preview: "cover_generic",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "2.54cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    coverMargins: { left: "2.54cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    bodyFontSize: "12pt", bodyLineHeight: 2.0,
    refFontSize: "12pt",  refLineHeight: 2.0,
    paraIndent: "0.5in",
    chapterNumSize: "14pt", chapterTitleSize: "12pt", sectionSize: "12pt",
    coverTitleSize: "16pt", coverAuthorSize: "13pt", coverDeptSize: "13pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "APA 7th",
    referencesLabel: "References",
    apaStrict: true,
    colors: { coverTitle: "#1e3a8a", coverAccent: "#4338ca", ruleColor: "#1e3a8a" },
    coverLayout: "centered", showLogo: true, showSpine: true,
  },

  // ── 12. MLA 9th — HUMANITIES ─────────────────────────────────────────────────
  mla_humanities: {
    id: "mla_humanities",
    name: "MLA 9th (Humanities)",
    nameUrdu: "ایم ایل اے فارمیٹ",
    university: "University / Institution Name",
    discipline: "Humanities & Languages",
    language: "english",
    direction: "ltr",
    description: "Modern Language Association (MLA) 9th edition — standard for literature, languages, philosophy and the humanities. Double-spaced throughout, 1-inch margins, and a 'Works Cited' list with hanging indents.",
    badge: "MLA",
    badgeColor: "bg-rose-600",
    preview: "cover_generic",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "2.54cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    coverMargins: { left: "2.54cm", top: "2.54cm", right: "2.54cm", bottom: "2.54cm" },
    bodyFontSize: "12pt", bodyLineHeight: 2.0,
    refFontSize: "12pt",  refLineHeight: 2.0,
    chapterNumSize: "14pt", chapterTitleSize: "12pt", sectionSize: "12pt",
    coverTitleSize: "16pt", coverAuthorSize: "13pt", coverDeptSize: "13pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "MLA 9th",
    referencesLabel: "WORKS CITED",
    colors: { coverTitle: "#9f1239", coverAccent: "#1e3a8a", ruleColor: "#9f1239" },
    coverLayout: "centered", showLogo: true, showSpine: true,
  },

  // ── 13. IEEE — COMPUTER SCIENCE ──────────────────────────────────────────────
  ieee_cs: {
    id: "ieee_cs",
    name: "IEEE (Computer Science)",
    nameUrdu: "آئی ٹرپل ای فارمیٹ",
    university: "University / Institution Name",
    discipline: "Computer Science & IT",
    language: "english",
    direction: "ltr",
    description: "IEEE citation style — the standard for computer science, software and electrical engineering theses. Numbered in-text citations such as [1], [2] with a numbered reference list ordered by first appearance.",
    badge: "IEEE",
    badgeColor: "bg-blue-600",
    preview: "cover_generic",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.0cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt", bodyLineHeight: 1.5,
    refFontSize: "10pt",  refLineHeight: 1.15,
    chapterNumSize: "14pt", chapterTitleSize: "12pt", sectionSize: "11pt",
    coverTitleSize: "16pt", coverAuthorSize: "13pt", coverDeptSize: "13pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "IEEE",
    referencesLabel: "REFERENCES",
    numberedReferences: true,
    colors: { coverTitle: "#1d4ed8", coverAccent: "#0369a1", ruleColor: "#1d4ed8" },
    coverLayout: "centered", showLogo: true, showSpine: true,
  },

  // ── 14. ENGINEERING THESIS (IEEE-style numbered) ─────────────────────────────
  engineering: {
    id: "engineering",
    name: "Engineering Thesis",
    nameUrdu: "انجینئرنگ فارمیٹ",
    university: "University / Institution Name",
    discipline: "Engineering",
    language: "english",
    direction: "ltr",
    description: "General engineering thesis format with IEEE-style numbered references [1]. A4 with a 1.25-inch binding margin, Times New Roman 12pt at 1.5 line spacing — suitable for mechanical, civil, electrical and chemical engineering departments.",
    badge: "ENGG",
    badgeColor: "bg-slate-700",
    preview: "cover_generic",
    fonts: { body: "Times New Roman", heading: "Times New Roman", cover: "Times New Roman" },
    margins: { left: "3.2cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    coverMargins: { left: "2.5cm", top: "2.5cm", right: "2.5cm", bottom: "2.5cm" },
    bodyFontSize: "12pt", bodyLineHeight: 1.5,
    refFontSize: "11pt",  refLineHeight: 1.15,
    chapterNumSize: "14pt", chapterTitleSize: "12pt", sectionSize: "11pt",
    coverTitleSize: "16pt", coverAuthorSize: "13pt", coverDeptSize: "13pt",
    pagination: { cover: "none", prelim: "roman", body: "arabic" },
    referenceStyle: "IEEE (Numbered)",
    referencesLabel: "REFERENCES",
    numberedReferences: true,
    colors: { coverTitle: "#0f172a", coverAccent: "#b45309", ruleColor: "#0f172a" },
    coverLayout: "centered", showLogo: true, showSpine: true,
  },
};

// ── Urdu chapter headings and labels ─────────────────────────────────────────
export const URDU_LABELS = {
  chapter: "باب",
  introduction: "تعارف",
  literatureReview: "ادب کا جائزہ",
  methodology: "تحقیق کا طریقہ کار",
  results: "نتائج",
  discussion: "بحث و تمحیص",
  conclusion: "نتیجہ",
  references: "حوالہ جات",
  abstract: "خلاصہ",
  acknowledgement: "ممنونیت",
  dedication: "انتساب",
  declaration: "اعلانیہ",
  tableOfContents: "فہرست مضامین",
  listOfFigures: "فہرست اشکال",
  listOfTables: "فہرست جداول",
  appendix: "ضمیمہ",
  bibliography: "کتابیات",
  supervisor: "نگران",
  coSupervisor: "شریک نگران",
  department: "شعبہ",
  faculty: "فیکلٹی",
  submittedBy: "پیش کردہ از",
  submittedTo: "پیش کردہ بہ",
  inPartialFulfillment: "جزوی تکمیل کے لیے",
  degreeOf: "ڈگری کے لیے",
  session: "سیشن",
  regNo: "رجسٹریشن نمبر",
  page: "صفحہ",
  of: "از",
  figure: "شکل",
  table: "جدول",
  equation: "مساوات",
};

// ── Font loading helper ───────────────────────────────────────────────────────
export function getTemplateFontUrl(templateId) {
  const t = TEMPLATES[templateId];
  return t?.googleFonts || null;
}

// ── CSS variables per template ────────────────────────────────────────────────
export function getTemplateCSSVars(templateId) {
  const t = TEMPLATES[templateId] || TEMPLATES.hec_standard;
  return {
    "--thesis-font-body":        t.fonts.body,
    "--thesis-font-heading":     t.fonts.heading,
    "--thesis-font-cover":       t.fonts.cover,
    "--thesis-font-urdu":        t.fonts.urdu || t.fonts.body,
    "--thesis-color-title":      t.colors.coverTitle,
    "--thesis-color-accent":     t.colors.coverAccent,
    "--thesis-color-rule":       t.colors.ruleColor,
    "--thesis-body-size":        t.bodyFontSize,
    "--thesis-body-lh":          t.bodyLineHeight,
    "--thesis-ref-size":         t.refFontSize,
    "--thesis-ref-lh":           t.refLineHeight,
    "--thesis-ch-num-size":      t.chapterNumSize,
    "--thesis-ch-title-size":    t.chapterTitleSize,
    "--thesis-sec-size":         t.sectionSize,
    "--thesis-cover-title-size": t.coverTitleSize,
    "--thesis-cover-author-size":t.coverAuthorSize,
    "--thesis-cover-dept-size":  t.coverDeptSize,
    "--thesis-margin-left":      t.direction === "rtl" ? t.margins.right || "3.8cm" : t.margins.left,
    "--thesis-margin-top":       t.margins.top,
    "--thesis-margin-right":     t.direction === "rtl" ? t.margins.left || "2.5cm" : t.margins.right,
    "--thesis-margin-bottom":    t.margins.bottom,
    "--thesis-direction":        t.direction,
    "--thesis-ref-style":        t.referenceStyle,
  };
}
