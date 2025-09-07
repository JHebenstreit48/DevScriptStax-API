# Dropdowns (Bootstrap)

Dropdowns are toggleable lists that let users choose from multiple actions or links.

---

## ✅ Basic Dropdown Example

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

---

## ⚙️ Extras

- Align menus right using <span class="codeSnip">.dropdown-menu-end</span>.
- Add <span class="codeSnip">.dropdown-divider</span> or <span class="codeSnip">.dropdown-header</span> for styling.
- Use <span class="codeSnip">.dropup</span>, <span class="codeSnip">.dropstart</span>, or <span class="codeSnip">.dropend</span> to change menu direction.

---

## ✅ Summary

- Use <span class="codeSnip">.dropdown</span>, <span class="codeSnip">.dropdown-menu</span>, and <span class="codeSnip">.dropdown-item</span>.
- Controlled via the <span class="codeSnip">data-bs-toggle</span> attribute.
- Great for menus, actions, or embedded navigation.
