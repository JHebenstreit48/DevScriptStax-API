# JSON & urlencoded

---
### Overview
---

When a form is submitted, the data is sent to the server in the request body.

Express does not automatically read form data unless it is configured to do so.

---
### Enabling urlencoded Parsing (required for HTML forms)
---

Below the line:

```js
let ourApp = express();
```

You add:

```js
ourApp.use(express.urlencoded({ extended: false }));
```

This line enables the necessary feature so that input is accessible from the <span class="emphasis">req.body</span> object.

---
### Accessing Form Data
---

```js
req.body.skyColor
```

The property name matches the <span class="emphasis">name</span> attribute of the input field.

---
### Why This Is Required
---

Without <span class="emphasis">express.urlencoded()</span>:
- req.body will be undefined
- form data cannot be read
- conditional logic will fail

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/middleware/custom">← Back</a>
    <div class="xrefTitle">ExpressJs Middleware → Custom Middleware</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/data/file-uploads">Next →</a>
    <div class="xrefTitle">ExpressJs Data Handling → File Uploads</div>
  </div>
</div>