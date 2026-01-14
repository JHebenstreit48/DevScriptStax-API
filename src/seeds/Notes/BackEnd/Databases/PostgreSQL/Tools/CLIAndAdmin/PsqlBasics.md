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
