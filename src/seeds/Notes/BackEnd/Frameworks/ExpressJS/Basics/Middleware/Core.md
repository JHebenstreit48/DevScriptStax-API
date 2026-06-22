# Middleware in Express

<hr class="dividerSection" />

## What Is Middleware?

<hr class="dividerSection" />

Middleware in Express are functions that run during the lifecycle of a request before it reaches the route handler.

<span class="emphasis">Core middleware</span> refers to built-in Express middleware that handles common tasks like parsing incoming request data.

<hr class="dividerSection" />

## Parsing Incoming JSON

<hr class="dividerSection" />

The following Express middleware parses incoming <span class="emphasis">JSON</span> data within the request body, making it readable by the server.

```js
app.use(express.json());
```
Without this middleware, <span class="codeSnip">req.body</span> would be <span class="codeSnip">undefined</span> when the client sends JSON data.

<hr class="dividerSection" />

## Reading Raw Data

<hr class="dividerSection" />

The following Express middleware reads the raw incoming request data and stores it in a <span class="emphasis">buffer object</span>.

```js
app.use(express.raw());
```

This is useful when working with binary data or when you need access to the unprocessed request body.

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">express.json()</span> — parses incoming JSON data and makes it available on <span class="codeSnip">req.body</span>.</li>
    <li><span class="codeSnip">express.raw()</span> — reads raw incoming request data and stores it in a buffer object.</li>
    <li>Both are registered using <span class="codeSnip">app.use()</span> so they apply to all incoming requests.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/routing/error-handling">← Back</a>
    <div class="xrefTitle">Section: ExpressJS → Routing → Error Handling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/middleware/custom">Next →</a>
    <div class="xrefTitle">ExpressJS → Middleware → Custom Middleware</div>
  </div>
</div>