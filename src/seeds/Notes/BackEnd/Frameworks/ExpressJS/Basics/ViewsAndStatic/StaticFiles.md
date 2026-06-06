# Serving Static Files in Express

<hr class="dividerSection" />

## What Are Static Files?

<hr class="dividerSection" />

Static files are assets the server sends as-is, without any processing. Common examples include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>CSS stylesheets</li>
    <li>Images</li>
    <li>Client-side JavaScript</li>
    <li>Fonts</li>
  </ul>
</div>

<hr class="dividerSection" />

## Serving Static Files with Express

<hr class="dividerSection" />

Express can serve static files using its built-in <span class="codeSnip">express.static()</span> middleware. This creates a new middleware function that serves files from a given root directory.

```js
app.use(express.static("public"))
```

This tells Express to look inside the <span class="emphasis">public</span> folder when a request is made for a static file. For example, requesting <span class="codeSnip">/styles.css</span> will look for <span class="codeSnip">public/styles.css</span>.

<hr class="dividerSection" />

## Why This Is Middleware

<hr class="dividerSection" />

<span class="codeSnip">express.static()</span> runs as middleware during incoming requests.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If the request matches a real file in the specified folder, Express serves it directly.</li>
    <li>If it does not match, the request continues to the next middleware or route handler.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Static files are served without custom route handlers.</li>
    <li><span class="codeSnip">express.static()</span> exposes a folder for public assets.</li>
    <li>Requests map to file paths inside that folder.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/data/file-uploads">← Back</a>
    <div class="xrefTitle">Section: ExpressJS → Data Handling → File Uploads</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/views-static/ejs">Next →</a>
    <div class="xrefTitle">ExpressJS → Basics → Views & Static → EJS</div>
  </div>
</div>