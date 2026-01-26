## Error Handling (Routing Basics)

---

### Overview

Routing errors often happen when a request does not match any defined route.

This can occur due to:
- Incorrect URL paths
- Incorrect HTTP methods

---

### Method + Path Must Match

Express matches requests using:
- The HTTP method (GET, POST, etc.)
- The URL path

GET and POST routes are separate, even if the URL path is the same.

---

### Example Error

If a form submits a POST request to /answer, but the server has no POST route for /answer, Express responds with:

Cannot POST /answer

This indicates:
- The server is running
- No matching POST route exists for that method + path

---

### Key Takeaway

Errors like "Cannot POST /answer" are not crashes.
They are routing mismatches and are expected during development.

---
