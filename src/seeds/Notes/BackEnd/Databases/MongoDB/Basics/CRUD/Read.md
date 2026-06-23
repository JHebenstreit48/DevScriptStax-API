# Introduction

<hr class="dividerSection" />

Read operations retrieve documents from a collection. Read is also referred to as <span class="emphasis">load</span> or <span class="emphasis">retrieve</span> — all three terms describe the same concept.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Load existing data.</li>
    <li>Retrieve matching documents.</li>
    <li>Query based on conditions.</li>
  </ul>
</div>

Read operations are conceptually equivalent to a REST <span class="emphasis">GET</span> request.

<hr class="dividerSection" />

## find() and toArray()

<hr class="dividerSection" />

<span class="codeSnip">.find()</span> is the MongoDB way of performing a read operation — the equivalent of load or retrieve in CRUD.

```js
db.collection('items').find().toArray()
```

<span class="codeSnip">.toArray()</span> converts the result into an easy-to-work-with JavaScript array.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If you see commas between items it means JavaScript has auto-converted the array into a string of text.</li>
    <li>The <span class="codeSnip">.join()</span> method can convert an array into a clean string of text when needed.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Common Read Examples

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Searching documents in <span class="emphasis">MongoDB Atlas</span>.</li>
    <li>Filtering collections in <span class="emphasis">MongoDB Compass</span>.</li>
    <li>Viewing documents via the shell or UI tools.</li>
    <li>Performing a query search for a specific document based on a certain parameter present in an object.</li>
  </ul>
</div>

## Data Availability After Read

<hr class="dividerSection" />

When data is retrieved from a MongoDB collection and stored in a variable outside of a function, it becomes available in the <span class="emphasis">global scope</span>.

Any variable declared outside of a function is accessible anywhere in the script — this is a fundamental JavaScript scoping rule.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>In this context the <span class="codeSnip">items</span> variable holds an array of documents retrieved from the collection.</li>
    <li>Because it is declared outside any function it is accessible anywhere in the script.</li>
    <li>This is what makes client-side rendering possible — the browser has access to the raw data and can build the UI from it.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/create">← Back</a>
    <div class="xrefTitle">MongoDB - Basics - CRUD Operations - Create</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/update">Next →</a>
    <div class="xrefTitle">MongoDB - Basics - CRUD Operations - Update</div>
  </div>
</div>