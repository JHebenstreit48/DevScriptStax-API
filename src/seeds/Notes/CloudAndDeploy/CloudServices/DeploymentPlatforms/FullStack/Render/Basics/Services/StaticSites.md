# Static Sites & Web Services

<hr class="dividerSection" />

## Choosing a Service Type

<hr class="dividerSection" />

When creating a new project on Render the first decision is choosing which type of service best fits your project.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Choose <span class="emphasis">Static Site</span> if your project consists of static HTML, CSS, and JavaScript files with no server logic.</li>
    <li>Choose <span class="emphasis">Web Service</span> if your project is a dynamic application that runs continuously and responds to requests — such as a Node.js app.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Static Sites

<hr class="dividerSection" />

A <span class="emphasis">static site</span> on Render serves pre-built HTML, CSS, and JavaScript files directly to the browser without any server-side processing.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Ideal for front-end only projects built with frameworks like React, Vue, or Angular, or plain HTML and CSS.</li>
    <li>Only requires a <span class="emphasis">build command</span> — no start command needed.</li>
    <li>Always available on the free tier with no spin-down behavior.</li>
    <li>Deploys automatically from your connected Git repository on every push.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Web Services

<hr class="dividerSection" />

A <span class="emphasis">web service</span> on Render is used to deploy server-side applications that need to run continuously and respond to HTTP requests.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Supports Node.js, Python, Ruby, Go, Rust, and other backend runtimes.</li>
    <li>Runs a persistent process that listens for incoming requests.</li>
    <li>Requires both a <span class="emphasis">build command</span> and a <span class="emphasis">start command</span> — for example <span class="codeSnip">node server.js</span>.</li>
    <li>Free tier web services <span class="emphasis">spin down after periods of inactivity</span> causing slow cold starts on the first request after spin-down.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Static Site vs Web Service

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Static Site</th>
      <th class="tableCellHeader">Web Service</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Serves pre-built HTML, CSS, and JavaScript files</td>
      <td class="tableCell">Runs a persistent server process</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Only requires a build command</td>
      <td class="tableCell">Requires both a build and start command</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Used for front-end only projects with no server logic</td>
      <td class="tableCell">Used for APIs, full-stack apps, and backend services</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Always available on free tier with no spin-down</td>
      <td class="tableCell">Spins down on free tier after inactivity</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/render/basics/setup/cli">← Back</a>
    <div class="xrefTitle">Section: Render → Setup → CLI</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/render/basics/services/workers-cron-jobs">Next →</a>
    <div class="xrefTitle">Render → Services → Workers & Cron Jobs</div>
  </div>
</div>