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
