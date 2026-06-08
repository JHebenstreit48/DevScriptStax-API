# Bootstrap Spacing Utilities

<hr class="dividerSection" />

## Spacing Class Structure

<hr class="dividerSection" />

Bootstrap provides predefined classes for <span class="emphasis">padding and margins</span> using the pattern:

<span class="codeSnip">{property}{sides}-{size}</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">p</span> — Padding</li>
    <li><span class="emphasis">m</span> — Margin</li>
    <li><span class="emphasis">x</span> — Left and Right</li>
    <li><span class="emphasis">y</span> — Top and Bottom</li>
    <li><span class="emphasis">t</span> — Top</li>
    <li><span class="emphasis">b</span> — Bottom</li>
    <li><span class="emphasis">l</span> — Left</li>
    <li><span class="emphasis">r</span> — Right</li>
    <li><span class="emphasis">size</span> — A number from <span class="emphasis">0 to 5</span> that determines spacing</li>
  </ul>
</div>

<hr class="dividerSection" />

## Bootstrap Spacing Scale

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Size</th>
      <th class="tableCellHeader">Pixels</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">0</td>
      <td class="tableCell">0px</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1</td>
      <td class="tableCell">4px</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2</td>
      <td class="tableCell">8px</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3</td>
      <td class="tableCell">16px</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">4</td>
      <td class="tableCell">24px</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5</td>
      <td class="tableCell">48px</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Size</th>
      <th class="tableCellHeader">rem</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">0</td>
      <td class="tableCell">0rem</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1</td>
      <td class="tableCell">0.25rem</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2</td>
      <td class="tableCell">0.5rem</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3</td>
      <td class="tableCell">1rem</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">4</td>
      <td class="tableCell">1.5rem</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5</td>
      <td class="tableCell">3rem</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Examples of Bootstrap Spacing Classes

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. **Padding on All Sides**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">p-5</span> — applies 48px (3rem) padding on all sides.</li>
  </ul>
</div>

2. **Padding on the Y-Axis (Top & Bottom)**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">py-5</span> — applies 48px padding on the top and bottom.</li>
  </ul>
</div>

3. **Padding on the X-Axis (Left & Right)**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">px-5</span> — applies 48px padding on the left and right.</li>
  </ul>
</div>

4. **Margin on All Sides**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">m-3</span> — applies 16px margin on all sides.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Summary of Bootstrap Spacing Classes

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Class</th>
      <th class="tableCellHeader">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">p-5</span></td>
      <td class="tableCell">Padding on all sides (48px)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">py-5</span></td>
      <td class="tableCell">Padding on top and bottom (48px)</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Class</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">p-5</span></td>
      <td class="tableCell"><span class="codeSnip">&lt;div class="p-5"&gt;...&lt;/div&gt;</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">py-5</span></td>
      <td class="tableCell"><span class="codeSnip">&lt;div class="py-5"&gt;...&lt;/div&gt;</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/layout/containers-and-breakpoints">← Back</a>
    <div class="xrefTitle">Section: Bootstrap → Layout → Containers & Breakpoints</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/utilities/colors-and-display">Next →</a>
    <div class="xrefTitle">Bootstrap → Utilities → Colors & Display</div>
  </div>
</div>