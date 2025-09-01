<br>

---
### BSON & ObjectId
---

MongoDB stores objects in <span class="emphasis">BSON</span> (Binary JSON), structured as key–value pairs and optimized for faster parsing.

<div class="fullWidthBullet">

🔹 Similar to JSON but binary and efficient  
🔹 Supports <span class="emphasis">embedded documents</span> and <span class="emphasis">arrays</span>  
🔹 Optimized for <span class="emphasis">parsing performance</span>  

</div>

---
### ObjectId Structure
---

MongoDB documents use <span class="emphasis">ObjectId</span> as a unique 12-byte identifier:

<br>

<div class="tableWrapper">
  <table class="notesTable">
    <thead>
      <tr class="tableHeader">
        <th class="tableCellHeader">Component</th>
        <th class="tableCellHeader">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tableRow">
        <td class="tableCell">4 bytes</td>
        <td class="tableCell">Unix timestamp (seconds)</td>
      </tr>
      <tr class="tableRow">
        <td class="tableCell">5 bytes</td>
        <td class="tableCell">Random value generated per process</td>
      </tr>
      <tr class="tableRow">
        <td class="tableCell">3 bytes</td>
        <td class="tableCell">Incrementing counter</td>
      </tr>
    </tbody>
  </table>
</div>

---
### Creating ObjectIds
---

Shell helper:

```shell  
ObjectId()
```

In drivers (e.g., Node.js):

```js  
new ObjectId()
```