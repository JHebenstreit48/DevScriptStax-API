## psql Basics

---

### Overview

psql is PostgreSQL’s interactive command-line interface.

It allows users to connect to databases, execute SQL commands, and manage database objects.

---

### Connecting to PostgreSQL

To connect to PostgreSQL using psql:

```shell
psql -U username
```

The default administrative user is often:

postgres

---

### Creating a Database

Once connected, a new database can be created using SQL:

```sql
CREATE DATABASE your_database_name;
```
---

### Summary

The psql tool provides direct access to PostgreSQL for administration and development tasks.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/postgresql/advanced/extensions/fdw">← Back</a>
    <div class="xrefTitle">Extensions & FDW</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/postgresql/tools/cli-admin/roles-permissions">Next →</a>
    <div class="xrefTitle">Roles & Permissions</div>
  </div>
</div>