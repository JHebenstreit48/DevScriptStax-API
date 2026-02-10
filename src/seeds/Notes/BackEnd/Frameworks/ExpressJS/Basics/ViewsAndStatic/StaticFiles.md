# Static Files

---
### Overview
---

Static files are assets the server sends “as-is”, such as:
- CSS
- images
- client-side JavaScript
- fonts

Express can serve static files using built-in middleware.

---
### Serving Static Files
---

```js
app.use(express.static("public"))
```

This tells Express to look inside the <span class="emphasis">public</span> folder when a request is made for a static file.

Example idea:
- Requesting <span class="emphasis">/styles.css</span> will look for:
  <span class="emphasis">public/styles.css</span>

---
### Why This Is Middleware
---

This creates middleware that runs during requests.

If the request matches a real file in <span class="emphasis">public</span>, Express serves it.
If it does not match, the request continues to the next middleware or route.

---
### Summary
---

- Static files are served without custom route handlers
- <span class="emphasis">express.static()</span> exposes a folder for public assets
- Requests map to file paths inside that folder

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/data/file-uploads">← Back</a>
    <div class="xrefTitle">File Uploads</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/views-static/ejs">Next →</a>
    <div class="xrefTitle">EJS</div>
  </div>
</div>
