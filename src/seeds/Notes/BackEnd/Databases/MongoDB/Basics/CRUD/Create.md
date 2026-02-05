# Create (Insert) Operations
---

Create operations add new documents to a MongoDB collection.

If no <span class="emphasis">_id</span> is provided, MongoDB automatically generates an <span class="emphasis">ObjectId</span>.

---
### insertOne
---

```js
db.collectionName.insertOne({ key1: value1, key2: value2 });
```

<div class="fullWidthBullet">

🔹 Inserts a single document  
🔹 Returns an acknowledgement and the generated <span class="emphasis">_id</span>  
🔹 Fails if a duplicate <span class="codeSnip">_id</span> is provided  

</div>

---
### insertMany
---

```js
db.collectionName.insertMany(
  [
    { key1: 'v1' },
    { key1: 'v2', _id: ObjectId() }
  ],
  { ordered: true }
);
```

<div class="fullWidthBullet">

🔹 Inserts multiple documents in one operation  
🔹 Faster than calling <span class="codeSnip">insertOne</span> repeatedly  
🔹 <span class="codeSnip">ordered: true</span> stops on first error (default)  
🔹 <span class="codeSnip">ordered: false</span> continues after errors  
🔹 Missing <span class="codeSnip">_id</span> values are auto-generated  

</div>