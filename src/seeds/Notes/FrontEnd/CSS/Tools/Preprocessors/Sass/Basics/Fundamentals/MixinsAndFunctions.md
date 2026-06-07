# Mixins & Functions in Sass

<hr class="dividerSection" />

## What Are Mixins?

<hr class="dividerSection" />

Mixins allow you to reuse groups of styles without repeating code.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>They accept parameters for dynamic styling.</li>
    <li>Unlike <span class="codeSnip">@extend</span>, mixins do not merge selectors, preventing unintended styles.</li>
    <li>They are useful for responsive design, utility styles, and vendor prefixes.</li>
  </ul>
</div>

Example of a mixin:

```css
@mixin button-styles($bgColor)
  background-color: $bgColor
  color: white
  padding: 10px

.button
  @include button-styles(blue)
```

<hr class="dividerSection" />

## Creating and Using Mixins

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Basic Mixin Syntax

<hr class="dividerSubsection1" />

```css
@mixin mixin-name(parameters)
  property: value

@include mixin-name(arguments)
```

<hr class="dividerSubsection1" />

### Example: Mixin for Buttons

<hr class="dividerSubsection1" />

```css
@mixin button-styles($bgColor, $textColor: white)
  background-color: $bgColor
  color: $textColor
  padding: 10px

.button-primary
  @include button-styles(blue)

.button-danger
  @include button-styles(red, black)
```

Mixins allow reusable styles with dynamic values.

<hr class="dividerSection" />

## Mixin vs. @extend

<hr class="dividerSection" />

Both <span class="codeSnip">@mixin</span> and <span class="codeSnip">@extend</span> allow code reuse but they work differently.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">@mixin</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Allows Parameters?</td>
      <td class="tableCell">Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Repeats Code in CSS?</td>
      <td class="tableCell">Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Best For</td>
      <td class="tableCell">Reusable styles with variables</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">@extend</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Allows Parameters?</td>
      <td class="tableCell">No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Repeats Code in CSS?</td>
      <td class="tableCell">No — merges selectors</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Best For</td>
      <td class="tableCell">Inheritance-based styles</td>
    </tr>
  </tbody>
</table>

Use <span class="codeSnip">@mixin</span> for dynamic styles and <span class="codeSnip">@extend</span> for inheritance.

<hr class="dividerSection" />

## Best Practices for Using Mixins

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Keep mixins small and modular — avoid bloated CSS.</li>
    <li>Use mixins for reusable components such as buttons, grids, and breakpoints.</li>
    <li>Avoid excessive mixins — use <span class="codeSnip">@extend</span> when applicable.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Using Mixins for Responsive Design

<hr class="dividerSection" />

Mixins are useful for media queries and responsive layouts.

```css
@mixin mobile
  @media screen and (max-width: 600px)
    @content

.container
  width: 80%

  @include mobile
    width: 100%
```

<span class="codeSnip">@content</span> inside mixins allows dynamic blocks of CSS.

<hr class="dividerSection" />

## Sass Functions

<hr class="dividerSection" />

Functions in Sass allow you to process values and return a result.

```css
@function calculate-padding($size)
  @return $size * 2

.box
  padding: calculate-padding(10px)
```

Use functions for calculations, color manipulation, or custom logic.

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Mixins allow reusable styles with dynamic values.</li>
    <li>Use <span class="codeSnip">@extend</span> for shared styles and <span class="codeSnip">@mixin</span> for dynamic styles.</li>
    <li>Functions process values and return results for calculations.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/sass/fundamentals/variables-nesting">← Back</a>
    <div class="xrefTitle">Sass → Fundamentals → Variables & Nesting</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/sass/syntax/scss-vs-sass">Next →</a>
    <div class="xrefTitle">Section: Sass → Syntax → SCSS vs Sass Syntax</div>
  </div>
</div>