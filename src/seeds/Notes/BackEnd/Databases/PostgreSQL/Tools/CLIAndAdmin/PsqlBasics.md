# psql Basics

---
### Logging into PostgreSQL
---

To log into PostgreSQL from the terminal:

```shell
psql -U username
```

<div class="fullWidthBullet">

🔹 The default username is commonly: <span class="codeSnip">postgres</span>  

</div>

---
### Creating a Database
---

After connecting, you can create a database with:

```sql
CREATE DATABASE your_database_name;
```