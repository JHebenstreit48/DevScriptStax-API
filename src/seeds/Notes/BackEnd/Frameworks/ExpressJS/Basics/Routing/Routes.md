# How Express Routes Work

<hr class="dividerSection" />

## What Is a Route?

<hr class="dividerSection" />

Routes define how the server responds to different requests.

A route is made up of:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>An HTTP method (GET, POST, etc.)</li>
    <li>A URL path</li>
    <li>A function that runs when the route is matched</li>
  </ul>
</div>

Express matches routes using method and path together.  
GET and POST routes are separate even if the path is the same.

<hr class="dividerSection" />

### GET Requests

<hr class="dividerSection" />

A GET request is sent when you:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Type a URL into the browser</li>
    <li>Click a navigation link</li>
  </ul>
</div>

By doing this you are telling the server that you want information from that link or URL.

Example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Clicking an "About" navigation link requests the About URL using GET.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Basic Route Structure (Placeholders)

<hr class="dividerSection" />

```js
ourApp.get(a, b);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">a</span> is the URL path you want to look out for (example: <span class="codeSnip">"/"</span>)</li>
    <li><span class="codeSnip">b</span> is a function that Express runs anytime someone sends a request to that URL</li>
    <li>When Express calls that function it will pass it two arguments — <span class="codeSnip">req</span> (request) and <span class="codeSnip">res</span> (response)</li>
  </ul>
</div>

<hr class="dividerSection" />

### Sending a Response (res.send)

<hr class="dividerSection" />

Inside the body of the route function, the server can respond using <span class="codeSnip">res.send()</span>.  
The response can be plain text, HTML, or other data. You can send HTML using a template literal (backticks).

<hr class="dividerSection" />

### Example — GET Route Returning a Form

<hr class="dividerSection" />

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

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">"/"</span> represents the home page.</li>
    <li><span class="codeSnip">res.send()</span> sends HTML back to the browser.</li>
  </ul>
</div>

<hr class="dividerSection" />

### What action Means

<hr class="dividerSection" />

Whatever you set as the <span class="codeSnip">action</span> for an HTML form will be the URL that the browser will send the form results to.

In this example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">action="/answer"</span></li>
  </ul>
</div>

So the browser sends the form data to <span class="codeSnip">/answer</span>.

<hr class="dividerSection" />

### What method="POST" Means

<hr class="dividerSection" />

<span class="codeSnip">method="POST"</span> controls the type of request that the browser is going to send to the server.

GET is typically used to request information. POST is typically used to send data to the server (like form input).

Important clarification:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Both GET and POST receive a response back from the server.</li>
    <li>A POST request can return HTML, JSON, or other data.</li>
    <li>The difference is purpose, not capability.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Why "Cannot POST /answer" Happens

<hr class="dividerSection" />

This error appears when:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A POST route has not been created.</li>
    <li>Express cannot find a matching method and path combination.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Creating a POST Route

<hr class="dividerSection" />

```js
ourApp.post("/answer", function (req, res) {
  res.send("Thank you for submitting the form.");
});
```

<hr class="dividerSection" />

### Responding Based on Submitted Data

<hr class="dividerSection" />

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

<hr class="dividerSection" />

### Making Input Case-Insensitive

<hr class="dividerSection" />

```js
if (req.body.skyColor.toLowerCase() == "blue")
```

This allows:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">blue</span></li>
    <li><span class="codeSnip">BLUE</span></li>
    <li><span class="codeSnip">BluE</span></li>
  </ul>
</div>

to all be treated as the same correct answer.

<hr class="dividerSection" />

## Server Responses — HTML vs Raw Data

<hr class="dividerSection" />

When a server responds to a request it can either send back <span class="emphasis">pre-rendered HTML</span> or <span class="secondEmphasis">raw data</span> for the browser to use.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">res.send()</span> — sends a response such as plain text or HTML directly to the browser.</li>
    <li><span class="codeSnip">res.json()</span> — sends raw data as a JavaScript object. The browser is then responsible for using that data to generate the appropriate HTML.</li>
    <li>Sending raw data and letting the browser handle rendering is the basis of <span class="emphasis">client-side rendering</span>.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/apis/basics/http-clients/axios/http-methods">Axios → HTTP Methods</a><br />
  <a href="/javascript/basics/dom/event-handling">JavaScript → DOM and Events → Event Handling</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/project-structure">← Back</a>
    <div class="xrefTitle">Section: ExpressJs Fundamentals → Project Structure</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/routing/params-query">Next →</a>
    <div class="xrefTitle">ExpressJs Routing → Params & Query</div>
  </div>
</div>