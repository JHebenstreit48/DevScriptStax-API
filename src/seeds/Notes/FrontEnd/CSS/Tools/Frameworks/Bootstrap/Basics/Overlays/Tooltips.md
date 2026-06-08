# Bootstrap Tooltips

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Tooltips provide extra context when hovering or focusing on an element.

<hr class="dividerSection" />

## Basic Usage

<hr class="dividerSection" />

```html
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" title="This is a tooltip">
  Hover over me
</button>

<script>
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))
</script>
```

Tooltips must be initialized via JavaScript. They require Bootstrap's JS bundle which includes Popper.js.

<hr class="dividerSection" />

## Options

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Control placement using <span class="codeSnip">data-bs-placement="top"</span> — also accepts <span class="codeSnip">bottom</span>, <span class="codeSnip">left</span>, and <span class="codeSnip">right</span>.</li>
    <li>Trigger manually or automatically.</li>
    <li>Add delay, HTML content, or animations via JavaScript options.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Tooltips are powered by Popper and must be explicitly initialized.</li>
    <li>Add <span class="codeSnip">title</span> and <span class="codeSnip">data-bs-toggle</span> to your elements.</li>
    <li>Use for accessible UI hints, buttons, links, and interactive elements.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/overlays/dropdowns">← Back</a>
    <div class="xrefTitle">Bootstrap → Overlays → Dropdowns</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/overlays/accordions">Next →</a>
    <div class="xrefTitle">Bootstrap → Overlays → Accordions</div>
  </div>
</div>