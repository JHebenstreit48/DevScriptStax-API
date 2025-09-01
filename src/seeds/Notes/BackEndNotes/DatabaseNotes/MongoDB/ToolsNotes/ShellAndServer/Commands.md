<br>

---
### Shell & Server Commands
---

Key commands for controlling the <span class="emphasis">MongoDB server</span> and interacting with it via the <span class="emphasis">Mongo Shell</span>.

---
### Starting the Server (mongod)
---

```shell  
mongod
```

<div class="fullWidthBullet">

🔹 Default port: <span class="codeSnip">27017</span>  
🔹 Default data path: <span class="codeSnip">/data/db</span>  
🔹 Use <span class="emphasis">--dbpath</span> to specify a custom directory  
🔹 Use <span class="emphasis">--port</span> to bind a non-default port  

</div>

Stop the server (Linux/macOS):

```shell  
pkill mongod
```

---
### Starting the Shell (mongosh)
---

```shell  
mongosh
```

#### Connect to a specific database:

```shell  
mongosh "mongodb://localhost:27017/appDatabase"
```

---
### Getting Help
---

```shell  
help  
```

```shell  
db.help()
```

---
### Database Navigation
---

```shell  
show dbs  
use myDatabase  
db  
show collections
```

---
### Admin & Diagnostics
---

```js  
db.stats()  
db.serverStatus()  
db.currentOp()
```

<div class="fullWidthBullet">

🔹 <span class="emphasis">db.stats()</span> → summary of the current database  
🔹 <span class="emphasis">db.serverStatus()</span> → server health overview  
🔹 <span class="emphasis">db.currentOp()</span> → view running operations  

</div>

---
### Replica Set Startup (Preview)
---

```shell  
mongod --replSet "rs0" --dbpath /data/db/rs0 --port 27017 --bind_ip_all
```

```js  
rs.initiate()  
rs.status()
```