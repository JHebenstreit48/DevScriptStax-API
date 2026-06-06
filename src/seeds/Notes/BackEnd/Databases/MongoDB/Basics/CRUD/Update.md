# Introduction

<hr class="dividerSection" />

Update operations modify existing documents in a collection.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Change one or more fields.</li>
    <li>Leave unspecified fields untouched.</li>
    <li>Target documents using filter criteria.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Conceptual Behavior

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Updates apply to existing documents only.</li>
    <li>You do not need to resubmit the entire document.</li>
    <li>Multiple documents can be updated at once.</li>
  </ul>
</div>

Update operations are conceptually similar to REST <span class="emphasis">PUT</span> or <span class="emphasis">PATCH</span> requests.  
Prefer explicit modern APIs such as <span class="emphasis">updateOne</span> and <span class="emphasis">findOneAndUpdate</span> for clarity.

<hr class="dividerSection" />

## findOneAndUpdate()

<hr class="dividerSection" />

Finds one document in a collection and updates it.

```js
db.collection('items').findOneAndUpdate(
  { _id: new ObjectId(id) },
  { $set: { text: newText } }
)
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>You only need to provide the fields or properties that are being updated.</li>
    <li>You do not need to include the full document — only include what is being changed.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Array Operators

<hr class="dividerSection" />

```js
{ $addToSet: { <field1>: <value1> } }
```

```js
{ $push: { <field1>: <value1> } }
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">$addToSet</span>: adds a value only if it is not already present.</li>
    <li><span class="emphasis">$push</span>: appends a value to an array or scalar.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/read">← Back</a>
    <div class="xrefTitle">MongoDB - Basics - CRUD Operations - Read</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/delete">Next →</a>
    <div class="xrefTitle">MongoDB - Basics - CRUD Operations - Delete</div>
  </div>
</div>