<br>

---
### Data Modeling in MongoDB
---

MongoDB favors **flexible**, **document-based** models over rigid tables. Documents in the same collection can vary in fields and types.

---
### Collections
---

<div class="fullWidthBullet">

🔹 Collections ≈ SQL tables (conceptually), but with **no enforced schema**
🔹 Documents can have different keys and types
🔹 Related data often lives as **embedded** objects/arrays rather than separate tables

</div>

---
### Related Data: Embed vs Reference
---

<div class="fullWidthBullet">

🔹 <span class="emphasis">Embed</span> when data is accessed together frequently (read-optimized, one-to-few)
🔹 <span class="emphasis">Reference</span> when data is shared broadly, large, or independent
🔹 Arrays of embedded documents are common for tightly coupled sub-entities

</div>

---
### One-to-One Relationships (Basics)
---

A one-to-one can be modeled by:

<div class="fullWidthBullet">

🔹 <span class="emphasis">Embedding</span> the child subdocument directly
🔹 <span class="emphasis">Referencing</span> the child via its <span class="emphasis">ObjectId</span> field (values must match; field names don’t need to)

</div>

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/bson-objectid">← Back</a>
    <div class="xrefTitle">BSON & ObjectId</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/crud/create">Next →</a>
    <div class="xrefTitle">CRUD Operations</div>
  </div>
</div>