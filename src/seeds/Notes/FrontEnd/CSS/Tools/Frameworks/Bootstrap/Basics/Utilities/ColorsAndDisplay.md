# Bootstrap Colors, Display & Data Attributes

<hr class="dividerSection" />

## Bootstrap Color Classes

<hr class="dividerSection" />

Bootstrap provides predefined color classes for <span class="emphasis">text, backgrounds, and borders</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Primary</span> — typically represents <span class="emphasis">blue</span>.</li>
    <li><span class="emphasis">Success</span> — typically represents <span class="emphasis">green</span>.</li>
    <li><span class="emphasis">Danger</span> — typically represents <span class="emphasis">red</span>.</li>
    <li><span class="emphasis">Warning</span> — typically represents <span class="emphasis">yellow</span> or <span class="emphasis">orange</span>.</li>
    <li><span class="emphasis">Info</span> — typically represents <span class="emphasis">light blue</span>.</li>
    <li><span class="emphasis">Dark</span> — typically represents <span class="emphasis">dark gray</span> or <span class="emphasis">black</span>.</li>
    <li><span class="emphasis">Light</span> — typically represents <span class="emphasis">light gray</span> or <span class="emphasis">white</span>.</li>
  </ul>
</div>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Text Class</th>
      <th class="tableCellHeader">Color</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">text-primary</span></td>
      <td class="tableCell">Blue</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">text-success</span></td>
      <td class="tableCell">Green</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">text-danger</span></td>
      <td class="tableCell">Red</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">text-warning</span></td>
      <td class="tableCell">Yellow / Orange</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">text-info</span></td>
      <td class="tableCell">Light Blue</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">text-dark</span></td>
      <td class="tableCell">Dark Gray / Black</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">text-light</span></td>
      <td class="tableCell">Light Gray / White</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Background Class</th>
      <th class="tableCellHeader">Color</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bg-primary</span></td>
      <td class="tableCell">Blue Background</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bg-success</span></td>
      <td class="tableCell">Green Background</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bg-danger</span></td>
      <td class="tableCell">Red Background</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bg-warning</span></td>
      <td class="tableCell">Yellow / Orange Background</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bg-info</span></td>
      <td class="tableCell">Light Blue Background</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bg-dark</span></td>
      <td class="tableCell">Dark Gray / Black Background</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bg-light</span></td>
      <td class="tableCell">Light Gray / White Background</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Bootstrap Utilities Overview

<hr class="dividerSection" />

Bootstrap provides built-in utility classes that control spacing, colors, typography, and more.  

To find them go to the Bootstrap documentation and click the <span class="emphasis">Utilities</span> dropdown.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Colors</span> — lists available text and background colors.</li>
    <li><span class="emphasis">Spacing</span> — predefined padding and margin classes.</li>
    <li><span class="emphasis">Typography</span> — controls font styles and sizes.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Bootstrap Collapse Utility

<hr class="dividerSection" />

The <span class="codeSnip">collapse</span> class is used to <span class="emphasis">show</span> and <span class="emphasis">hide</span> content <span class="secondEmphasis">dynamically</span> without JavaScript.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Allows toggling content visibility with a button or link.</li>
    <li>Requires <span class="codeSnip">data-bs-toggle="collapse"</span> for functionality.</li>
    <li>Uses <span class="codeSnip">id</span> to link the trigger element to the collapsible content.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Basic Collapse Example

<hr class="dividerSubsection1" />

```html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
  Toggle Content
</button>
<div id="exampleCollapse" class="collapse">
  This content will appear when the button is clicked.
</div>
```

Clicking the button <span class="emphasis">toggles</span> the <span class="secondEmphasis">visibility</span> of the div.

<hr class="dividerSubsection1" />

### Making a Section Expand by Default

<hr class="dividerSubsection1" />

To have content <span class="emphasis">visible by default</span>, add <span class="codeSnip">show</span> inside the collapse class:

```html
<div id="exampleCollapse" class="collapse show">
  This content is visible by default.
</div>
```

The <span class="emphasis">show</span> class makes the section <span class="emphasis">expanded</span> on <span class="secondEmphasis">page load</span>.

<hr class="dividerSubsection1" />

### Using Collapse with Multiple Elements

<hr class="dividerSubsection1" />

```html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target=".multiCollapse">
  Toggle Both Sections
</button>
<div class="collapse multiCollapse">Content 1</div>
<div class="collapse multiCollapse">Content 2</div>
```

This <span class="emphasis">toggles multiple sections</span> at the same time.

<hr class="dividerSection" />

## Bootstrap data-toggle Attribute (Deprecated)

<hr class="dividerSection" />

The <span class="codeSnip">data-toggle</span> attribute was used in <span class="emphasis">Bootstrap 4 and earlier</span> to enable JavaScript-based behaviors <span class="emphasis">without</span> <span class="secondEmphasis">custom</span> JavaScript.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Deprecated in Bootstrap 5 — replaced by <span class="codeSnip">data-bs-toggle</span>.</li>
    <li>Still used in Bootstrap 4 and below.</li>
    <li>The new format ensures consistency with Bootstrap 5's naming conventions.</li>
  </ul>
</div>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Old — Bootstrap 4</th>
      <th class="tableCellHeader">New — Bootstrap 5</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">data-toggle="collapse"</span></td>
      <td class="tableCell"><span class="codeSnip">data-bs-toggle="collapse"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">data-toggle="modal"</span></td>
      <td class="tableCell"><span class="codeSnip">data-bs-toggle="modal"</span></td>
    </tr>
  </tbody>
</table>

Example using the correct Bootstrap 5 syntax:

```html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
  Toggle Content
</button>
<div id="exampleCollapse" class="collapse">
  This content will appear when the button is clicked.
</div>
```

This is the correct Bootstrap 5 syntax.

<span class="emphasis">NOTE</span>: Do not use <span class="codeSnip">data-toggle</span> in Bootstrap 5.

<hr class="dividerSection" />

## Bootstrap data-target Attribute (Deprecated)

<hr class="dividerSection" />

The <span class="codeSnip">data-target</span> attribute was used in <span class="emphasis">Bootstrap 4 and earlier</span> to define the <span class="emphasis">element that should be affected by data-toggle</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Deprecated in Bootstrap 5 — replaced by <span class="codeSnip">data-bs-target</span>.</li>
    <li>Still used in Bootstrap 4 and below.</li>
    <li>The new format follows Bootstrap 5's naming convention for consistency.</li>
  </ul>
</div>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Old — Bootstrap 4</th>
      <th class="tableCellHeader">New — Bootstrap 5</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">data-target="#exampleCollapse"</span></td>
      <td class="tableCell"><span class="codeSnip">data-bs-target="#exampleCollapse"</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">data-target="#myModal"</span></td>
      <td class="tableCell"><span class="codeSnip">data-bs-target="#myModal"</span></td>
    </tr>
  </tbody>
</table>

Example using the correct Bootstrap 5 syntax:

```html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
  Toggle Content
</button>
<div id="exampleCollapse" class="collapse">
  This content will appear when the button is clicked.
</div>
```

This is the correct Bootstrap 5 syntax. Do not use <span class="codeSnip">data-target</span> in Bootstrap 5.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/utilities/spacing-and-sizing">← Back</a>
    <div class="xrefTitle">Bootstrap → Utilities → Spacing & Sizing</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/utilities/buttons">Next →</a>
    <div class="xrefTitle">Bootstrap → Utilities → Buttons</div>
  </div>
</div>