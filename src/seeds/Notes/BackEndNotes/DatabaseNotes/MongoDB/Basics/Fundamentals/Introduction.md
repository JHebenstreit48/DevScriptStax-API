<br>

---
### What is MongoDB?
---

<span class="emphasis">MongoDB</span> is a <span class="emphasis">NoSQL</span> (non-relational) database management system.  
Unlike traditional relational databases like <span class="emphasis">PostgreSQL</span>, MongoDB does not store data in tables and rows.  
Instead, it uses <span class="emphasis">documents</span>, <span class="emphasis">objects</span>, and <span class="emphasis">arrays</span>.

---
### Key Features of MongoDB
---

<div class="fullWidthBullet">

🔹 <span class="emphasis">Open-source</span> and document-oriented  
🔹 Stores data in <span class="emphasis">collections</span> (groups of documents)  
🔹 Flexible <span class="emphasis">schemas</span> — documents within a collection can differ in structure  
🔹 <span class="emphasis">Horizontally scalable</span> and ideal for distributed systems  
🔹 Commonly used in <span class="emphasis">web development</span> with Node.js and JavaScript  

</div>

---
### BSON (Binary JSON)
---

<div class="fullWidthBullet">

🔹 Stores documents in <span class="emphasis">BSON</span>, a binary-encoded format similar to JSON  
🔹 Supports <span class="emphasis">embedded documents</span> and <span class="emphasis">arrays</span>  
🔹 Optimized for <span class="emphasis">parsing performance</span>  

</div>

<!-- ---

### ObjectID Structure

MongoDB documents use a unique <span class="codeSnip">ObjectID()</span> identifier. Each ObjectID is a <span class="emphasis">12-byte</span> value containing:  

<br>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Component</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">4 bytes</td>
      <td class="tableCell">Unix timestamp (seconds)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5 bytes</td>
      <td class="tableCell">Random value generated per process</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3 bytes</td>
      <td class="tableCell">Incrementing counter</td>
    </tr>
  </tbody>
</table>

---
### MongoDB Tools
---

#### MongoDB Compass

A graphical interface for MongoDB, allowing you to:

<div class="bullet1">

🔹 <span class="emphasis">View</span> and <span class="emphasis">edit</span> <span class="secondEmphasis">documents</span>  
🔹 Run queries visually  
🔹 Explore collections and indexes  
🔹 Analyze schema structure  

</div>

#### Mongo Shell

A command-line tool for interacting directly with MongoDB.  
You can use it to run queries, insert data, create collections, and more.

---
### Port and Default Settings
---

<div class="bullet3">

🔹 The default MongoDB <span class="emphasis">port</span> is <span class="codeSnip">27017</span>  

</div>

--- -->

---
### Scalability and Flexibility
---

MongoDB is built for scale and rapid change:

<div class="fullWidthBullet">

🔹 Stores <span class="emphasis">heterogeneous data</span> with no enforced schema  
🔹 Supports <span class="emphasis">embedded documents</span> and <span class="emphasis">arrays</span>  
🔹 Ideal for projects with <span class="emphasis">evolving data models</span>  

</div>

---
### Mongoose (Overview)
---

<span class="emphasis">Mongoose</span> is a popular <span class="emphasis">Object Data Modeling (ODM)</span> library for MongoDB and Node.js.

<div class="fullWidthBullet">

🔹 Adds <span class="emphasis">schemas</span> for structure and validation  
🔹 Provides cleaner <span class="emphasis">queries</span> and model organization  
🔹 Analogy: MongoDB is to Mongoose what SQL is to <span class="emphasis">Sequelize</span>  

</div>