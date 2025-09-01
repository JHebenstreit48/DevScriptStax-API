<br>

---
### Schemas & Models
---

Define a Model (class) tied to a collection using a Schema.

```js  
mongoose.model("ModelName", schema);
```

<div class="fullWidthBullet">

🔹 Compiles a <span class="emphasis">Schema</span> into a Model bound to a collection  
🔹 Models expose APIs to <span class="emphasis">create</span>, <span class="emphasis">query</span>, <span class="emphasis">update</span>, <span class="emphasis">delete</span>  

</div>

---
### Creating Documents
---

Persist new data using Mongoose models. <span class="codeSnip">Model.create</span> is a one-shot helper; <span class="codeSnip">new Model</span> + <span class="codeSnip">save</span> lets you prepare or mutate before saving.

```js  
// One-shot create (validates + writes)  
await Model.create({ name: 'A' });  

// Two-step creation with extra logic before persisting  
const doc = new Model({ name: 'B' });  
// ... mutate doc, run custom logic, attach refs, etc.  
await doc.save();
```

<div class="fullWidthBullet">

🔹 Both paths run schema validators and relevant middleware (hooks)  
🔹 <span class="codeSnip">create</span> also accepts arrays for batch inserts  
🔹 <span class="codeSnip">save</span> is ideal when you need pre-save transformations or conditional logic  

</div>