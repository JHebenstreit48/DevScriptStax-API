# Project Structure

---
### Overview
---

A basic Express project can be a single file, but most real projects grow quickly.

A clean structure helps with:
- readability
- routing organization
- middleware separation
- maintainability

---
### Minimal Starter Layout
---

A common small-project setup looks like:

```md
project/
- server.js
- package.json
- node_modules/
```

---
### Typical Scalable Layout
---

As projects grow, you’ll commonly split by responsibility:

```md
project/
- src/
  - routes/
  - middleware/
  - controllers/
  - views/
  - public/
  - utils/
- server.js (or src/index.js)
- package.json
```

---
### Common Folders
---

- <span class="emphasis">routes/</span>  
  Holds route definitions (often grouped by feature)

- <span class="emphasis">middleware/</span>  
  Reusable request/response logic (auth, logging, parsing, etc.)

- <span class="emphasis">views/</span>  
  Server-rendered templates (EJS, Handlebars, etc.)

- <span class="emphasis">public/</span>  
  Static files (CSS, images, client-side JS)

---
### Summary
---

- Small Express apps can start as one file
- Larger apps benefit from splitting routes, middleware, and views into folders
- A consistent structure makes routing and scaling much easier

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/install-setup">← Back</a>
    <div class="xrefTitle">ExpressJs Fundamentals → Install & Setup</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/routing/routes">Next →</a>
    <div class="xrefTitle">ExpressJs Routing → Routes</div>
  </div>
</div>