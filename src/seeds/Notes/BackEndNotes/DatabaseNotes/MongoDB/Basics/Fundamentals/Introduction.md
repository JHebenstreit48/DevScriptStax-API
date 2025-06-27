## Introduction to MongoDB

---

### What is MongoDB?

<span class="emphasis">MongoDB</span> is a <span class="emphasis">NoSQL</span> (non-relational) database management system.  
Unlike traditional relational databases like <span class="emphasis">PostgreSQL</span>, MongoDB does not store data in tables and rows.  
Instead, it uses <span class="emphasis">documents</span>, <span class="emphasis">objects</span>, and <span class="emphasis">arrays</span>.

---

### Key Features of MongoDB

- Open-source and document-oriented
- Stores data in <span class="emphasis">collections</span> (groups of documents)
- Flexible schemas — documents within a collection can differ in structure
- Horizontally scalable and ideal for distributed systems
- Commonly used in modern web development with Node.js and JavaScript

---

### BSON (Binary JSON)

- MongoDB stores documents in <span class="emphasis">BSON</span>, a binary-encoded format similar to JSON.
- BSON supports embedded documents and arrays and is optimized for parsing performance.

---

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

#### MongoDB Compass

A graphical interface for MongoDB, allowing you to:

<div class="bullet2">

- <span class="emphasis">View</span> and <span class="emphasis">edit</span> <span class="secondEmphasis">documents</span>.
- Run queries visually.
- Explore collections and indexes.
- Analyze schema structure.

</div>

#### Mongo Shell

A command-line tool for interacting directly with MongoDB.  
You can use it to run queries, insert data, create collections, and more.

---

### Port and Default Settings

- The default MongoDB port is <span class="codeSnip">27017</span>.

---

### Scalability and Flexibility

MongoDB is built for scale and rapid change:

- Stores <span class="emphasis">heterogeneous</span> data with no enforced schema
- Easily supports embedded documents and arrays
- Ideal for projects with evolving data models

---

### Mongoose (Overview)

<span class="emphasis">Mongoose</span> is a popular Object Data Modeling (ODM) library for MongoDB and Node.js.

- Adds schemas to MongoDB, similar to how TypeScript adds types to JavaScript
- Useful for validation, structure enforcement, and cleaner queries
- Example: MongoDB is to Mongoose what SQL is to Sequelize

---