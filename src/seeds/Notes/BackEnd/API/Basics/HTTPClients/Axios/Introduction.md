# What Is Axios?

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

<span class="emphasis">Axios</span> is a promise-based HTTP client for JavaScript that works in both the browser and Node.js. It simplifies making HTTP requests to servers and APIs.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Available as an <span class="emphasis">npm package</span> and on GitHub.</li>
    <li>Works in both the <span class="emphasis">browser</span> and <span class="emphasis">Node.js</span> environments.</li>
    <li>Returns <span class="emphasis">promises</span>, making it easy to chain and handle asynchronous operations.</li>
    <li>Automatically parses <span class="emphasis">JSON</span> responses.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Installing Axios

<hr class="dividerSection" />

Install via npm:

```shell
npm install axios
```

Or include via CDN in your HTML:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

<hr class="dividerSection" />

## Axios vs Fetch

<hr class="dividerSection" />

Both Axios and the native Fetch API are used for making HTTP requests in JavaScript, but they differ in several ways.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">Axios</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">JSON parsing</td>
      <td class="tableCell">Automatic</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Error handling</td>
      <td class="tableCell">Automatically rejects on HTTP errors</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Interceptors</td>
      <td class="tableCell">Built-in support</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Browser support</td>
      <td class="tableCell">All modern browsers</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">Fetch</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">JSON parsing</td>
      <td class="tableCell">Manual — requires calling .json()</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Error handling</td>
      <td class="tableCell">Manual — must check ok property</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Interceptors</td>
      <td class="tableCell">No built-in support</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Browser support</td>
      <td class="tableCell">Built into modern browsers</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/foundations/promises-response-handling">← Back</a>
    <div class="xrefTitle">Section: APIs - Basics - HTTP Clients - Foundations - Promises & Response Handling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/http-methods">Next →</a>
    <div class="xrefTitle">Axios - HTTP Methods</div>
  </div>
</div>