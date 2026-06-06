# Introduction

<hr class="dividerSection" />

Delete operations remove documents from a collection.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Permanently removes data.</li>
    <li>Can target one or many documents.</li>
    <li>Uses filter conditions to select documents.</li>
  </ul>
</div>

Delete operations are conceptually equivalent to a REST <span class="emphasis">DELETE</span> request.

<hr class="dividerSection" />

## deleteOne()

<hr class="dividerSection" />

Removes a single matching document from a collection. When using <span class="codeSnip">deleteOne()</span> pass only one argument.

```js
db.collection('items').deleteOne({ _id: new ObjectId(id) })
```

<hr class="dividerSection" />

## Legacy: .remove()

<hr class="dividerSection" />

<span class="codeSnip">.remove()</span> is a legacy MongoDB method for deleting documents. It has since been replaced by newer method names and should not be used in modern code.

<hr class="dividerSection" />

## Conceptual Notes

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Deleting a document does not affect other documents.</li>
    <li>Collections remain even if all documents are removed.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/update">← Back</a>
    <div class="xrefTitle">MongoDB - Basics - CRUD Operations - Update</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/bulk-operations">Next →</a>
    <div class="xrefTitle">MongoDB - Basics - CRUD Operations - Bulk Operations</div>
  </div>
</div>