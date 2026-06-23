# Partials & Imports in Sass

<hr class="dividerSection" />

## What Are Partials?

<hr class="dividerSection" />

Partials are smaller Sass files that can be imported into other Sass files.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Partials help organize styles into modular files.</li>
    <li>They are not compiled into CSS directly unless imported.</li>
    <li>A partial file starts with an underscore (<span class="codeSnip">_</span>) to indicate it should be included in another file.</li>
  </ul>
</div>

Example partial file (<span class="codeSnip">_buttons.sass</span>):

```css
$buttonColor: blue

.button
  background-color: $buttonColor
  color: white
  padding: 10px
```

<hr class="dividerSection" />

## Using @import to Include Partials

<hr class="dividerSection" />

Sass provides the <span class="codeSnip">@import</span> directive to include partials inside other Sass files.

```css
@import "filename"
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Do not include the underscore (<span class="codeSnip">_</span>) or file extension (<span class="codeSnip">.sass</span>) when importing.</li>
    <li>Sass automatically looks for a file named <span class="codeSnip">_filename.sass</span>.</li>
  </ul>
</div>

Example importing <span class="codeSnip">_buttons.sass</span> into <span class="codeSnip">styles.sass</span>:

```css
@import "buttons"

body
  font-family: Arial, sans-serif
```

<hr class="dividerSection" />

## Why @import Is Deprecated

<hr class="dividerSection" />

In modern Sass, <span class="codeSnip">@import</span> is deprecated in favor of <span class="codeSnip">@use</span> and <span class="codeSnip">@forward</span>.

Problems with <span class="codeSnip">@import</span>:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Causes global namespace pollution — mixes all styles together.</li>
    <li>Files are imported multiple times, leading to duplicate styles.</li>
    <li>No clear dependency management between files.</li>
  </ul>
</div>

The solution:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">@use</span> is the new way to import files while keeping styles modular.</li>
    <li><span class="codeSnip">@forward</span> is used in shared modules to expose styles to multiple files.</li>
  </ul>
</div>

<hr class="dividerSection" />

## @import vs. @use

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">@import</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Global Namespace</td>
      <td class="tableCell">Yes — all variables and mixins are global.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Duplicate Imports</td>
      <td class="tableCell">Yes — imports the same file multiple times.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Recommended?</td>
      <td class="tableCell">No — deprecated in newer Sass versions.</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">@use</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Global Namespace</td>
      <td class="tableCell">No — keeps variables private by default.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Duplicate Imports</td>
      <td class="tableCell">No — each file is only loaded once.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Recommended?</td>
      <td class="tableCell">Yes — use <span class="codeSnip">@use</span> instead of <span class="codeSnip">@import</span>.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Replacing @import with @use

<hr class="dividerSection" />

Instead of <span class="codeSnip">@import</span>, use <span class="codeSnip">@use</span> to import partials in a modular way.

Old approach using <span class="codeSnip">@import</span>:

```css
@import "buttons"
```

New approach using <span class="codeSnip">@use</span>:

```css
@use "buttons"
```

<hr class="dividerSection" />

## Using @forward for Shared Modules

<hr class="dividerSection" />

If you have a central Sass file that imports multiple files, use <span class="codeSnip">@forward</span> to expose styles.

Example using <span class="codeSnip">@forward</span> in <span class="codeSnip">_all.sass</span>:

```css
@forward "buttons"
@forward "typography"
```

Then in <span class="codeSnip">styles.sass</span> you can import everything at once:

```css
@use "all"
```

<hr class="dividerSection" />

## Best Practices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use <span class="codeSnip">@use</span> instead of <span class="codeSnip">@import</span> in modern Sass.</li>
    <li>Keep files modular — one purpose per partial.</li>
    <li>Use <span class="codeSnip">@forward</span> to group shared files.</li>
    <li>Follow naming conventions — prefix partials with <span class="codeSnip">_</span> such as <span class="codeSnip">_filename.sass</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Partials (<span class="codeSnip">_filename.sass</span>) help modularize styles.</li>
    <li><span class="codeSnip">@import</span> is deprecated — use <span class="codeSnip">@use</span> and <span class="codeSnip">@forward</span> instead.</li>
    <li><span class="codeSnip">@use</span> prevents global namespace pollution.</li>
    <li><span class="codeSnip">@forward</span> is useful for sharing styles across multiple files.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/sass/syntax/scss-vs-sass">← Back</a>
    <div class="xrefTitle">Sass → Syntax → SCSS vs Sass Syntax</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/sass/advanced/concepts/control-directives-loops">Next →</a>
    <div class="xrefTitle">Section: Sass → Concepts → Control Directives & Loops</div>
  </div>
</div>