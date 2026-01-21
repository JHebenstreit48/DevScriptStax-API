## Apollo Server Schema

---

### Overview

A GraphQL schema describes the shape of your API.

It defines what data can be queried, what mutations can be performed, and which types exist in the API.

---

### Schema Definition and Modularization

As an API grows, the schema is commonly split into smaller pieces to keep it organized.

Modularizing a schema helps with:

- Maintaining readability
- Team ownership of parts of the schema
- Scaling the API over time

---

### Declarative Data Fetching (High-Level)

Clients request exactly the fields they need from the schema.

The schema defines what is possible to request, while resolvers define how the data is actually retrieved.
