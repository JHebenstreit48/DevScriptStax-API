# Introduction

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
### What Express Means (Course Context)
---

Express is often described as a **fast, unopinionated, minimalist** web framework.

This means:
- Express is a collection of prewritten JavaScript code
- It is designed specifically for building web servers
- It does not force rigid rules on developers

You decide how your server is structured instead of being locked into a strict framework pattern.

---
### Helpful Analogy
---

Node without Express is like using Lego blocks where you choose everything manually.

Using Express with Node gives you specialized Lego blocks designed specifically for building web servers more efficiently.

You still have full control — Express just removes a lot of repetitive setup work.

---
### What Is an Express App?
---

An Express app is an object created by calling the Express function.

The app represents your server and is responsible for:
- Listening for requests
- Deciding which code runs for each request
- Sending responses back to the browser

You use the app object to define routes and middleware.

---
### HTTP Requests (High-Level)
---

When a browser communicates with a server, it sends an HTTP request.

Examples:
- Typing a URL into the browser
- Clicking a navigation link
- Submitting a form

Express allows you to decide how your server responds to each request by creating routes.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/django/advanced/deployment/scaling">← Back</a>
    <div class="xrefTitle">Previous Topic → Django Deployment → Scaling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/install-setup">Next →</a>
    <div class="xrefTitle">ExpressJs Fundamentals → Install & Setup</div>
  </div>
</div>