<br>

---
## Data Export & Import with the Admin SDK
---

Use the Admin SDK to back up, migrate, or synchronize Firestore data safely between environments.

---

### 1. Exporting Data

```ts
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore();

async function exportPosts() {
  const snapshot = await db.collection("posts").get();
  const data = [];

  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  console.log(`Exported ${data.length} documents from 'posts'.`);
}

exportPosts().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
```

**Tips:**

- Paginate or split exports for large collections.
- Save exported JSON in a versioned folder or timestamped path.

---

### 2. Importing Data

```ts
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";

const db = getFirestore();

async function importPosts() {
  const raw = fs.readFileSync("./exports/posts.json", "utf8");
  const items = JSON.parse(raw);

  const batch = db.batch();

  for (const item of items) {
    const { id, ...data } = item;
    const ref = db.collection("posts").doc(id);
    batch.set(ref, data);
  }

  await batch.commit();
  console.log(`Imported ${items.length} documents into 'posts'.`);
}

importPosts().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
```

**Guidelines:**

- Verify field names and types match current schema.
- Include consistent identifiers such as <span class="codeSnip">siteId</span> or <span class="codeSnip">fullPath</span> for reference integrity.

---

### 3. Scheduled & Automated Workflows

Common automation patterns:

- **Cron jobs** for periodic exports or syncs.
- **Cloud Run tasks** triggered manually or on schedule.
- **CI/CD integration** to import after deployments.

**Best Practices:**

- Log counts before and after import/export.
- Use dry-run flags for safety.
- Send alerts for failed operations.

---

**Summary**

- Use the Admin SDK for safe, repeatable data migration.
- Always protect credentials and confirm document totals after completion.
- Start small, automate later.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/firebase/advanced/admin-sdk/server-auth-claims">← Back</a>
    <div class="xrefTitle">Server Auth & Claims</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/firebase/advanced/cost-optimization/pricing-read-write">Next →</a>
    <div class="xrefTitle">Cost Optimization</div>
  </div>
</div>