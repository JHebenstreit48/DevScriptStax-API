# Head Elements

The <span class="codeSnip">&lt;head&gt;</span> section holds meta-information for the browser and search engines. It's not displayed on the page but is crucial for performance, accessibility, and SEO.

---

## Common Tags Inside &lt;head&gt;

Below are common elements found in the <span class="codeSnip">&lt;head&gt;</span> of an HTML document:

<span class="codeSnip">&lt;meta charset="utf-8"&gt;</span> — Declares the character encoding
<span class="codeSnip">&lt;title&gt;</span> — Sets the tab title
<span class="codeSnip">&lt;link rel="stylesheet" href="styles.css"&gt;</span> — Loads external CSS
<span class="codeSnip">&lt;script src="app.js" defer&gt;</span> — Loads JavaScript without blocking render

```html
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;title&gt;My Page Title&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
```

---

## Why These Tags Matter

- The encoding ensures proper rendering of special characters
- The title improves accessibility and SEO
- CSS and JS are loaded in ways that affect page speed and behavior

---

## Summary

---

- Use <span class="codeSnip">&lt;meta&gt;</span> tags for encoding and viewport
- Always include a <span class="codeSnip">&lt;title&gt;</span>
- Load CSS via <span class="codeSnip">&lt;link&gt;</span>
- Use <span class="codeSnip">defer</span> in <span class="codeSnip">&lt;script&gt;</span> to avoid blocking page load

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/html/intermediate/tabular-data/captions">← Back</a>
    <div class="xrefTitle">Tabular Data</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/html/intermediate/head-and-meta/meta">Next →</a>
    <div class="xrefTitle">Meta Elements</div>
  </div>
</div>