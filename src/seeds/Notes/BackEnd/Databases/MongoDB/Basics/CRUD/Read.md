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