<br>

---
### Updates & Write Ops
---

Modify existing documents.

```js  
update(criteria, updateData);
```

<div class="fullWidthBullet">

🔹 Equivalent to a REST <span class="emphasis">PUT</span> at a high level  
🔹 Prefer explicit modern APIs (e.g., <span class="emphasis">updateOne</span>, <span class="emphasis">findByIdAndUpdate</span>) for clarity  

</div>

---
### Array Operators (Basics)
---

```js  
{ $addToSet: { <field1>: <value1>, ... } }
```

```js  
{ $push: { <field1>: <value1>, ... } }
```

<div class="fullWidthBullet">

🔹 <span class="emphasis">$addToSet</span>: add value if not already present  
🔹 <span class="emphasis">$push</span>: append value (array or scalar)  

</div>

---
### Deletes
---

Remove documents from a collection using model helpers.

```js  
Model.deleteOne({ field: value })  
Model.deleteMany({ field: value })  
Model.findByIdAndDelete(id)
```

<div class="fullWidthBullet">

🔹 <span class="codeSnip">deleteOne</span> → remove a single matching document  
🔹 <span class="codeSnip">deleteMany</span> → remove all matching documents  
🔹 <span class="codeSnip">findByIdAndDelete</span> → remove by ObjectId shortcut  
🔹 Equivalent to a REST <span class="emphasis">DELETE</span> request  

</div>