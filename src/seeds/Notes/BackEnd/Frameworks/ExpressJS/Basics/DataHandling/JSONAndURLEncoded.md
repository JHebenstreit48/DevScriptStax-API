# Handling Form Data in Express

<hr class="dividerSection" />

When a form is submitted, the data is sent to the server in the request body. Express does not automatically read form data unless it is configured to do so.

<hr class="dividerSection" />

## Enabling urlencoded Parsing

<hr class="dividerSection" />

To make form input accessible from the <span class="codeSnip">req.body</span> object, add the following after creating your Express app instance:

```js
ourApp.use(express.urlencoded({ extended: false }));
```

Without this line:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">req.body</span> will be undefined.</li>
    <li>Form data cannot be read.</li>
    <li>Conditional logic based on form input will fail.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Accessing Form Data

<hr class="dividerSection" />

Once enabled, form field values are accessible via <span class="codeSnip">req.body</span>. The property name matches the <span class="emphasis">name</span> attribute of the input field.

```js
req.body.skyColor
```

When working with asynchronous requests, the property name on <span class="codeSnip">req.body</span> matches the property name chosen when setting up the request. For example if the request sends <span class="codeSnip">{ text: value }</span> then the server accesses it as <span class="codeSnip">req.body.text</span>.

<hr class="dividerSection" />

## Sending Responses

<hr class="dividerSection" />

Express provides several ways to send a response back to the client:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">res.redirect("/")</span> — redirects the browser to another URL, triggering a full page reload.</li>
    <li><span class="codeSnip">res.send("Success")</span> — sends a plain text or HTML string response without reloading the page.</li>
    <li><span class="codeSnip">res.json({ _id: id, text: value })</span> — sends a JSON object back to the client, useful for returning data such as a newly created document's ID after an async operation.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/middleware/custom">← Back</a>
    <div class="xrefTitle">Section: ExpressJS → Middleware → Custom Middleware</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/data/file-uploads">Next →</a>
    <div class="xrefTitle">ExpressJS → Data Handling → File Uploads</div>
  </div>
</div>