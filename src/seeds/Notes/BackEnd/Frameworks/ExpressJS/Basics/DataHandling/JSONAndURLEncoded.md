## JSON & urlencoded

---
### Overview
---

When a form is submitted, the data is sent to the server in the request body.

Express does not automatically read form data unless it is configured to do so.

---
### Enabling urlencoded Parsing (required for HTML forms)
---

Below the line:

```javascript
let ourApp = express();
```

You add:

```javascript
ourApp.use(express.urlencoded({ extended: false }));
```

This line enables the necessary feature in Express so that input is easily accessible from the request.body object.

It allows:
- Form submissions to be parsed
- Submitted values to appear on req.body

---
### Accessing Form Data
---

Once urlencoded parsing is enabled, form input values can be accessed using:

```javascript
req.body.skyColor
```

The property name matches the name attribute of the input field.

Example:

- <span class="codeSnip">&lt;input name="skyColor"&gt;</span>

---
### Why This Is Required
---

Without express.urlencoded():
- req.body will be undefined
- Form data cannot be read
- Conditional logic using req.body will not work

---
