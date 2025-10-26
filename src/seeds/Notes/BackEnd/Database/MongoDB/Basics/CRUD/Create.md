<br>

---
### Create (Insert) Operations
---

Use <span class="emphasis">insertOne</span> or <span class="emphasis">insertMany</span> to add documents. If no <span class="emphasis">_id</span> is supplied, MongoDB generates an <span class="emphasis">ObjectId</span>.

---
### insertOne
---

```js  
db.collectionName.insertOne({ key1: value1, key2: value2 });
```

<div class="fullWidthBullet">

🔹 Returns acknowledgement and inserted <span class="emphasis">_id</span>  
🔹 Fails on duplicate <span class="emphasis">_id</span>  

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

🔹 Inserts multiple documents in one round trip (faster than looping <span class="codeSnip">insertOne</span>)  
🔹 <span class="codeSnip">ordered: true</span> → stop at first error (default)  
🔹 <span class="codeSnip">ordered: false</span> → continue remaining ops after an error  
🔹 Missing <span class="codeSnip">_id</span> values are auto-generated as <span class="codeSnip">ObjectId</span>s  

</div>