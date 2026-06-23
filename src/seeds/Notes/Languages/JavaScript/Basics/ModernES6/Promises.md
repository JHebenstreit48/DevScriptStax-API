# Promises and Async/Await in JavaScript

<hr class="dividerSection" />

## What Is a Promise?

<hr class="dividerSection" />

A <span class="emphasis">Promise</span> is an object in JavaScript that represents the eventual result of an asynchronous operation.

It allows you to write asynchronous code in a cleaner, more manageable way than using nested callbacks.

<hr class="dividerSection" />

## Promise States

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">State</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Pending</span></td>
      <td class="tableCell">Initial state — operation not completed yet</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Fulfilled</span></td>
      <td class="tableCell">Operation completed successfully and returned a value</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Rejected</span></td>
      <td class="tableCell">Operation failed and returned a reason (error)</td>
    </tr>
  </tbody>
</table>

Once a Promise is settled (fulfilled or rejected), it cannot change state again.

<hr class="dividerSection" />

## Creating a Promise

<hr class="dividerSection" />

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("The operation was successful");
  } else {
    reject("Something went wrong");
  }
});
```

<hr class="dividerSection" />

## Using .then() and .catch()

<hr class="dividerSection" />

<span class="codeSnip">.then()</span> is used to handle a fulfilled result.

<span class="codeSnip">.catch()</span> is used to handle a rejected result or thrown error.

```js
myPromise
  .then(result => {
    console.log("Resolved with:", result);
  })
  .catch(error => {
    console.error("Rejected with:", error);
  });
```

<hr class="dividerSection" />

## Chaining Promises

<hr class="dividerSection" />

Each <span class="codeSnip">.then()</span> returns a new Promise, allowing multiple steps to be chained cleanly.

```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Data received:", data);
    return processData(data);
  })
  .then(processed => {
    console.log("Processed data:", processed);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
```

<hr class="dividerSection" />

## Visual Breakdown of a Promise Chain

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">fetch()</span></li>
    <li><span class="codeSnip">.then(response => ...)</span></li>
    <li><span class="codeSnip">.then(data => ...)</span></li>
    <li><span class="codeSnip">.then(processed => ...)</span></li>
    <li><span class="codeSnip">.catch(error => ...)</span></li>
  </ul>
</div>

<hr class="dividerSection" />

## Manually Throwing an Error in .then()

<hr class="dividerSection" />

You can throw an error inside a <span class="codeSnip">.then()</span> block to trigger the nearest <span class="codeSnip">.catch()</span>.

```js
.then(data => {
  if (!data) {
    throw new Error("No data returned");
  }
  return data;
})
```

<hr class="dividerSection" />

## Async/Await

<hr class="dividerSection" />

The <span class="emphasis">async/await</span> syntax simplifies handling of asynchronous operations and builds on top of Promises.

It improves code readability and is generally preferred over chaining <span class="codeSnip">.then()</span> and <span class="codeSnip">.catch()</span> for complex flows.

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">async</span> marks a function as asynchronous.</li>
    <li><span class="codeSnip">await</span> pauses execution inside the function until the Promise resolves.</li>
    <li>Errors are caught using a standard <span class="codeSnip">try/catch</span> block instead of <span class="codeSnip">.catch()</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Promises handle asynchronous results using <span class="codeSnip">.then()</span> and <span class="codeSnip">.catch()</span>.</li>
    <li>Each <span class="codeSnip">.then()</span> returns a new Promise and can pass values down the chain.</li>
    <li>Errors can be caught using <span class="codeSnip">.catch()</span>, even if thrown in earlier steps.</li>
    <li><span class="emphasis">async/await</span> is a cleaner alternative to Promise chaining for complex asynchronous flows.</li>
    <li>This model improves readability over deeply nested callbacks.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/es6/features-introduction">← Back</a>
    <div class="xrefTitle">JavaScript → Modern ES6 → ES6 Features Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/errors/try-catch">Next →</a>
    <div class="xrefTitle">Section: JavaScript → Error Handling → Try/Catch and Error Types</div>
  </div>
</div>