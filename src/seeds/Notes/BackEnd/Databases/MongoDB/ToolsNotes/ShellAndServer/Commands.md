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

🔹 Starts the server daemon that stores data and accepts connections  
🔹 Defaults: port <span class="codeSnip">27017</span>, data path <span class="codeSnip">/data/db</span>  
🔹 Use <span class="codeSnip">--dbpath</span> for a custom data directory; <span class="codeSnip">--port</span> for a non-default port  
🔹 Dev: run in a terminal; Prod: run under a service manager  

</div>

Stop the server (Linux/macOS):

```shell  
pkill mongod
```

<div class="fullWidthBullet">

🔹 Sends a signal to stop all <span class="codeSnip">mongod</span> processes (Unix/macOS)  
🔹 On Windows/managed services, stop via the OS/service tooling  

</div>

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

<div class="fullWidthBullet">

🔹 Opens the interactive shell to run admin commands and queries  
🔹 Without a URI, connects to local defaults; with a URI, targets a specific host/db  
🔹 Use SRV (<span class="codeSnip">mongodb+srv://</span>) for Atlas, or <span class="codeSnip">mongodb://</span> for local/standalone  

</div>

---
### Getting Help
---

```shell  
help  
```

```shell  
db.help()
```

<div class="fullWidthBullet">

🔹 <span class="codeSnip">help</span> shows global shell help; <span class="codeSnip">db.help()</span> lists database-scoped helpers  
🔹 Many objects also support <span class="codeSnip">.help()</span> to discover methods  

</div>

---
### Legacy UI tip (historical)
---

In older MongoDB shell UIs you may see an “i” (info) icon listing keyboard shortcuts and helpful commands.  
In modern <span class="codeSnip">mongosh</span>, use: <span class="codeSnip">help</span> and <span class="codeSnip">db.help()</span>.

---
### Database Navigation
---

```shell  
show dbs  
use myDatabase  
db  
show collections
```

<div class="fullWidthBullet">

🔹 <span class="codeSnip">show dbs</span> lists databases  
🔹 <span class="codeSnip">use</span> switches the active db (created lazily on first write)  
🔹 <span class="codeSnip">db</span> prints the current db; <span class="codeSnip">show collections</span> lists collections in the active db  

</div>

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

<div class="fullWidthBullet">

🔹 <span class="codeSnip">--replSet</span> starts a node intended for replica set membership  
🔹 <span class="codeSnip">rs.initiate()</span> bootstraps a new replica set; <span class="codeSnip">rs.status()</span> inspects its state  
🔹 For production, follow full replication/sharding best practices  

</div>