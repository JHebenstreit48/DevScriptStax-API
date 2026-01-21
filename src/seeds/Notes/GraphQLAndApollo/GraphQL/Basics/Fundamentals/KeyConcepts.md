## GraphQL Key Concepts

---

### Overview

GraphQL APIs are built around a schema and executed through operations.

The core pieces you will see repeatedly are:

<div class="fullWidthBullet">

🔹 Queries (read data)  
🔹 Mutations (write data)  
🔹 Subscriptions (real-time updates)  
🔹 Resolvers (how fields return data)  

</div>

---

### Resolvers (High-Level)

Resolvers are functions that determine how requested fields return data.

<div class="fullWidthBullet">

🔹 Schema defines what can be requested  
🔹 Resolvers define how requested values are retrieved or computed  
🔹 Resolvers often call databases, services, or other APIs  

</div>
