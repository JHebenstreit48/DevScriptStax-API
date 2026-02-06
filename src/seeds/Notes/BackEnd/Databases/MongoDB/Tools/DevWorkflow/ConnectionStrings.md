# Connection Strings & Environments

---
### What a Connection String Does
---

A <span class="emphasis">connection string</span> is used by tools and applications to connect to a MongoDB database.

It tells the client:

<div class="fullWidthBullet">

🔹 Where the database is hosted  
🔹 How to authenticate  
🔹 Which database to connect to  

</div>

---
### Local vs Atlas Environments
---

<div class="fullWidthBullet">

🔹 Local MongoDB commonly uses <span class="codeSnip">mongodb://</span>  
🔹 MongoDB Atlas commonly uses <span class="codeSnip">mongodb+srv://</span>  
🔹 Both formats represent the same concept: how to reach and access the database  

</div>

---
### Database Users & Credentials (Atlas)
---

When using MongoDB Atlas, you must create a database user.

<div class="fullWidthBullet">

🔹 Username  
🔹 Password  

</div>

These credentials are required to authenticate and are referenced by the connection process.

---
### Editing an Atlas Connection String
---

Atlas provides connection options such as:

<div class="fullWidthBullet">

🔹 <span class="emphasis">Connect Your Application</span>  
🔹 A section labeled something like <span class="emphasis">Connection String Only</span>  

</div>

Common edits include:

<div class="fullWidthBullet">

🔹 Replacing <span class="codeSnip">&lt;password&gt;</span> with your actual password  
🔹 Replacing <span class="codeSnip">test</span> with the database name you want to use  
🔹 The database name can be found or created in the <span class="emphasis">Collections</span> section of Atlas  

</div>

---
### Atlas Network Access (Development)
---

To allow your application or tools to connect to an Atlas cluster, network access may need to be configured.

A common development option is adding:

<div class="fullWidthBullet">

🔹 <span class="codeSnip">0.0.0.0/0</span>  

</div>

This allows connections from any IP address and is convenient for development, but not recommended for production.