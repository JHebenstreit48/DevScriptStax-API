# Tooltips (Bootstrap)

Tooltips provide extra context when hovering or focusing on an element.

---

## ✅ Basic Usage

```html
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" title="This is a tooltip">
  Hover over me
</button>

<script>
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))
</script>
```

Tooltips must be initialized via JavaScript. They require Bootstrap’s JS bundle (which includes Popper.js).

---

## ⚙️ Options

- Control placement using <span class="codeSnip">data-bs-placement="top"</span> (or <span class="codeSnip">bottom</span>, <span class="codeSnip">left</span>, <span class="codeSnip">right</span>).
- Trigger manually or automatically.
- Add delay, HTML content, or animations via JS options.

---

## ✅ Summary

- Tooltips are powered by Popper and must be explicitly initialized.
- Add <span class="codeSnip">title</span> and <span class="codeSnip">data-bs-toggle</span> to your elements.
- Use for accessible UI hints, buttons, links, and interactive elements.
