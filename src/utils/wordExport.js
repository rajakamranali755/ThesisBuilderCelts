/**
 * wordExport.js  v4
 * Template-aware MS Word export.
 * Full RTL/Urdu support via MSO bidi directives.
 */

import { TEMPLATES, URDU_LABELS } from "../data/themeTemplates";
import { chapterBlocks } from "./chapterBlocks";

function esc(s = "") {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

export function buildHtmlDocument(data, templateId = "hec_standard") {
  const tpl   = TEMPLATES[templateId] || TEMPLATES.hec_standard;
  const { cover, preliminary, chapters, references } = data;
  const isRTL = tpl.direction === "rtl";
  const isUrdu= tpl.language === "urdu";

  const font    = tpl.fonts?.body    || "Times New Roman";
  const hFont   = tpl.fonts?.heading || font;
  const cFont   = tpl.fonts?.cover   || font;
  const accent  = tpl.colors?.coverAccent  || "#000";
  const titleCl = tpl.colors?.coverTitle   || "#000";

  const bidiAttr = isRTL ? ' dir="rtl"' : '';
  const dirStyle = isRTL ? "direction:rtl;text-align:right;" : "";

  const L = {
    abstract:        isUrdu ? URDU_LABELS.abstract        : "ABSTRACT",
    acknowledgement: isUrdu ? URDU_LABELS.acknowledgement : "ACKNOWLEDGEMENT",
    dedication:      isUrdu ? URDU_LABELS.dedication      : "DEDICATION",
    declaration:     isUrdu ? URDU_LABELS.declaration     : "DECLARATION",
    references:      isUrdu ? URDU_LABELS.references      : "REFERENCES",
    by:              isUrdu ? URDU_LABELS.submittedBy      : "BY",
    session:         isUrdu ? URDU_LABELS.session          : "Session",
    regNo:           isUrdu ? URDU_LABELS.regNo            : "REGISTRATION #",
    chapter:         isUrdu ? URDU_LABELS.chapter          : "CHAPTER",
  };

  // Google font link
  const fontLink = tpl.googleFonts
    ? `<link href="${tpl.googleFonts}" rel="stylesheet"/>`
    : "";

  const css = `
    @page Section1 {
      size:595.3pt 841.9pt;
      margin-top:${tpl.margins.top};
      margin-bottom:${tpl.margins.bottom};
      margin-left:${isRTL ? (tpl.margins.right||"2.5cm") : (tpl.margins.left||"3.8cm")};
      margin-right:${isRTL ? (tpl.margins.left||"3.8cm") : (tpl.margins.right||"2.5cm")};
    }
    @page Section2 {
      size:595.3pt 841.9pt;
      margin-top:${tpl.coverMargins?.top||"2.5cm"};
      margin-bottom:${tpl.coverMargins?.bottom||"2.5cm"};
      margin-left:${tpl.coverMargins?.left||"2.5cm"};
      margin-right:${tpl.coverMargins?.right||"2.5cm"};
    }
    div.SecCover  { page:Section2; }
    div.SecBody   { page:Section1; }
    body {
      font-family:'${font}', Times, serif;
      font-size:${tpl.bodyFontSize};
      color:#000;
      ${dirStyle}
    }
    p.body {
      font-family:'${font}', Times, serif;
      font-size:${tpl.bodyFontSize};
      line-height:${tpl.bodyLineHeight};
      text-align:${isRTL?"right":(tpl.apaStrict?"left":"justify")};
      text-indent:${tpl.paraIndent || "0"};
      margin-top:12pt; margin-bottom:0;
      ${dirStyle}
    }
    p.prelim-title {
      font-family:'${hFont}', Times, serif;
      font-size:${tpl.chapterTitleSize};
      font-weight:bold;
      text-transform:${(isUrdu||tpl.apaStrict)?"none":"uppercase"};
      text-align:center;
      margin-bottom:24pt; margin-top:0;
      color:${titleCl};
      ${dirStyle}
    }
    p.prelim-body {
      font-family:'${font}', Times, serif;
      font-size:${tpl.refFontSize};
      line-height:${tpl.bodyLineHeight};
      text-align:${isRTL?"right":(tpl.apaStrict?"left":"justify")};
      margin-top:12pt; margin-bottom:0;
      ${dirStyle}
    }
    p.sig {
      font-family:'${font}', Times, serif;
      font-size:${tpl.refFontSize};
      text-align:${isRTL?"left":"right"};
      margin-top:48pt;
      ${dirStyle}
    }
    h1.ch-num {
      font-family:'${hFont}', Times, serif;
      font-size:${tpl.chapterNumSize};
      font-weight:bold; text-decoration:${tpl.apaStrict?"none":"underline"};
      text-transform:${(isUrdu||tpl.apaStrict)?"none":"uppercase"};
      text-align:${tpl.apaStrict?"center":(tpl.chapterNumAlign || (isRTL?"left":"right"))};
      color:${accent};
      margin-top:0; margin-bottom:4pt; line-height:1.0;
    }
    h2.ch-title {
      font-family:'${hFont}', Times, serif;
      font-size:${tpl.chapterTitleSize};
      font-weight:bold;
      text-transform:${(isUrdu||tpl.apaStrict)?"none":"uppercase"};
      text-align:center; line-height:${isUrdu?1.6:(tpl.apaStrict?tpl.bodyLineHeight:1.0)};
      color:${titleCl};
      margin-top:0; margin-bottom:8pt;
    }
    h3.sec {
      font-family:'${hFont}', Times, serif;
      font-size:${tpl.sectionSize};
      font-weight:bold;
      text-align:${isRTL?"right":"left"};
      color:${accent};
      line-height:1.0; margin-top:12pt; margin-bottom:4pt;
    }
    h4.subsec {
      font-family:'${hFont}', Times, serif;
      font-size:${tpl.sectionSize};
      font-weight:bold;
      text-align:${isRTL?"right":"left"};
      color:${accent};
      line-height:1.0; margin-top:12pt; margin-bottom:4pt;
    }
    p.cover-title {
      font-family:'${cFont}', Times, serif;
      font-size:${tpl.coverTitleSize};
      font-weight:bold;
      text-transform:${isUrdu?"none":"uppercase"};
      text-align:center; line-height:${isUrdu?1.8:1.5};
      border-bottom:2pt solid ${accent};
      padding-bottom:8pt; margin-bottom:12pt;
      color:${titleCl};
    }
    p.tbl-cap {
      font-family:'${hFont}', Times, serif;
      font-size:${tpl.bodyFontSize};
      font-weight:bold;
      text-align:${isRTL?"right":"justify"};
      color:${accent};
      margin-top:12pt; margin-bottom:4pt; line-height:1.5;
    }
    table.thesis {
      border-collapse:collapse; width:100%;
      font-family:'${font}',Times,serif;
      font-size:${tpl.refFontSize};
      margin-bottom:12pt;
      ${dirStyle}
    }
    table.thesis th {
      border-top:1.5pt solid ${accent};
      border-bottom:1.5pt solid ${accent};
      padding:4pt 8pt; font-weight:bold; text-align:center;
    }
    table.thesis td { padding:4pt 8pt; }
    table.thesis tr.lr td { border-bottom:1.5pt solid ${accent}; }
    p.fig-cap {
      font-family:'${font}',Times,serif;
      font-size:${tpl.refFontSize};
      line-height:1.0;
      text-align:${isRTL?"right":"justify"};
      margin-top:4pt; margin-bottom:12pt;
      ${dirStyle}
    }
    p.ref {
      font-family:'${font}',Times,serif;
      font-size:${tpl.refFontSize};
      line-height:${tpl.refLineHeight};
      text-align:${isRTL?"right":"justify"};
      margin-top:12pt; margin-bottom:0;
      padding-${isRTL?"right":"left"}:36pt;
      text-indent:${isRTL?"36pt":"-36pt"};
      ${dirStyle}
    }
    p.epigraph {
      font-family:'${font}',Times,serif;
      font-size:${tpl.bodyFontSize};
      font-style:italic; text-align:center;
      margin:24pt 0; ${dirStyle}
    }
    .pb { page-break-before:always; }
    hr.rule { border:none; border-top:2pt solid ${accent}; width:80%; margin:8pt auto; }
  `;

  const prelim = (titleStr, bodyText, sigName="") => {
    const paras = (bodyText||"").split("\n").filter(l=>l.trim())
      .map(l=>`<p class="prelim-body"${bidiAttr}>${esc(l)}</p>`).join("\n");
    const sig = sigName
      ? `<p class="sig"${bidiAttr}>(${esc(sigName)})<br/>${isUrdu?"تاریخ: _____________":"Date: _______________"}</p>`
      : "";
    return `<div class="pb"${bidiAttr}>
<p class="prelim-title"${bidiAttr}>${esc(titleStr)}</p>
${paras}${sig}
</div>`;
  };

  const buildTable = (t) => {
    const last = t.rows.length - 1;
    return `<p class="tbl-cap"${bidiAttr}>${esc(t.caption)}</p>
<table class="thesis"${bidiAttr}>
<thead><tr>${t.headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead>
<tbody>${t.rows.map((row,ri)=>`<tr${ri===last?' class="lr"':""}>${row.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
</table>`;
  };

  const buildFigure = (f) => {
    const figLabel = isUrdu
      ? `${URDU_LABELS.figure} ${(f.label||"").replace("Figure","").replace(":","").trim()}:`
      : f.label;
    const imgHtml = f.imageData
      ? `<img src="${f.imageData}" alt="${esc(f.caption||"")}" style="display:block;max-width:100%;width:100%;object-fit:contain;margin-bottom:4pt;"/>`
      : `<div style="border:1pt dashed #999;height:5cm;display:flex;align-items:center;justify-content:center;font-style:italic;font-size:11pt;color:#888;margin-top:12pt;margin-bottom:0;">${isUrdu?"[تصویر — یہاں تصویر داخل کریں]":"[Figure — No image uploaded]"}</div>`;
    return `${imgHtml}
<p class="fig-cap"${bidiAttr}><strong>${esc(figLabel)}</strong> ${esc(f.caption)}${f.description?": "+esc(f.description):""}</p>`;
  };

  const buildChapter = (ch, i) => {
    const num = String(ch.chapterNo||i+1).padStart(2,"0");
    const chLabel = isUrdu ? `${L.chapter} ${convertUrdu(i+1)}` : `${L.chapter} ${num}`;
    let out = `<div class="pb"${bidiAttr}>`;
    out += `<h1 class="ch-num"${bidiAttr}>${esc(chLabel)}</h1>`;
    out += `<h2 class="ch-title"${bidiAttr}>${esc(ch.title||"")}</h2>`;
    if (ch.epigraph) out += `<p class="epigraph"${bidiAttr}>${esc(ch.epigraph)}</p>`;
    // Inline content blocks — text, figures and tables in the order added.
    chapterBlocks(ch).forEach(b => {
      if (b.type === "figure") { out += buildFigure(b); return; }
      if (b.type === "table")  { out += buildTable(b);  return; }
      (b.content||"").split("\n").filter(l=>l.trim()).forEach(p=>{
        out += `<p class="body"${bidiAttr}>${esc(p)}</p>`;
      });
    });
    (ch.sections||[]).forEach(sec=>{
      out+=`<h3 class="sec"${bidiAttr}>${esc(sec.number)} ${esc(sec.heading)}</h3>`;
      (sec.content||"").split("\n").filter(l=>l.trim()).forEach(p=>{
        out+=`<p class="body"${bidiAttr}>${esc(p)}</p>`;
      });
      (sec.subsections||[]).forEach(sub=>{
        out+=`<h4 class="subsec"${bidiAttr}>${esc(sub.number)} ${esc(sub.heading)}</h4>`;
        (sub.content||"").split("\n").filter(l=>l.trim()).forEach(p=>{
          out+=`<p class="body"${bidiAttr}>${esc(p)}</p>`;
        });
      });
    });
    out+=`</div>`;
    return out;
  };

  function convertUrdu(n) {
    const d=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
    return String(n).split("").map(c=>d[parseInt(c)]??c).join("");
  }

  let html = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40"${isRTL?' dir="rtl"':''}>
<head>
<meta charset="UTF-8"/>
<meta name="ProgId" content="Word.Document"/>
<!--[if gte mso 9]><xml>
<w:WordDocument>
  <w:View>Print</w:View><w:Zoom>100</w:Zoom>
  ${isRTL?"<w:BiDi/>":""}
  <w:DoNotOptimizeForBrowser/>
</w:WordDocument></xml><![endif]-->
${fontLink}
<style>${css}</style>
</head>
<body${isRTL?' dir="rtl"':''}>`;

  // Cover
  html += `<div class="SecCover"${bidiAttr}>
<hr class="rule"/>
${cover.logo
  ? `<img src="${cover.logo}" alt="University logo" style="width:5.57cm;height:4.2cm;object-fit:contain;display:block;margin:0 auto 8pt;"/>`
  : `<div style="width:5.57cm;height:4.2cm;border:1pt solid ${accent};border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8pt;font-style:italic;font-size:10pt;color:${accent};">
  ${isUrdu?"[یونیورسٹی نشان]":"[University Emblem]"}
</div>`}
<hr class="rule"/>
<p class="cover-title"${bidiAttr}>${esc(cover.title||"")}</p>
<p style="font-family:'${font}';font-size:12pt;text-align:center;margin-top:12pt;">${isUrdu?"ڈگری کے جزوی تقاضوں کی تکمیل کے لیے پیش کردہ":"A Thesis Submitted in Partial Fulfillment of the Requirements for the Award of the Degree of"}</p>
<p style="font-family:'${hFont}';font-size:${tpl.coverAuthorSize};font-weight:bold;text-align:center;margin-top:6pt;color:${titleCl};">${esc(cover.degree||"")}</p>
<p style="font-family:'${font}';font-size:12pt;text-align:center;margin-top:2pt;">${isUrdu?"مضمون میں":"In"}</p>
<p style="font-family:'${hFont}';font-size:${tpl.coverAuthorSize};font-weight:bold;text-align:center;margin-top:2pt;color:${titleCl};">${esc(cover.subject||"")}</p>
<p style="font-family:'${hFont}';font-size:${tpl.coverAuthorSize};font-weight:bold;text-align:center;text-transform:${isUrdu?"none":"uppercase"};margin-top:20pt;color:${accent};">${L.by}</p>
<p style="font-family:'${cFont}';font-size:${tpl.coverAuthorSize};font-weight:bold;text-transform:${isUrdu?"none":"uppercase"};text-align:center;margin-top:6pt;color:${titleCl};">${esc(cover.authorName||"")}</p>
${cover.registrationNo?`<p style="font-family:'${hFont}';font-size:${tpl.coverAuthorSize};font-weight:bold;text-align:center;margin-top:4pt;">${L.regNo} ${esc(cover.registrationNo)}</p>`:""}
${cover.supervisor?`<p style="font-family:'${font}';font-size:12pt;text-align:center;margin-top:16pt;color:#555;">${isUrdu?URDU_LABELS.supervisor:"Supervisor"}</p>
<p style="font-family:'${hFont}';font-size:${tpl.coverDeptSize};font-weight:bold;text-align:center;color:${titleCl};">${esc(cover.supervisor)}</p>`:""}
<p style="font-family:'${hFont}';font-size:${tpl.coverDeptSize};font-weight:bold;text-align:center;margin-top:20pt;color:${titleCl};">${esc(cover.department||"")}</p>
<p style="font-family:'${hFont}';font-size:${tpl.coverDeptSize};font-weight:bold;text-transform:${isUrdu?"none":"uppercase"};text-align:center;margin-top:6pt;color:${accent};">${esc(cover.university||"")}</p>
${cover.session?`<p style="font-family:'${font}';font-size:12pt;text-align:center;margin-top:6pt;">${L.session} ${esc(cover.session)}</p>`:""}
<hr class="rule" style="margin-top:10pt;"/>
</div>`;

  // Prelims
  html += `<div class="SecBody"${bidiAttr}>`;
  if (preliminary.acknowledgement) html += prelim(L.acknowledgement, preliminary.acknowledgement, cover.authorName);
  if (preliminary.dedication)      html += prelim(L.dedication,      preliminary.dedication,      cover.authorName);
  if (preliminary.declaration)     html += prelim(L.declaration,     preliminary.declaration,     cover.authorName);
  if (preliminary.abstract) {
    const paras = (preliminary.abstract||"").split("\n").filter(l=>l.trim()).map(l=>`<p class="body"${bidiAttr}>${esc(l)}</p>`).join("\n");
    html += `<div class="pb"${bidiAttr}><p class="prelim-title"${bidiAttr}>${L.abstract}</p>${paras}</div>`;
  }

  // Chapters
  chapters.forEach((ch,i)=>{ html+=buildChapter(ch,i); });

  // References
  if (references.length>0) {
    const refLabel = (!isUrdu && tpl.referencesLabel) ? tpl.referencesLabel : L.references;
    html+=`<div class="pb"${bidiAttr}><p class="prelim-title"${bidiAttr}>${refLabel}</p>
${references.map((r,i)=>`<p class="ref"${bidiAttr}>${tpl.numberedReferences?`[${i+1}] `:""}${esc(r)}</p>`).join("\n")}</div>`;
  }
  html+=`</div></body></html>`;
  return html;
}

export function downloadAsWord(data, filename, templateId="hec_standard") {
  const html = buildHtmlDocument(data, templateId);
  const blob = new Blob(["\ufeff", html], { type:"application/msword;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = filename||"thesis.doc";
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

export function printDocument(data, templateId="hec_standard") {
  const html = buildHtmlDocument(data, templateId);
  const win  = window.open("","_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(()=>{ win.print(); }, 700);
}
