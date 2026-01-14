## Schemas & Tables

---

### Overview

PostgreSQL organizes data using schemas and tables.

Schemas help group related database objects, while tables store structured rows of data.

---

### Creating a Table

Tables define the structure of stored data, including columns and data types.

Example:

```sql
CREATE TABLE your_table_name (
  id SERIAL PRIMARY KEY,
  column1 TEXT,
  column2 TEXT
);
```

---

### Column Types

Common column types include:

- TEXT
- INTEGER
- BOOLEAN
- TIMESTAMP

PostgreSQL supports many additional data types depending on use case.

---

### Primary Keys

Primary keys uniquely identify rows in a table.

In PostgreSQL, SERIAL is commonly used to generate auto-incrementing identifiers.

---

### Summary

Schemas and tables form the foundation of PostgreSQL data storage and structure.
