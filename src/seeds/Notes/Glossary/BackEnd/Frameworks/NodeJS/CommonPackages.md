# Common Node.js Packages

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Package</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">express</span></td>
      <td class="tableCell">Minimal web framework for Node.js used to create servers, define routes, and handle HTTP requests</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">axios</span></td>
      <td class="tableCell">Promise-based HTTP client for making requests from both Node.js and the browser</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">mongoose</span></td>
      <td class="tableCell">MongoDB object modeling tool for Node.js — provides schemas, models, and query helpers</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">sanitize-html</span></td>
      <td class="tableCell">Cleans user-submitted HTML by stripping dangerous tags and attributes to prevent XSS attacks — uses an allowlist of permitted elements</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">nodemon</span></td>
      <td class="tableCell">Automatically restarts a Node.js app when file changes are detected — used during development only</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">dotenv</span></td>
      <td class="tableCell">Loads environment variables from a <span class="codeSnip">.env</span> file into <span class="codeSnip">process.env</span> — used to keep secrets out of source code</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">inquirer</span></td>
      <td class="tableCell">Provides interactive command-line prompts for collecting user input in terminal-based Node.js scripts</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">cors</span></td>
      <td class="tableCell">Middleware that enables Cross-Origin Resource Sharing — allows or restricts requests from different domains</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">jsonwebtoken</span></td>
      <td class="tableCell">Creates and verifies JSON Web Tokens (JWTs) for authentication and authorization</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bcrypt</span></td>
      <td class="tableCell">Hashes and compares passwords securely — used to store passwords safely in a database</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/frameworks/nodejs/basics/tooling/npm-npx">Node.js → Tooling → npm & npx</a><br />
  <a href="/frameworks/express/basics/middleware/core">ExpressJS → Middleware → Core Middleware</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/backend/frameworks/nodejs/core-concepts">← Back</a>
    <div class="xrefTitle">Glossary → Backend → Frameworks → Node.js → Core Concepts</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/backend/frameworks/express/core-concepts">Next →</a>
    <div class="xrefTitle">Section: Glossary → Backend → Frameworks → Express.js → Core Concepts</div>
  </div>
</div>