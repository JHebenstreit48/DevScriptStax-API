# Serving Static Files in Express

<hr class="dividerSection" />

## What Are Static Files?

<hr class="dividerSection" />

Static files are assets the server sends as-is, without any processing.  
  
Common examples include:

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

Express can serve static files using its built-in <span class="codeSnip">express.static()</span> middleware.  

This creates a new middleware function that serves files from a given root directory.

```js
app.use(express.static("public"))
```

This tells Express to look inside the <span class="emphasis">public</span> folder when a request is made for a static file.  

<hr class="dividerSection" />

## Adding a Stylesheet to the Public Folder

<hr class="dividerSection" />

Once <span class="codeSnip">express.static()</span> is set up, a <span class="codeSnip">.css</span> file placed inside the <span class="emphasis">public</span> folder becomes reachable directly by the browser.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The file can be named anything, one common example is <span class="codeSnip">main.css</span>.</li>
    <li>Once added, a request for <span class="codeSnip">/main.css</span> will serve <span class="codeSnip">public/main.css</span> directly, with no route handler needed.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Relative vs. Absolute Paths for Static Assets

<hr class="dividerSection" />

The <span class="codeSnip">href</span> value used to link a stylesheet can be written as a relative path or an absolute path, and the difference matters once Express is involved.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">href="main.css"</span> is a relative path, resolved against the current file or current route.</li>
    <li><span class="codeSnip">href="/main.css"</span> is an absolute path, always resolved from the domain root, regardless of the current route.</li>
  </ul>
</div>

A relative path can still work outside of Express entirely. Opening an HTML file directly on disk, without a server, resolves a relative stylesheet link against the file's own location, so a template can still preview correctly on its own, useful if a project is shared as a set of standalone files.

Once that same file is served through Express, it is no longer being loaded from its raw location on disk, it is served from the <span class="emphasis">public</span> folder at the domain root. A relative path only continues to resolve correctly by coincidence, typically only while viewing routes at the root level, and breaks once a page is served from a nested route. An absolute path avoids this entirely, since it always points to the same location no matter which route rendered the page.  

<hr class="dividerSection" />

## Why "public" Instead of "src"

<hr class="dividerSection" />

A plain Express app with no bundler has no build step, whatever sits in this folder is sent to the browser exactly as written, with no compiling or transforming.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">public</span> names the folder by what it does, its contents are directly reachable over HTTP the moment a request comes in.</li>
    <li>This differs from bundler-based projects, such as React or Angular apps, where a <span class="codeSnip">src</span> folder holds files a build tool still needs to process, bundle, or compile before they reach the browser.</li>
    <li>Since there is no build tool here, there is no meaningful "source vs. output" distinction to make, so the folder is named for its role instead.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/react/basics/setup-and-structure/structure" target="_blank" rel="noopener noreferrer">Front End → React → Setup & Structure → Project Structure</a>
</div>

<hr class="dividerSection" />

## Sending a File as a Response

<hr class="dividerSection" />

The <span class="codeSnip">res.sendFile()</span> method sends a file directly from the server to the client as an HTTP response.

```js
const path = require('path');

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Useful for serving static HTML pages or downloadable files on a specific route.</li>
    <li><span class="codeSnip">path.join()</span> ensures the file path is constructed correctly across different operating systems.</li>
    <li><span class="codeSnip">__dirname</span> refers to the directory of the current file.</li>
  </ul>
</div>

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
    <li>The <span class="codeSnip">public</span> naming convention reflects a lack of build tooling, not a stylistic preference.</li>
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