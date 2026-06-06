# Introduction

<hr class="dividerSection" />

Create operations add new documents to a MongoDB collection. If no <span class="emphasis">_id</span> is provided, MongoDB automatically generates an <span class="emphasis">ObjectId</span>.

<hr class="dividerSection" />

## insertOne()

<hr class="dividerSection" />

Inserts a single document into a collection. <span class="codeSnip">insertOne()</span> will only add one item or document to a collection at a time.

```js
db.collection('items').insertOne({ text: req.body.text })
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Returns an acknowledgement and the generated <span class="emphasis">_id</span>.</li>
    <li>Returns information about the document it creates — including the new document's ID.</li>
    <li>Fails if a duplicate <span class="codeSnip">_id</span> is provided.</li>
  </ul>
</div>

The server can send back the newly created document's data using <span class="codeSnip">res.json()</span>:

```js
res.json({ _id: info.insertedId, text: req.body.text })
```

This allows the browser to access the new document's ID immediately after creation without a page reload.

<hr class="dividerSection" />

## insertMany()

<hr class="dividerSection" />

Inserts multiple documents in one operation.

```js
db.collectionName.insertMany(
  [
    { key1: 'v1' },
    { key1: 'v2', _id: ObjectId() }
  ],
  { ordered: true }
);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Faster than calling <span class="codeSnip">insertOne()</span> repeatedly.</li>
    <li><span class="codeSnip">ordered: true</span> stops on first error (default).</li>
    <li><span class="codeSnip">ordered: false</span> continues after errors.</li>
    <li>Missing <span class="codeSnip">_id</span> values are auto-generated.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/data-modeling">← Back</a>
    <div class="xrefTitle">Section: MongoDB - Basics - Fundamentals - Data Modeling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/read">Next →</a>
    <div class="xrefTitle">MongoDB - Basics - CRUD Operations - Read</div>
  </div>
</div>