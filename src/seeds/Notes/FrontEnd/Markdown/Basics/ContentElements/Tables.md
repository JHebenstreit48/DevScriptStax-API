# Tables in Markdown

Tables organize data in rows and columns. Markdown supports tables primarily through the **pipe table syntax** (the most common and widely supported style).

Below is a comparison of the recommended pipe style vs. the rare loose/grid-like alternative.

---

### Pipe Table Syntax (Recommended & Most Supported)

This is the standard GitHub Flavored Markdown (GFM) style — used in GitHub, Obsidian, GitLab, Notion, Typora, etc.

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Data A   | 100      |
| Row 2    | Data B   | 200      |
| Row 3    | Data C   | 300      |
```

With column alignment:

```markdown
| Left   | Center  | Right |
| :----- | :-----: | ----: |
| Left   | Center  | Right |
| Longer | Content |   500 |
```

How it typically renders (visual preview):

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Left     | Center   | Right    |
| Left     | Center   | Right    |
| Longer   | Content  | 500      |

(Note: Most modern viewers add borders, padding, and proper alignment. Exact appearance varies slightly.)

---

### Alternative / Loose Table Style (Rare, Limited Support)

Some very old parsers supported a more "grid-like" style without pipes on every line. This is **not** supported in GitHub, modern CommonMark, Obsidian, VS Code, or most current tools.

Example (for reference only — do not use in practice):

```markdown
Header 1 Header 2 Header 3

---

Row 1 Data A 100
Row 2 Data B 200
Row 3 Data C 300
```

How it would look if supported (rare):

    Header 1      Header 2      Header 3
    ------------  ------------  ------------
    Row 1         Data A        100
    Row 2         Data B        200
    Row 3         Data C        300

Recommendation: Avoid this style completely for compatibility.

---

### Using HTML Tables for Custom Styling (Preferred in This Project)

When pipe tables are too limited, embed full HTML <table> directly in your Markdown file.

Most Markdown processors that output HTML (GitHub Pages, Jekyll, Obsidian preview, etc.) will render it correctly as a styled table. Pure Markdown viewers may show raw HTML, so test your target platform.

**Example of how I render Tables for this project using HTML tags:**

```html
<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Value</th>
      <th class="tableCellHeader">Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">normal</span></td>
      <td class="tableCell">
        Default. The animation plays **from 0% to 100%**, then restarts.
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">reverse</span></td>
      <td class="tableCell">
        The animation **plays backward**, starting at 100% and ending at 0%.
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">alternate</span></td>
      <td class="tableCell">
        The animation **switches direction** on each loop—first forward (0% →
        100%), then backward (100% → 0%).
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">alternate-reverse</span></td>
      <td class="tableCell">
        Like <span class="codeSnip">alternate</span>, but **starts in reverse**
        (100% → 0%) before switching directions.
      </td>
    </tr>
  </tbody>
</table>
```

**How it renders** (in HTML-supporting Markdown viewers):  
A clean, bordered table with your custom classes (notesTable, tableHeader, tableCell, etc.) — full control over padding, borders, colors via CSS.

Example:

<table class="notesTable">  
    <thead>  
        <tr class="tableHeader">  
            <th class="tableCellHeader">Value</th>  
            <th class="tableCellHeader">Effect</th>  
        </tr>  
    </thead>  
    <tbody>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">normal</span></td>  
            <td class="tableCell">Default. The animation plays **from 0% to 100%**, then restarts.</td>  
        </tr>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">reverse</span></td>  
            <td class="tableCell">The animation **plays backward**, starting at 100% and ending at 0%.</td>  
        </tr>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">alternate</span></td>  
            <td class="tableCell">The animation **switches direction** on each loop—first forward (0% → 100%), then backward (100% → 0%).</td>  
        </tr>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">alternate-reverse</span></td>  
            <td class="tableCell">Like <span class="codeSnip">alternate</span>, but **starts in reverse** (100% → 0%) before switching directions.</td>  
        </tr>  
    </tbody>  
</table>

**When to choose HTML over pipe tables**  
🔹 Need custom CSS classes or advanced styling  
🔹 Want merged cells (colspan/rowspan)  
🔹 Need reliable multi-line content or HTML inside cells (e.g., lists, images)  
🔹 Pipe escaping becomes too annoying

**Compatibility note**: HTML tables work well in rendered outputs (web, PDF, etc.). For pure Markdown export, pipe tables are safer.

---

### Quick Tips for Tables Overall

🔹 Start simple with pipe tables for basic data  
🔹 Switch to HTML tables (like in this project) for styled, professional notes  
🔹 Add blank lines before and after tables for clean separation in source  
🔹 Test in your target viewer (e.g., Obsidian, GitHub)

Tables are excellent for comparisons, specifications, schedules, and data summaries — use them whenever tabular data improves clarity.

<div class="xrefNav">

<div class="xrefItem">
    <a class="xrefBtn" href="/markdown/basics/content-elements/formatting">← Back</a>
    <div class="xrefTitle">Content Elements → Formatting</div>
</div>

<div class="xrefItem">
    <a class="xrefBtn" href="/markdown/basics/content-elements/images-and-links">Next →</a>
<div class="xrefTitle">Content Elements → Images & Links</div>
</div>

</div>