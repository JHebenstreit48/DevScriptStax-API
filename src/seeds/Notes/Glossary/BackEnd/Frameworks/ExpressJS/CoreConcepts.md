# Express.js Core Concepts

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Term</th>
      <th class="tableCellHeader">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Express.js</span></td>
      <td class="tableCell">A minimal, unopinionated web framework for Node.js that simplifies creating servers, handling HTTP requests, and defining routes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Route</span></td>
      <td class="tableCell">A definition of how the server responds to a specific HTTP method and URL path combination</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">app.get()</span></td>
      <td class="tableCell">Defines a route that responds to GET requests — typically used when a user visits a URL or clicks a link</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">app.post()</span></td>
      <td class="tableCell">Defines a route that responds to POST requests — typically used when a user submits a form or sends data</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">req</span></td>
      <td class="tableCell">The request object — contains information about the incoming HTTP request including headers, body, and params</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">res</span></td>
      <td class="tableCell">The response object — used to send a response back to the client using methods like <span class="codeSnip">res.send()</span> or <span class="codeSnip">res.json()</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">next</span></td>
      <td class="tableCell">A function passed to middleware that tells Express to move on to the next middleware or route handler in the chain</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">app.use()</span></td>
      <td class="tableCell">Registers middleware globally so it runs for every incoming request before reaching any route handler</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">res.send()</span></td>
      <td class="tableCell">Sends a plain text or HTML response back to the browser</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">res.json()</span></td>
      <td class="tableCell">Sends a JSON-formatted response back to the client — commonly used in APIs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">res.status()</span></td>
      <td class="tableCell">Sets the HTTP status code for the response — for example <span class="codeSnip">401</span> for unauthorized or <span class="codeSnip">404</span> for not found</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">req.body</span></td>
      <td class="tableCell">Contains the parsed body of an incoming POST request — requires <span class="codeSnip">express.json()</span> or <span class="codeSnip">express.urlencoded()</span> middleware to be available</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">req.headers</span></td>
      <td class="tableCell">Contains the HTTP headers sent with the request — used to access things like authorization credentials</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/frameworks/express/basics/fundamentals/introduction">ExpressJS → Fundamentals → Introduction</a><br />
  <a href="/frameworks/express/basics/routing/routes">ExpressJS → Routing → Routes</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/backend/frameworks/nodejs/common-packages">← Back</a>
    <div class="xrefTitle">Section: Glossary → Backend → Frameworks → Node.js → Common Packages</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/backend/frameworks/express/middleware">Next →</a>
    <div class="xrefTitle">Glossary → Backend → Frameworks → Express.js → Middleware</div>
  </div>
</div>