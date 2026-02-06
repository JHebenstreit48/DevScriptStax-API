
# Setup (Ports, Atlas & Defaults)
---

MongoDB can be run locally or hosted in the cloud using MongoDB Atlas.

---
### Default Configuration
---

<div class="fullWidthBullet">

🔹 Default MongoDB <span class="emphasis">port</span>: <span class="codeSnip">27017</span>  
🔹 Databases are created lazily (on first write)  
🔹 Collections do not require predefined schemas  

</div>

---
### MongoDB Atlas & Clusters
---

When creating a MongoDB account, you typically start by building a <span class="emphasis">cluster</span>.

A cluster is where your databases and collections live.

<div class="fullWidthBullet">

🔹 Atlas UI may show <span class="codeSnip">Build my first cluster</span> or <span class="codeSnip">Create Cluster</span>  
🔹 A single cluster can host multiple databases  
🔹 Free-tier defaults are sufficient for learning and development  

</div>

---
### Cloud Providers
---

When creating a cluster, you choose a cloud provider that physically stores your data.

<div class="fullWidthBullet">

🔹 <span class="emphasis">AWS</span> (Amazon Web Services)  
🔹 <span class="emphasis">Google Cloud</span>  
🔹 <span class="emphasis">Microsoft Azure</span>  

</div>

For most beginner setups, the default region and configuration are acceptable.

---
### Local vs Cloud
---

<div class="fullWidthBullet">

🔹 Local MongoDB → runs on your machine using <span class="codeSnip">mongod</span>  
🔹 Atlas MongoDB → managed cloud database accessed via connection string  
🔹 Both expose the same database concepts (databases, collections, documents)  

</div>

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/nosql-vs-sql">← Back</a>
    <div class="xrefTitle">NoSQL vs SQL</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/mongodb/basics/fundamentals/use-cases">Next →</a>
    <div class="xrefTitle">Use Cases</div>
  </div>
</div>