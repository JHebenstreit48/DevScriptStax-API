# Introduction to APIs

<hr class="dividerSection" />

## What Is an API?

<hr class="dividerSection" />

<span class="emphasis">API</span> stands for <span class="secondEmphasis">Application Programming Interface</span>.

An API is a set of rules and protocols that allows different software applications to communicate with each other.

<hr class="dividerSection" />

## The Fetch API

<hr class="dividerSection" />

The <span class="emphasis">Fetch API</span> is a built-in JavaScript tool that can perform all CRUD operations and is used to make requests to specific API endpoints and process the response.

It defaults to a <span class="emphasis">GET</span> request when no method is specified.

```js
fetch()
```

<hr class="dividerSubsection1" />

### Example — Fetch API GET Request

<hr class="dividerSubsection1" />

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

<hr class="dividerSubsection1" />

### Example — Fetch API POST Request

<hr class="dividerSubsection1" />

```js
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>An API allows different software applications to communicate with each other.</li>
    <li>The Fetch API is a built-in JavaScript tool for making HTTP requests.</li>
    <li>Fetch defaults to a GET request unless a method is specified.</li>
    <li>Both GET and POST requests return a response that can be handled using <span class="codeSnip">.then()</span> and <span class="codeSnip">.catch()</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/fundamentals/core-concepts">← Back</a>
    <div class="xrefTitle">APIs → Fundamentals → Core Concepts</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/fundamentals/use-cases">Next →</a>
    <div class="xrefTitle">APIs → Fundamentals → Use Cases</div>
  </div>
</div>