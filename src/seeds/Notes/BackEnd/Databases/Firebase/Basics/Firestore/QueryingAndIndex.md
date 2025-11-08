<br>

---
## Firestore: Querying & Indexing Basics
---

Firestore stores data in collections and documents.  
This guide shows how to run simple queries using the Firebase Console’s Query Builder and explains common filter options so you can verify and explore your data.

---

### 1. Open the Query Builder

1. In the Firebase Console, go to **Firestore Database**.  
2. In the top-right area of the documents panel, click **Query Builder**.  
3. Set **Query scope** to <span class="codeSnip">Collection</span> unless you need a collection group search.  
4. Enter a **Path**, such as:  
   - <span class="codeSnip">/posts</span>  
   - <span class="codeSnip">/users</span>  
   - <span class="codeSnip">/orders</span>  

---

### 2. Add a Filter (Where Clause)

To filter by a field such as <span class="codeSnip">siteId</span>:

1. Click **Add to query**.  
2. Choose **Where**.  
3. In the **Field** input, enter <span class="codeSnip">siteId</span> (or your target field).  
4. In the **Operator** dropdown, choose one of:  
   - <span class="codeSnip">==</span> for exact match  
   - <span class="codeSnip"><</span>, <span class="codeSnip"><=</span>, <span class="codeSnip">></span>, <span class="codeSnip">>=</span> for range checks  
   - <span class="codeSnip">in</span> for matching multiple values  
   - <span class="codeSnip">array-contains</span> or <span class="codeSnip">array-contains-any</span> for array fields  
5. In **Value**, provide the filter value (e.g., <span class="codeSnip">"your-site-id"</span>).  
6. Click **Run** to execute the query.

---

### 3. View Results and Count

- Matching documents are listed in the results table.  
- Scroll to the bottom to view document count (e.g., *1–50 of 167*).  
- Use this to confirm seeding or import results (e.g., “Do all entries for my siteId exist?”).  

If Firestore prompts to create an index, click the link to generate it and re-run once it finishes building.

---

### 4. Common Use Cases

- **Check per-site data**: filter by <span class="codeSnip">siteId</span> or tenant identifiers.  
- **Filter by status**: <span class="codeSnip">status == "published"</span>.  
- **Time-based queries**: compare timestamps using <span class="codeSnip">>=</span> or <span class="codeSnip"><</span>.  
- **Debug imports**: confirm that imported documents include expected fields.

---

**Notes:**

- Multi-field queries may require composite indexes.  
- The Query Builder is ideal for testing queries before implementing them in code.  