<br>

---
### Shell & Server - Introduction
---

MongoDB relies on two core executables:

<div class="fullWidthBullet">

🔹 <span class="emphasis">mongod</span> → the **server daemon** that stores data and accepts connections  
🔹 <span class="emphasis">mongosh</span> → the **interactive shell** for connecting, querying, and administering databases  

</div>

---
### Typical Workflow
---

1. Start the server with <span class="codeSnip">mongod</span>  
2. Connect using <span class="codeSnip">mongosh</span>  
3. Run commands to inspect or manage your environment  

---
### Quick Example
---

```shell  
mongod --dbpath /data/db
```

```shell  
mongosh "mongodb://localhost:27017"
```

---
### Where to Go Next
---

<div class="fullWidthBullet">

🔹 <span class="emphasis">Shell & Server Commands</span> → details for admin and navigation commands  
🔹 <span class="emphasis">Connection Strings</span> → how to connect to different environments  
🔹 <span class="emphasis">Monitoring Tools</span> → <span class="codeSnip">mongostat</span>, <span class="codeSnip">mongotop</span>  

</div>