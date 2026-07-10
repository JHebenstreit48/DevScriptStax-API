# Express.js Middleware

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Middleware</th>
      <th class="tableCellHeader">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Middleware</span></td>
      <td class="tableCell">A function that runs during the lifecycle of a request before it reaches the route handler — can read, modify, or end the request/response cycle</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">express.json()</span></td>
      <td class="tableCell">Built-in middleware that parses incoming JSON data in the request body and makes it available on <span class="codeSnip">req.body</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">express.urlencoded()</span></td>
      <td class="tableCell">Built-in middleware that parses URL-encoded form data from POST requests and makes it available on <span class="codeSnip">req.body</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">express.raw()</span></td>
      <td class="tableCell">Built-in middleware that reads raw incoming request data and stores it in a buffer object</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">express.static()</span></td>
      <td class="tableCell">Built-in middleware that serves static files like CSS, images, and client-side JavaScript from a specified folder</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">sanitize-html</span></td>
      <td class="tableCell">Third party npm package that strips dangerous HTML tags and attributes from user input to prevent XSS attacks</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/frameworks/express/basics/middleware/core">ExpressJS → Middleware → Core Middleware</a><br />
  <a href="/frameworks/express/basics/views-static/static-files">ExpressJS → Views & Static → Static Files</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/backend/frameworks/express/core-concepts">← Back</a>
    <div class="xrefTitle">Glossary → Backend → Frameworks → Express.js → Core Concepts</div>
  </div>
</div>