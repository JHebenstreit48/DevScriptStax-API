# Variables & Nesting in Sass

<hr class="dividerSection" />

## Sass Variables

<hr class="dividerSection" />

Sass allows the use of variables to store reusable values, making styles easier to maintain and update.

<hr class="dividerSubsection1" />

### Variable Syntax

<hr class="dividerSubsection1" />

```css
$variableName: value;
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Must start with <span class="codeSnip">$</span> — for example: <span class="codeSnip">$primaryColor</span>.</li>
    <li>Must include a <span class="codeSnip">:</span> (colon) after the variable name.</li>
    <li>Variables can use camelCase, kebab-case, or snake_case.</li>
    <li>In indented Sass syntax, no curly braces or semicolons are required — only whitespace matters.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Variable Examples

<hr class="dividerSubsection1" />

```css
$primaryColor: blue;
$fontSize: 16px;
$borderRadius: 5px;

.button {
  background-color: $primaryColor;
  font-size: $fontSize;
  border-radius: $borderRadius;
}
```

Variables make styles reusable and easier to maintain across a project.

<hr class="dividerSection" />

## Nesting

<hr class="dividerSection" />

Sass allows nesting selectors inside other selectors to keep styles more organized and reflect HTML structure.

```css
.nav {
  background: black;

  .nav-item {
    color: white;
  }
}
```

Nesting helps structure styles but should not go too deep — excessive nesting makes stylesheets harder to maintain.

<hr class="dividerSection" />

## Whitespace & Indentation

<hr class="dividerSection" />

In the indented <span class="codeSnip">.sass</span> syntax, Sass relies on indentation instead of curly braces and semicolons. Correct indentation is required.

Incorrect — missing indentation:

```css
.button
background-color: blue
color: white
```

Correct — proper indentation:

```css
.button
  background-color: blue
  color: white
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Sass variables store reusable values using <span class="codeSnip">$</span> and <span class="codeSnip">:</span>.</li>
    <li>Nesting allows selectors to be structured inside parent elements for better readability.</li>
    <li>In indented Sass syntax, strict indentation is required since curly braces and semicolons are not used.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/sass/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Sass → Fundamentals → Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/css/tools/preprocessors/sass/fundamentals/mixins-functions">Next →</a>
    <div class="xrefTitle">Sass → Fundamentals → Mixins & Functions</div>
  </div>
</div>