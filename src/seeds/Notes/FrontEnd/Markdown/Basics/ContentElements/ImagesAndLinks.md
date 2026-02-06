# Images & Links

---
### Overview
---

Markdown allows you to embed both **clickable links** and **inline images** using very similar syntax.

The key difference is a single character:
- Links use square brackets and parentheses
- Images add an exclamation mark <span class="emphasis">!</span> at the start

Understanding this difference prevents a very common beginner mistake.

---
### Embedding Images
---

To embed an image so it displays directly in the rendered document, add an exclamation mark before the brackets.

```md
![Alt text](path/to/image.jpg)
```

- <span class="emphasis">Alt text</span> describes the image for accessibility or if the image fails to load
- The path can be a relative file path or an absolute URL

Example:

```md
![Placeholder](https://placehold.co/200x100/png)
```

This renders the image directly in the document instead of showing a link.

---
### Embedding Links
---

To create a clickable hyperlink, omit the exclamation mark.

```md
[Link Text](https://example.com)
```

- <span class="emphasis">Link Text</span> is the clickable text
- The URL is the destination the link points to

Example:

```md
[Google](https://www.google.com/)
```

This renders a clickable link that navigates to the target URL.

---
### Image vs Link (Key Difference)
---

These two snippets look almost identical but behave very differently:

Image (renders inline):

```md
![Placeholder](https://placehold.co/200x100/png)
```

Link (clickable text only):

```md
[Placeholder](https://placehold.co/200x100/png)
```

If you forget the exclamation mark, Markdown will treat the image as a normal hyperlink.

---
### Best Practices
---

🔹 Always include descriptive alt text for images  
🔹 Use relative paths for local images when possible  
🔹 Use links for navigation, images for visual content  
🔹 Be intentional — an image that looks like a link can confuse readers  
🔹 Preview rendering to ensure paths resolve correctly  

---
### Summary
---

- Images and links share nearly identical syntax
- The exclamation mark <span class="emphasis">!</span> determines whether content renders as an image
- Alt text improves accessibility and fallback behavior
- Clear usage prevents broken visuals and unintended links

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/markdown/basics/content-elements/tables">← Back</a>
    <div class="xrefTitle">Tables</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/markdown/intermediate/extended-syntax/extensions">Next →</a>
    <div class="xrefTitle">Next Section: Markdown Intermediate - Extended Syntax</div>
  </div>
</div>