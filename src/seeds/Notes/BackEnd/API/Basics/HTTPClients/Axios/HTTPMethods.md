# Axios HTTP Methods

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Axios provides methods that correspond to standard HTTP request types. Each method sends a request to a specified URL and returns a <span class="emphasis">promise</span>.

<hr class="dividerSection" />

## axios.post()

<hr class="dividerSection" />

Sends an asynchronous POST request to a server — also referred to as an "on the fly" request since it does not require a page reload.

```js
axios.post('/create-item', { text: createField.value })
  .then(function (response) {
    // runs when server responds
  })
  .catch(function () {
    console.log("Please try again later.")
  })
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">first argument</span> is the URL the request will be sent to.</li>
    <li>The <span class="emphasis">second argument</span> is a JavaScript object sent with the request as the payload.</li>
    <li>Returns a <span class="emphasis">promise</span>.</li>
    <li><span class="codeSnip">.then()</span> runs when the server has responded successfully.</li>
    <li><span class="codeSnip">.catch()</span> runs if the request fails.</li>
  </ul>
</div>

<hr class="dividerSection" />

## axios.get()

<hr class="dividerSection" />

Sends a GET request to retrieve data from a server.

```js
axios.get('/items')
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function () {
    console.log("Please try again later.")
  })
```

<hr class="dividerSection" />

## axios.put()

<hr class="dividerSection" />

Sends a PUT request to update an existing resource.

```js
axios.put('/update-item', { id: itemId, text: newText })
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function () {
    console.log("Please try again later.")
  })
```

<hr class="dividerSection" />

## axios.delete()

<hr class="dividerSection" />

Sends a DELETE request to remove a resource.

```js
axios.delete('/delete-item', { data: { id: itemId } })
  .then(function () {
    console.log("Item deleted")
  })
  .catch(function () {
    console.log("Please try again later.")
  })
```

<hr class="dividerSection" />

## Accessing the Server Response

<hr class="dividerSection" />

When a server responds, Axios makes it easy to access the returned data via <span class="codeSnip">response.data</span>.

```js
axios.post('/create-item', { text: createField.value })
  .then(function (response) {
    console.log(response.data)
  })
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">response.data</span> accesses the JavaScript object the server sends back.</li>
    <li>This is useful for reading the newly created document's ID or other returned properties immediately after a request.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/introduction">← Back</a>
    <div class="xrefTitle">Axios - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/error-handling">Next →</a>
    <div class="xrefTitle">Axios - Error Handling</div>
  </div>
</div>