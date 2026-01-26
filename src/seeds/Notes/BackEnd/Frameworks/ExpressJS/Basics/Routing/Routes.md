## Routes (GET and POST)

---

### Overview

Routes define how the server responds to different requests.

A route is made up of:
- An HTTP method (GET, POST, etc.)
- A URL path
- A function that runs when the route is matched

Express matches routes using method + path.
GET and POST routes are separate, even if the path is the same.

---

### GET Requests

A GET request is when you:
- Type a URL into the browser
- Click a navigation link

By doing this, you are telling the server that you want information from that link or URL.

Example idea:
- Clicking an "About" navigation link requests the About URL using GET.

---

### Basic Route Structure (Placeholders)

```javascript
ourApp.get(a, b);
```

- <span class="codeSnip">a</span> is the URL path you want to look out for (example: "/")
-<span class="codeSnip">b</span> is a function that Express is going to run anytime someone sends a request to that URL

When Express calls that function it will pass it two arguments:
- req (request)
- res (response)

---

### Sending a Response (res.send)

Inside the body of the route function, the server can respond using res.send().

The response can be plain text, HTML, or other data.

You can send HTML using a template literal (backticks).

---

### Example: GET Route Returning a Form

```javascript
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

Whatever you set as the action for an HTML form will be the URL that the browser will send the form results to.

In this example:
- action="/answer"

So the browser sends the form data to /answer.

---

### What method="POST" Means

method="POST" controls the type of request that the browser is going to send to the server.

This is known as an HTTP request. There are many types of requests that can be used in the creation of a server.

GET is typically used to request information.
POST is typically used to send data to the server (like form input).

Important clarification:
- Both GET and POST receive a response back from the server.
- A POST request can return a success message, an error message, HTML, JSON, or other data.
- The main difference is purpose: GET asks for data, POST sends data.

---

### Why "Cannot POST /answer" Happens

You may get an error message like:
- Cannot POST /answer

This happens because the response has not been fully set up yet.
Express has no POST route matching the method + path (POST + /answer).

---

### Creating a POST Route

You would create a POST request in a similar way to how you create a GET request.

```javascript
ourApp.post("/answer", function (req, res) {
  res.send("Thank you for submitting the form.");
});
```

Now the server knows how to respond to POST requests at /answer.

---

### Responding Based on Submitted Data (if / else)

Instead of always sending the same response, you can create an if-else statement to respond differently depending on whether the submitted answer is true or false.

This requires access to the submitted form data, which comes from req.body (covered in the JSON & urlencoded notes).

```javascript
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

This means that if blue was the answer submitted, it would print out the success message.
Otherwise, it prints the incorrect message.

---

### Making Input Case-Insensitive

To make the comparison not matter if the user typed lowercase, uppercase, or toggle case, normalize the input before comparing.

Example using toLowerCase():

```javascript
if (req.body.skyColor.toLowerCase() == "blue")
```

This allows:
- blue
- BLUE
- BluE

to all be treated as the same correct answer.

---
