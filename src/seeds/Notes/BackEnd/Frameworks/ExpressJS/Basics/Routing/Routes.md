# Routes

---
### Overview
---

Routes define how the server responds to different requests.

A route is made up of:
- An HTTP method (GET, POST, etc.)
- A URL path
- A function that runs when the route is matched

Express matches routes using method + path.
GET and POST routes are separate, even if the path is the same.

---
### GET Requests
---

A GET request is when you:
- Type a URL into the browser
- Click a navigation link

By doing this, you are telling the server that you want information from that link or URL.

Example idea:
- Clicking an "About" navigation link requests the About URL using GET.

---
### Basic Route Structure (Placeholders)
---

```js
ourApp.get(a, b);
```

- <span class="codeSnip">a</span> is the URL path you want to look out for (example: "/")
- <span class="codeSnip">b</span> is a function that Express runs anytime someone sends a request to that URL

When Express calls that function it will pass it two arguments:
- req (request)
- res (response)

---
### Sending a Response (res.send)
---

Inside the body of the route function, the server can respond using <span class="emphasis">res.send()</span>.

The response can be plain text, HTML, or other data.

You can send HTML using a template literal (backticks).

---
### Example: GET Route Returning a Form
---

```js
ourApp.get("/", function (req, res) {
  res.send(`
    <form action="/answer" method="POST">
      <p>What color is the sky on a clear and sunny day?</p>
      <input name="skyColor" autocomplete="off">
      <button>Submit Answer</button>
    </form>
  `);
});
```

- "/" represents the home page
- res.send() sends HTML back to the browser

---
### What action Means
---

Whatever you set as the action for an HTML form will be the URL that the browser will send the form results to.

In this example:
- action="/answer"

So the browser sends the form data to /answer.

---
### What method="POST" Means
---

method="POST" controls the type of request that the browser is going to send to the server.

GET is typically used to request information.  
POST is typically used to send data to the server (like form input).

Important clarification:
- Both GET and POST receive a response back from the server
- A POST request can return HTML, JSON, or other data
- The difference is purpose, not capability

---
### Why "Cannot POST /answer" Happens
---

This error appears when:
- A POST route has not been created
- Express cannot find a matching method + path

---
### Creating a POST Route
---

```js
ourApp.post("/answer", function (req, res) {
  res.send("Thank you for submitting the form.");
});
```

---
### Responding Based on Submitted Data
---

```js
ourApp.post("/answer", function (req, res) {
  if (req.body.skyColor == "blue") {
    res.send(`
      <p>Congrats, that is the correct answer!</p>
      <a href="/">Back to homepage</a>
    `);
  } else {
    res.send(`
      <p>Sorry, that is incorrect.</p>
      <a href="/">Back to homepage</a>
    `);
  }
});
```

---
### Making Input Case-Insensitive
---

```js
if (req.body.skyColor.toLowerCase() == "blue")
```

This allows:
- blue
- BLUE
- BluE

to all be treated as the same correct answer.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/project-structure">← Back</a>
    <div class="xrefTitle">ExpressJs Fundamentals → Project Structure</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/routing/params-query">Next →</a>
    <div class="xrefTitle">ExpressJs Routing → Params & Query</div>
  </div>
</div>
v