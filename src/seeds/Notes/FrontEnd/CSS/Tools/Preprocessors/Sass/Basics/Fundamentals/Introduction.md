# What Is Sass?

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

<span class="emphasis">Sass</span> (Syntactically Awesome Stylesheets) is a CSS extension language that adds extra functionality to CSS.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Introduces <span class="emphasis">variables, nesting, mixins, and logic-based styling</span>.</li>
    <li>Helps reduce repetition in stylesheets.</li>
    <li>Compiles into standard CSS, making it browser-compatible.</li>
    <li>Used by popular frameworks like Bootstrap.</li>
    <li>Browsers cannot read Sass directly — it must be compiled first.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Sass vs. CSS

<hr class="dividerSection" />

Sass extends CSS with additional features not available in standard CSS.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Aspect</th>
      <th class="tableCellHeader">Sass</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Standardized?</td>
      <td class="tableCell">No — Sass is not an official W3C standard.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Works in Browsers?</td>
      <td class="tableCell">No — browsers do not understand Sass directly.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Compilation Needed?</td>
      <td class="tableCell">Yes — Sass must be compiled into CSS.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Advanced Features?</td>
      <td class="tableCell">Yes — includes variables, mixins, loops, and more.</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Aspect</th>
      <th class="tableCellHeader">CSS</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Standardized?</td>
      <td class="tableCell">Yes — CSS is an official W3C standard.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Works in Browsers?</td>
      <td class="tableCell">Yes — CSS works natively in browsers.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Compilation Needed?</td>
      <td class="tableCell">No — CSS does not require compilation.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Advanced Features?</td>
      <td class="tableCell">No — CSS is simpler with fewer dynamic features.</td>
    </tr>
  </tbody>
</table>

Sass is not a replacement for CSS — it enhances it.

<hr class="dividerSection" />

## What Is W3C?

<hr class="dividerSection" />

<span class="emphasis">W3C (World Wide Web Consortium)</span> is the main international organization that develops web standards, including CSS, HTML, and JavaScript.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>It ensures consistency across browsers and devices.</li>
    <li>CSS is an official W3C standard — Sass is not.</li>
    <li>Sass is a preprocessor that adds features on top of CSS but is not part of the official web standards.</li>
    <li>Browsers support W3C standards natively but do not support Sass directly.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Sass File Extensions

<hr class="dividerSection" />

Sass uses two different file extensions:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Extension</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.scss</span></td>
      <td class="tableCell">The most common syntax — similar to CSS with curly braces and semicolons.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.sass</span></td>
      <td class="tableCell">A shorthand syntax that removes curly braces and semicolons, relying on indentation instead.</td>
    </tr>
  </tbody>
</table>

SCSS is preferred because it is easier to read and write, especially for developers already familiar with CSS.

<hr class="dividerSection" />

## How Sass Works

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. **Write styles in a Sass file**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use either <span class="codeSnip">.scss</span> or <span class="codeSnip">.sass</span> syntax.</li>
  </ul>
</div>

2. **Compile Sass into standard CSS**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use a preprocessor tool to convert Sass into browser-readable CSS.</li>
  </ul>
</div>

3. **Link the compiled file to your HTML**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Link the compiled <span class="codeSnip">.css</span> file to your HTML page as you normally would.</li>
  </ul>
</div>

</div>

Example Sass file (<span class="codeSnip">.scss</span>):

```css
$primary-color: blue;

button {
  background-color: $primary-color;
  color: white;
  padding: 10px;
}
```

After compilation it becomes standard CSS:

```css
button {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

Sass variables make code reusable and easier to maintain.

<hr class="dividerSection" />

## Compiling Sass

<hr class="dividerSection" />

Before using Sass in a project you need to compile your Sass files into standard CSS.

<hr class="dividerSubsection1" />

### Installing Sass

<hr class="dividerSubsection1" />

```shell
npm install sass --save-dev
```

<hr class="dividerSubsection1" />

### Compiling a Single File

<hr class="dividerSubsection1" />

```shell
npx sass Sass/main.sass Sass/main.css
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">Sass/main.sass</span> — the input Sass file.</li>
    <li><span class="codeSnip">Sass/main.css</span> — the output CSS file.</li>
  </ul>
</div>

For an entire directory:

```shell
npx sass Sass:dist
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">Sass/</span> — folder containing <span class="codeSnip">.sass</span> files.</li>
    <li><span class="codeSnip">dist/</span> — folder where compiled <span class="codeSnip">.css</span> files are saved.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Watching for Changes

<hr class="dividerSubsection1" />

To automatically recompile when changes are made:

```shell
npx sass --watch Sass/main.sass Sass/main.css
```

For an entire folder:

```shell
npx sass --watch Sass:dist
```

<hr class="dividerSubsection1" />

### Adding Compilation to package.json

<hr class="dividerSubsection1" />

To automate Sass compilation add scripts to your <span class="codeSnip">package.json</span>:

```js
{
  "scripts": {
    "sass": "sass Sass/main.sass Sass/main.css",
    "sass:watch": "sass --watch Sass/main.sass Sass/main.css",
    "sass:watch-all": "sass --watch Sass:dist"
  }
}
```

Then run them from the CLI:

```shell
npm run sass
```

```shell
npm run sass:watch
```

```shell
npm run sass:watch-all
```

<hr class="dividerSubsection1" />

### Identifying Watched Files

<hr class="dividerSubsection1" />

When using <span class="codeSnip">--watch</span>, Sass provides real-time feedback in the terminal.

When watching a single file you will see:

```shell
Sass is watching for changes...
Compiled Sass/main.sass to Sass/main.css.
```

If you modify the file it automatically recompiles:

```shell
Change detected. Recompiling...
Compiled Sass/main.sass to Sass/main.css.
```

When watching multiple files:

```shell
Sass is watching for changes...
Watching Sass/*.sass
```

If any file inside the folder changes:

```shell
Change detected in Sass/header.sass. Recompiling...
Compiled Sass/header.sass to dist/header.css.
```

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/less/advanced/best-practices/tooling-build-integration">← Back</a>
    <div class="xrefTitle">Topic: Less → Advanced → Best Practices → Tooling & Build Integration</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/sass/fundamentals/variables-nesting">Next →</a>
    <div class="xrefTitle">Sass → Fundamentals → Variables & Nesting</div>
  </div>
</div>