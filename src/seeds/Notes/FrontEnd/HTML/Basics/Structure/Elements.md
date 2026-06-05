# Document Structure Tags

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Head Tag

<hr class="dividerSubsection1" />

The <span class="emphasis">&lt;head&gt;</span> tag/element contains metadata and links to external resources like CSS stylesheets or JavaScript files. While not visible on the webpage, it is essential for proper rendering.

```html
<head>
  <title>Page Title</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js"></script>
</head>
```

<hr class="dividerSubsection1" />

#### Title Tag

<hr class="dividerSubsection1" />

The <span class="emphasis">&lt;title&gt;</span> tag specifies the document title, displayed in the browser tab.

```html
<title>Page Title</title>
```

<hr class="dividerSubsection1" />

#### Link Tag

<hr class="dividerSubsection1" />

The <span class="emphasis">&lt;link&gt;</span> tag is used to link external resources, such as stylesheets.

```html
<link rel="stylesheet" href="styles.css" />
```

<hr class="dividerSubsection1" />

#### Script Tag

<hr class="dividerSubsection1" />

The <span class="emphasis">&lt;script&gt;</span> tag includes JavaScript files or inline scripts.

```html
<script src="script.js"></script>
```

<hr class="dividerSubsection1" />

### HTML Body

<hr class="dividerSubsection1" />

The <span class="emphasis">&lt;body&gt;</span> element contains the visible content of the webpage, such as text, images, and interactive elements.

```html
<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
</body>
```

<hr class="dividerSection" />

## Block vs Inline Elements

<hr class="dividerSection" />

HTML elements are classified by how they display and behave in the document flow.

<hr class="dividerSubsection1" />

### Block-Level Elements

<hr class="dividerSubsection1" />

Block-level elements always start on a new line and take up the full width available by default.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Stack vertically on the page.</li>
    <li>Width stretches to fill their container unless otherwise specified.</li>
    <li>Can contain other block or inline elements.</li>
  </ul>
</div>

Common examples: <span class="emphasis">&lt;div&gt;</span>, <span class="emphasis">&lt;p&gt;</span>, <span class="emphasis">&lt;h1&gt;</span>–<span class="emphasis">&lt;h6&gt;</span>, <span class="emphasis">&lt;section&gt;</span>, <span class="emphasis">&lt;article&gt;</span>, <span class="emphasis">&lt;ul&gt;</span>, <span class="emphasis">&lt;li&gt;</span>

<hr class="dividerSubsection1" />

### Inline Elements

<hr class="dividerSubsection1" />

Inline elements stay on the same line as surrounding content and only take up as much width as their content requires.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Flow with surrounding text without breaking to a new line.</li>
    <li>Width is determined by content size only.</li>
    <li>Should not contain block-level elements.</li>
  </ul>
</div>

Common examples: <span class="emphasis">&lt;span&gt;</span>, <span class="emphasis">&lt;a&gt;</span>, <span class="emphasis">&lt;strong&gt;</span>, <span class="emphasis">&lt;em&gt;</span>, <span class="emphasis">&lt;img&gt;</span>

<hr class="dividerSubsection1" />

### Quick Comparison

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">New Line?</th>
      <th class="tableCellHeader">Default Width</th>
      <th class="tableCellHeader">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Block</td>
      <td class="tableCell">Yes</td>
      <td class="tableCell">Full width of container</td>
      <td class="tableCell">div, p, h1, section</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Inline</td>
      <td class="tableCell">No</td>
      <td class="tableCell">Content width only</td>
      <td class="tableCell">span, a, strong, em</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/html/basics/fundamentals/history">← Back</a>
    <div class="xrefTitle">Section: HTML Fundamentals → History</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/html/basics/structure/attributes">Next →</a>
    <div class="xrefTitle">HTML Structure → Attributes</div>
  </div>
</div>