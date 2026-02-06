# MongoDB Atlas

---
### What MongoDB Atlas Is
---

MongoDB Atlas is a fully managed, cloud-hosted MongoDB service.

It allows you to run MongoDB without managing servers or infrastructure.

---
### Clusters
---

In Atlas, databases are hosted inside <span class="emphasis">clusters</span>.

<div class="fullWidthBullet">

🔹 A cluster can contain multiple databases  
🔹 Cluster creation is typically the first step when setting up Atlas  
🔹 Free-tier clusters are sufficient for learning and development  

</div>

---
### Cloud Providers
---

Atlas allows you to choose where your data is hosted.

<div class="fullWidthBullet">

🔹 Amazon Web Services (AWS)  
🔹 Google Cloud  
🔹 Microsoft Azure  

</div>

The default region and configuration are usually adequate for getting started.

---
### Users & Network Access
---

Atlas requires configuration for access and security.

<div class="fullWidthBullet">

🔹 Database users define authentication credentials  
🔹 Network access controls which IPs can connect  
🔹 Development setups often relax restrictions for convenience  

</div>

---
### Connection Strings (Pointer)
---

Atlas provides connection strings for connecting tools and applications to your cluster.

<div class="fullWidthBullet">

🔹 Used by Compass and application code  
🔹 Include host, authentication, and database information  
🔹 Detailed usage is covered in <span class="emphasis">Connection Strings & Environments</span>  

</div>

---
### Atlas CLI (High-Level)
---

MongoDB also provides a command-line interface for interacting with Atlas.

<div class="fullWidthBullet">

🔹 Used for managing Atlas resources from the terminal  
🔹 Complements the Atlas web UI  
🔹 Covered at a high level only in this section  

</div>
