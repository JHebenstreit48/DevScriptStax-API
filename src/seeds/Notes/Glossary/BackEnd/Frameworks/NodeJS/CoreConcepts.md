# Node.js Core Concepts

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
      <td class="tableCell"><span class="emphasis">Node.js</span></td>
      <td class="tableCell">A JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run outside the browser for building server-side applications, APIs, and command-line tools</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Runtime</span></td>
      <td class="tableCell">The environment in which code is executed — Node.js provides a runtime for JavaScript outside of a web browser</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Event Loop</span></td>
      <td class="tableCell">The mechanism that allows Node.js to handle many concurrent operations on a single thread by registering callbacks and running them when operations complete</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Non-blocking I/O</span></td>
      <td class="tableCell">An approach where input/output operations do not stop execution — Node.js continues running other code while waiting for slow tasks like file reads or network requests</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">async/await</span></td>
      <td class="tableCell">Syntax for writing asynchronous code in a readable, sequential style — <span class="codeSnip">async</span> marks a function as asynchronous and <span class="codeSnip">await</span> pauses execution until a Promise resolves</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">CommonJS</span></td>
      <td class="tableCell">The original module system in Node.js using <span class="codeSnip">require()</span> to import and <span class="codeSnip">module.exports</span> to export</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">ESM</span></td>
      <td class="tableCell">ES Modules — the modern JavaScript module system using <span class="codeSnip">import</span> and <span class="codeSnip">export</span> syntax</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">npm</span></td>
      <td class="tableCell">Node Package Manager — the tool used to install, manage, and run JavaScript packages from the npm registry</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">npx</span></td>
      <td class="tableCell">Node Package Execute — runs packages without installing them globally, useful for one-off commands</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">nodemon</span></td>
      <td class="tableCell">A development tool that automatically restarts a Node.js application when file changes are detected</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">package.json</span></td>
      <td class="tableCell">A file that lists a project's dependencies, scripts, and metadata — the recipe for what a Node.js project needs to run</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">node_modules</span></td>
      <td class="tableCell">The folder where npm downloads and stores all installed packages for a project</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/frameworks/nodejs/basics/fundamentals/introduction">Node.js → Fundamentals → Introduction</a><br />
  <a href="/frameworks/nodejs/basics/fundamentals/event-loop-async-io">Node.js → Fundamentals → Event Loop & Async I/O</a><br />
  <a href="/frameworks/nodejs/basics/modules-packages/commonjs-vs-esm">Node.js → Modules & Packages → CommonJS vs ESM</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/backend/frameworks/nodejs/common-packages">Next →</a>
    <div class="xrefTitle">Glossary → Backend → Frameworks → Node.js → Common Packages</div>
  </div>
</div>