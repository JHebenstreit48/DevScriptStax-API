# Bootstrap Accordions

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Bootstrap accordions are collapsible UI panels powered by the Collapse plugin.  

They let users toggle visibility of content sections.

<hr class="dividerSection" />

## Basic Accordion Example

<hr class="dividerSection" />

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        This is the first item's accordion body.
      </div>
    </div>
  </div>
</div>
```

Use <span class="codeSnip">data-bs-parent</span> to ensure only one item stays open at a time.  
To allow multiple items to be open, omit <span class="codeSnip">data-bs-parent</span>.

<hr class="dividerSection" />

## Variants

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Add <span class="codeSnip">.accordion-flush</span> for a borderless version.</li>
    <li>Supports dynamic toggling, collapsing, and accessibility features out of the box.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use <span class="codeSnip">.accordion</span>, <span class="codeSnip">.accordion-item</span>, and <span class="codeSnip">.accordion-button</span> for structure.</li>
    <li>Toggle panels using <span class="codeSnip">data-bs-toggle</span> and <span class="codeSnip">data-bs-target</span>.</li>
    <li>Highly useful for collapsible content like FAQs or sidebars.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/overlays/tooltips">← Back</a>
    <div class="xrefTitle">Bootstrap → Overlays → Tooltips</div>
  </div>
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/bootstrap/basics/data-display/cards">Next →</a>
    <div class="xrefTitle">Section: Bootstrap → Data Display → Cards</div>
  </div>
</div>