# Axios Error Handling

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Axios automatically rejects promises when an HTTP error status is received — such as a <span class="codeSnip">404</span> or <span class="codeSnip">500</span>. This means errors can be caught using <span class="codeSnip">.catch()</span> without manually checking the response.

<hr class="dividerSection" />

## Using .catch()

<hr class="dividerSection" />

The <span class="codeSnip">.catch()</span> block runs when a request fails — either due to a network error or an HTTP error status.

```js
axios.post('/create-item', { text: createField.value })
  .then(function (response) {
    // handle success
  })
  .catch(function () {
    console.log("Please try again later.")
  })
```

<hr class="dividerSection" />

## Axios vs Fetch Error Handling

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Axios automatically throws on HTTP errors like <span class="codeSnip">404</span> or <span class="codeSnip">500</span>.</li>
    <li>Fetch requires manually checking the <span class="codeSnip">ok</span> property of the response.</li>
    <li>Axios makes consistent error handling simpler across all request types.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Network Errors

<hr class="dividerSection" />

If the server cannot be reached at all, Axios will reject the promise and the <span class="codeSnip">.catch()</span> block will run.

```js
axios.post('/delete-item', { id: itemId })
  .then(function () {
    // handle success
  })
  .catch(function () {
    console.log("Please try again later.")
  })
```

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/http-methods">← Back</a>
    <div class="xrefTitle">Axios - HTTP Methods</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/interceptors">Next →</a>
    <div class="xrefTitle">Axios - Interceptors</div>
  </div>
</div>