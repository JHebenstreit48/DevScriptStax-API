# Axios Configuration

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Axios can be configured globally or per request. Common configuration options include base URLs, headers, and timeouts.

<hr class="dividerSection" />

## Base URL

<hr class="dividerSection" />

Setting a base URL means you only need to provide the path for each request rather than the full URL every time.

```js
axios.defaults.baseURL = 'https://api.example.com'

axios.get('/users') // requests https://api.example.com/users
```

<hr class="dividerSection" />

## Default Headers

<hr class="dividerSection" />

Headers can be set globally so they are included with every request.

```js
axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN'
```

<hr class="dividerSection" />

## Creating an Instance

<hr class="dividerSection" />

Axios instances allow you to create a pre-configured version of Axios with its own settings — useful when working with multiple APIs.

```js
const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
})

instance.get('/users')
  .then(function (response) {
    console.log(response.data)
  })
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Each instance has its own config separate from the global Axios defaults.</li>
    <li>Useful for keeping API logic organized when consuming multiple services.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Timeouts

<hr class="dividerSection" />

A timeout can be set to automatically cancel a request if it takes too long.

```js
axios.defaults.timeout = 5000 // 5 seconds
```

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/interceptors">← Back</a>
    <div class="xrefTitle">Axios - Interceptors</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/advanced/gateways/fundamentals">Next →</a>
    <div class="xrefTitle">Section: APIs - Advanced - Gateways - Fundamentals</div>
  </div>
</div>