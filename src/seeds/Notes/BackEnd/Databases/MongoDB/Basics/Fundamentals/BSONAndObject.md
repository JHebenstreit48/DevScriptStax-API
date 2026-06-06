# BSON & ObjectId

<hr class="dividerSection" />

## BSON

<hr class="dividerSection" />

MongoDB stores objects in <span class="emphasis">BSON</span> (Binary JSON), structured as key–value pairs and optimized for faster parsing.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Similar to JSON but binary and more efficient.</li>
    <li>Supports <span class="emphasis">embedded documents</span> and <span class="emphasis">arrays</span>.</li>
    <li>Optimized for <span class="emphasis">parsing performance</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## ObjectId Structure

<hr class="dividerSection" />

MongoDB documents use <span class="emphasis">ObjectId</span> as a unique 12-byte identifier. Use <span class="codeSnip">_id</span> — not <span class="codeSnip">id</span> — when referencing a MongoDB unique identifier.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Component</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">4 bytes</td>
      <td class="tableCell">Unix timestamp (seconds)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5 bytes</td>
      <td class="tableCell">Random value generated per process</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3 bytes</td>
      <td class="tableCell">Incrementing counter</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Creating ObjectIds

<hr class="dividerSection" />

Shell helper:

```shell
ObjectId()
```

In Node.js driver:

```js
new ObjectId()
```

<span class="emphasis">ObjectId</span> is specific to MongoDB and its driver package. When using it in Node.js you must import it explicitly:

```js
let { MongoClient, ObjectId } = require("mongodb")
```

<hr class="dividerSection" />

## Note on Naming

<hr class="dividerSection" />

Some older documentation and tools refer to this type as <span class="codeSnip">ObjectID()</span>. Modern drivers and the shell typically use <span class="codeSnip">ObjectId</span>. They refer to the same identifier type.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/use-cases">← Back</a>
    <div class="xrefTitle">MongoDB - Basics - Fundamentals - Use Cases</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/data-modeling">Next →</a>
    <div class="xrefTitle">MongoDB - Basics - Fundamentals - Data Modeling</div>
  </div>
</div>