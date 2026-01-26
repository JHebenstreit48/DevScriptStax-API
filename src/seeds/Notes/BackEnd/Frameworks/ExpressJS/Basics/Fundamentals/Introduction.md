## ExpressJS Overview

---
### Overview
---

Express is a minimal web framework for Node.js that makes it easier to create servers and handle HTTP requests.

It provides a simple way to:
- Respond to browser requests
- Define routes
- Handle user input
- Control how the server responds

Express does not replace Node.js. Instead, it runs on top of Node.js and simplifies common server tasks.

---

### What Is an Express App?

An Express app is an object created by calling the Express function.

The app represents your server and is responsible for:
- Listening for requests
- Deciding which code runs for each request
- Sending responses back to the browser

You use the app object to define routes and middleware.

---

### HTTP Requests (High-Level)

When a browser communicates with a server, it sends an HTTP request.

Examples:
- Typing a URL into the browser
- Clicking a navigation link
- Submitting a form

Express allows you to decide how your server responds to each request by creating routes.

---
