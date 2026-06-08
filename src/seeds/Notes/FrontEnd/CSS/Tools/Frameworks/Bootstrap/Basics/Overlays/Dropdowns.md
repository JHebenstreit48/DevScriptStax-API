# Bootstrap Dropdowns

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Dropdowns are toggleable lists that let users choose from multiple actions or links.

<hr class="dividerSection" />

## Basic Dropdown Example

<hr class="dividerSection" />

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

Use <span class="codeSnip">data-bs-toggle="dropdown"</span> to trigger the menu.

<hr class="dividerSection" />

## Extras

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Align menus right using <span class="codeSnip">.dropdown-menu-end</span>.</li>
    <li>Add <span class="codeSnip">.dropdown-divider</span> or <span class="codeSnip">.dropdown-header</span> for styling.</li>
    <li>Use <span class="codeSnip">.dropup</span>, <span class="codeSnip">.dropstart</span>, or <span class="codeSnip">.dropend</span> to change menu direction.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use <span class="codeSnip">.dropdown</span>, <span class="codeSnip">.dropdown-menu</span>, and <span class="codeSnip">.dropdown-item</span> for structure.</li>
    <li>Controlled via the <span class="codeSnip">data-bs-toggle</span> attribute.</li>
    <li>Great for menus, actions, or embedded navigation.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/overlays/modals">← Back</a>
    <div class="xrefTitle">Bootstrap → Overlays → Modals</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/overlays/tooltips">Next →</a>
    <div class="xrefTitle">Bootstrap → Overlays → Tooltips</div>
  </div>
</div>