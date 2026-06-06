# What Is MongoDB?

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">MongoDB</span> is a <span class="emphasis">NoSQL</span> (non-relational) database management system.</li>
    <li>Unlike traditional relational databases like <span class="emphasis">PostgreSQL</span>, MongoDB does not store data in tables and rows.</li>
    <li>Instead it uses <span class="emphasis">documents</span>, <span class="emphasis">objects</span>, and <span class="emphasis">arrays</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Key Features of MongoDB

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Open-source</span> and document-oriented.</li>
    <li>Stores data in <span class="emphasis">collections</span> — groups of documents.</li>
    <li>Each item that lives inside a collection is called a <span class="emphasis">document</span>.</li>
    <li>Flexible <span class="emphasis">schemas</span> — documents within a collection can differ in structure.</li>
    <li><span class="emphasis">Horizontally scalable</span> and ideal for distributed systems.</li>
    <li>Commonly used in <span class="emphasis">web development</span> with Node.js and JavaScript.</li>
  </ul>
</div>

<hr class="dividerSection" />

## BSON (Binary JSON)

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Stores documents in <span class="emphasis">BSON</span>, a binary-encoded format similar to JSON.</li>
    <li>Supports <span class="emphasis">embedded documents</span> and <span class="emphasis">arrays</span>.</li>
    <li>Optimized for <span class="emphasis">parsing performance</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Scalability and Flexibility

<hr class="dividerSection" />

MongoDB is built for scale and rapid change:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Stores <span class="emphasis">heterogeneous data</span> with no enforced schema.</li>
    <li>Supports <span class="emphasis">embedded documents</span> and <span class="emphasis">arrays</span>.</li>
    <li>Ideal for projects with <span class="emphasis">evolving data models</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## CRUD Overview

<hr class="dividerSection" />

<span class="emphasis">CRUD</span> stands for <span class="emphasis">Create</span>, <span class="emphasis">Read</span>, <span class="emphasis">Update</span>, and <span class="emphasis">Delete</span>. These are the four fundamental operations used when working with databases — not just MongoDB, but most if not all databases.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Create</span> — adds new documents to a collection.</li>
    <li><span class="emphasis">Read</span> — retrieves or loads documents. Also referred to as load or retrieve.</li>
    <li><span class="emphasis">Update</span> — edits or modifies an existing document.</li>
    <li><span class="emphasis">Delete</span> — removes a document from a collection on the server.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/mongodb/basics/crud/create">MongoDB → Basics → CRUD Operations → Create</a><br />
  <a href="/mongodb/basics/crud/read">MongoDB → Basics → CRUD Operations → Read</a><br />
  <a href="/mongodb/basics/crud/update">MongoDB → Basics → CRUD Operations → Update</a><br />
  <a href="/mongodb/basics/crud/delete">MongoDB → Basics → CRUD Operations → Delete</a>
</div>

<hr class="dividerSection" />

## Mongoose

<hr class="dividerSection" />

<span class="emphasis">Mongoose</span> is a popular <span class="emphasis">Object Data Modeling (ODM)</span> library for MongoDB and Node.js.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Adds <span class="emphasis">schemas</span> for structure and validation.</li>
    <li>Provides cleaner <span class="emphasis">queries</span> and model organization.</li>
    <li>Analogy: MongoDB is to Mongoose what SQL is to <span class="emphasis">Sequelize</span>.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/mongodb/basics/mongoose/overview">MongoDB → Basics → Mongoose → Overview</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/firebase/advanced/cost-optimization/storage-bandwidth">← Back</a>
    <div class="xrefTitle">Topic: Firebase - Advanced - Cost Optimization - Storage & Bandwidth</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/nosql-vs-sql">Next →</a>
    <div class="xrefTitle">MongoDB - Basics - Fundamentals - NoSQL vs SQL</div>
  </div>
</div>