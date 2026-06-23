# How the Bootstrap Grid System Works

<hr class="dividerSection" />

## What is the Bootstrap Grid System?

<hr class="dividerSection" />

The <span class="emphasis">Bootstrap Grid</span> System is a <span class="emphasis">flexible layout</span> system that divides the page into <span class="emphasis">12 equal</span> <span class="secondEmphasis">columns</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Allows you to create <span class="emphasis">responsive</span> and <span class="secondEmphasis">structured layouts</span> for your webpage.</li>
    <li>Uses <span class="emphasis">CSS Flexbox</span> for alignment.</li>
    <li>Automatically adjusts for different <span class="emphasis">screen sizes</span>.</li>
    <li>You can mix and match column sizes for <span class="emphasis">custom layouts</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Understanding col-8 and col-4

<hr class="dividerSection" />

Bootstrap's grid system is based on <span class="emphasis">12 columns</span>.

The numbers in <span class="codeSnip">col-\*</span> classes represent <span class="emphasis">how many</span> of those <span class="emphasis">12 columns</span> the <span class="secondEmphasis">element</span> will take up.

<hr class="dividerExample" />

#### Example

```html

<div class="row">
    <div class="col-8">This div takes up 8 columns</div>
    <div class="col-4">This div takes up 4 columns</div>
</div>
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">col-8</span> takes up approximately <span class="emphasis">2/3</span> (66.67%) of the total row width.</li>
    <li><span class="codeSnip">col-4</span> takes up approximately <span class="emphasis">1/3</span> (33.33%) of the total row width.</li>
    <li>Since <span class="emphasis">8 + 4 = 12</span>, these two elements will fit perfectly in a single row.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Visual Representation of col-8 and col-4

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Column Class</th>
      <th class="tableCellHeader">Grid Space Taken</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-8</span></td>
      <td class="centeredCell"><span class="tableEmphasis">8 out of 12</span></td>
    </tr>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-4</span></td>
      <td class="centeredCell"><span class="tableEmphasis">4 out of 12</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Column Class</th>
      <th class="tableCellHeader">Percentage of Row</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-8</span></td>
      <td class="centeredCell"><span class="tableEmphasis">66.67% (≈ 2/3 of the row)</span></td>
    </tr>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-4</span></td>
      <td class="centeredCell"><span class="tableEmphasis">33.33% (≈ 1/3 of the row)</span></td>
    </tr>
  </tbody>
</table>

If <span class="codeSnip">col-8</span> and <span class="codeSnip">col-4</span> were used together in a row, the total would be <span class="emphasis">12 columns</span>, meaning they would fit <span class="emphasis">perfectly</span> in a single line.

<hr class="dividerSection" />

### What Happens If You Exceed 12 Columns?

<hr class="dividerSection" />

If your total column count exceeds <span class="emphasis">12</span>, Bootstrap will force elements to <span class="emphasis">wrap to the next line</span>.

<hr class="dividerExample" />

#### Example — Will Wrap to the Next Line

```html

<div class="row">
    <div class="col-8">This div takes up 8 columns</div>
    <div class="col-6">This div takes up 6 columns</div>
    <!-- 8 + 6 = 14 (too big) -->
</div>
```

Since 8 + 6 = 14 (which is <span class="emphasis">greater than 12</span>), the second div will <span class="emphasis">move to the next row automatically</span>.

<hr class="dividerSection" />

### Screen Size Breakpoints

<hr class="dividerSection" />

Before using responsive column classes, it helps to understand the <span class="emphasis">breakpoint prefixes</span> Bootstrap uses and the <span class="secondEmphasis">minimum screen widths</span> they correspond to.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Screen Size</th>
      <th class="tableCellHeader">Class Prefix</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="tableEmphasis">Extra Small (xs)</span></td>
      <td class="tableCell"><span class="codeSnip">col-*</span> (no prefix)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="tableEmphasis">Small (sm)</span></td>
      <td class="tableCell"><span class="codeSnip">col-sm-*</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="tableEmphasis">Medium (md)</span></td>
      <td class="tableCell"><span class="codeSnip">col-md-*</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="tableEmphasis">Large (lg)</span></td>
      <td class="tableCell"><span class="codeSnip">col-lg-*</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="tableEmphasis">Extra Large (xl)</span></td>
      <td class="tableCell"><span class="codeSnip">col-xl-*</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="tableEmphasis">Extra Extra Large (xxl)</span></td>
      <td class="tableCell"><span class="codeSnip">col-xxl-*</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Class Prefix</th>
      <th class="tableCellHeader">Min Width</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">col-*</span> (no prefix)</td>
      <td class="centeredCell"><span class="tableEmphasis">&lt;576px</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">col-sm-*</span></td>
      <td class="centeredCell"><span class="tableEmphasis">≥576px</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">col-md-*</span></td>
      <td class="centeredCell"><span class="tableEmphasis">≥768px</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">col-lg-*</span></td>
      <td class="centeredCell"><span class="tableEmphasis">≥992px</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">col-xl-*</span></td>
      <td class="centeredCell"><span class="tableEmphasis">≥1200px</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">col-xxl-*</span></td>
      <td class="centeredCell"><span class="tableEmphasis">≥1400px</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Making It Responsive (col-sm-8, col-md-8, etc.)

<hr class="dividerSection" />

You can use <span class="emphasis">responsive column classes</span> to <span class="secondEmphasis">change layouts for different screen sizes</span>.

Each prefix corresponds to a breakpoint defined in the table above.

<hr class="dividerExample" />

#### Example

```html

<div class="row">
    <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12">
        This div takes up 8 columns on xl & lg screens, 6 on md, and 12 on sm.
    </div>
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        This div takes up 4 columns on xl & lg screens, 6 on md, and 12 on sm.
    </div>
</div>
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Extra-extra-large screens</span> (<span class="codeSnip">xxl</span> ≥ 1400px) — <span class="codeSnip">col-xxl-8</span> takes 8 columns, <span class="codeSnip">col-xxl-4</span> takes 4 columns (8+4=12).</li>
    <li><span class="emphasis">Extra-large screens</span> (<span class="codeSnip">xl</span> ≥ 1200px) — <span class="codeSnip">col-xl-8</span> takes 8 columns, <span class="codeSnip">col-xl-4</span> takes 4 columns (8+4=12).</li>
    <li><span class="emphasis">Large screens</span> (<span class="codeSnip">lg</span> ≥ 992px) — <span class="codeSnip">col-lg-8</span> takes 8 columns, <span class="codeSnip">col-lg-4</span> takes 4 columns (8+4=12).</li>
    <li><span class="emphasis">Medium screens</span> (<span class="codeSnip">md</span> ≥ 768px) — <span class="codeSnip">col-md-6</span> makes both divs take 6 columns each (6+6=12).</li>
    <li><span class="emphasis">Small screens</span> (<span class="codeSnip">sm</span> ≥ 576px) — Both divs take 12 columns each, stacking on top of each other.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Key Takeaways

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">col-8</span> takes <span class="emphasis">8 out of 12</span> columns (≈ 66.67% = 2/3 of the row width).</li>
    <li><span class="codeSnip">col-4</span> takes <span class="emphasis">4 out of 12</span> columns (≈ 33.33% = 1/3 of the row width).</li>
    <li>Columns must be inside a <span class="codeSnip">.row</span> for proper alignment.</li>
    <li>If column count <span class="emphasis">exceeds 12</span>, Bootstrap forces <span class="emphasis">wrapping</span> to the next line.</li>
    <li>Use <span class="emphasis">responsive classes</span> (<span class="codeSnip">col-md-8</span>, <span class="codeSnip">col-sm-12</span>) to change layouts based on screen size.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Column Class</th>
      <th class="tableCellHeader">Grid Space Taken</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-8</span></td>
      <td class="centeredCell"><span class="tableEmphasis">8/12 columns</span> (66.67%) ≈ <span class="tableEmphasis">2/3</span> of the <span class="tableEmphasis">row</span></td>
    </tr>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-4</span></td>
      <td class="centeredCell"><span class="tableEmphasis">4/12 columns</span> (33.33%) ≈ <span class="tableEmphasis">1/3 of row</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Column Class</th>
      <th class="tableCellHeader">Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-8</span></td>
      <td class="centeredCell">Stays on the same row if total ≤ 12</td>
    </tr>
    <tr class="tableRow">
      <td class="centeredCell"><span class="codeSnip">col-4</span></td>
      <td class="centeredCell">Stays on the same row if total ≤ 12</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/fundamentals/install-setup">← Back</a>
    <div class="xrefTitle">Section: Bootstrap → Fundamentals → Install & Setup</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/layout/containers-and-breakpoints">Next →</a>
    <div class="xrefTitle">Section: Bootstrap → Layout → Containers & Breakpoints</div>
  </div>
</div>