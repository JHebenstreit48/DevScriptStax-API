# Axios Interceptors

<hr class="dividerSection" />

## What Are Interceptors?

<hr class="dividerSection" />

Interceptors allow you to intercept and modify HTTP requests or responses globally — before they reach <span class="codeSnip">.then()</span> or <span class="codeSnip">.catch()</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Useful for tasks like adding headers, logging, or handling errors globally.</li>
    <li>Can be applied to both <span class="emphasis">requests</span> and <span class="emphasis">responses</span>.</li>
    <li>Similar to middleware in Express.js.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Request Interceptors

<hr class="dividerSection" />

Run before a request is sent — useful for adding authentication headers or modifying config.

```js
axios.interceptors.request.use(
  function (config) {
    // modify request before sending
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
```

<hr class="dividerSection" />

## Response Interceptors

<hr class="dividerSection" />

Run after a response is received — useful for handling errors globally or transforming response data.

```js
axios.interceptors.response.use(
  function (response) {
    // handle successful response
    return response
  },
  function (error) {
    // handle error response
    return Promise.reject(error)
  }
)
```

<hr class="dividerSection" />

## Removing Interceptors

<hr class="dividerSection" />

Interceptors can be removed when no longer needed.

```js
const interceptor = axios.interceptors.request.use(function (config) {
  return config
})

axios.interceptors.request.eject(interceptor)
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Store the interceptor reference when adding it.</li>
    <li>Use <span class="codeSnip">.eject()</span> to remove it later.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/error-handling">← Back</a>
    <div class="xrefTitle">Axios - Error Handling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/apis/basics/http-clients/axios/configuration">Next →</a>
    <div class="xrefTitle">Axios - Configuration</div>
  </div>
</div>