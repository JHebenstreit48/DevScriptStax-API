# Accordions (Bootstrap)

Bootstrap accordions are collapsible UI panels powered by the Collapse plugin. They let users toggle visibility of content sections.

---

## Basic Accordion Example

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
        This is the first item’s accordion body.
      </div>
    </div>
  </div>
</div>
```

Use <span class="codeSnip">data-bs-parent</span> to ensure only one item stays open at a time.  
To allow multiple items to be open, omit <span class="codeSnip">data-bs-parent</span>.

---

## Variants

- Add <span class="codeSnip">.accordion-flush</span> for a borderless version.
- Supports dynamic toggling, collapsing, and accessibility features out of the box.

---

## Summary

- Use <span class="codeSnip">.accordion</span>, <span class="codeSnip">.accordion-item</span>, and <span class="codeSnip">.accordion-button</span> for structure.
- Toggle panels using <span class="codeSnip">data-bs-toggle</span> and <span class="codeSnip">data-bs-target</span>.
- Highly useful for collapsible content like FAQs or sidebars.
