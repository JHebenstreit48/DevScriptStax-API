## Git Commands

---

### Branching & Switching

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git branch &lt;name&gt;</span></td>
      <td class="tableCell">Create a new branch</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git checkout &lt;name&gt;</span></td>
      <td class="tableCell">Switch to a branch</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git checkout -b &lt;name&gt;</span></td>
      <td class="tableCell">Create and switch to a new branch</td>
    </tr>
  </tbody>
</table>

### Notes

git switch is the newer, clearer way to switch/create branches.
git checkout is older but still common in tutorials and still works.

Branch naming:

- Prefixes like feature/ are optional. If you skip them, keep names consistent and descriptive.
- Prefer lowercase with hyphens (january-2026-updates) to avoid casing issues across systems.

#### Example: Create and Switch to a Branch

```shell
git checkout -b feature/new-notes
git status
```

#### Example: Create and Switch to a Branch

```shell
git switch -c january-2026-updates
git status
```

---

### Staging & Committing

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git add .</span></td>
      <td class="tableCell">Stage all changes in current directory</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git add -A</span></td>
      <td class="tableCell">Stage all changes, including deletions</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git commit -m "message"</span></td>
      <td class="tableCell">Commit with message</td>
    </tr>
  </tbody>
</table>

#### Example: Stage and Commit Changes

```shell
git status
git add -A
git commit -m "Update notes"
```

---

### Pushing & Pulling

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git push</span></td>
      <td class="tableCell">Push changes to remote</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git push --set-upstream origin &lt;branch&gt;</span></td>
      <td class="tableCell">Set tracking branch and push</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git pull</span></td>
      <td class="tableCell">Pull latest changes from remote</td>
    </tr>
  </tbody>
</table>

#### Example: Push a New Branch

```shell
git push --set-upstream origin feature/new-notes
```

---

### Remote Configuration

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git remote -v</span></td>
      <td class="tableCell">Show current remotes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git remote set-url origin &lt;url&gt;</span></td>
      <td class="tableCell">Change remote origin URL</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git fetch --all --prune</span></td>
      <td class="tableCell">Update remote branch list and remove stale remote-tracking branches</td>
    </tr>
  </tbody>
</table>

### Example: Verify Remote URL

```shell
git remote set-url origin <new-url>
git remote -v
```

---

### Note

Git commands behave the same across shells. Differences you may encounter usually come from the terminal itself.

On Windows, Git Bash is commonly used for Git workflows because it supports Unix-style commands shown in many examples.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/git/basics/workflow/nuances">← Back</a>
    <div class="xrefTitle">Topic: Git Workflow → Nuances</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/git/basics/commands/status-diff-log">Next →</a>
    <div class="xrefTitle">Commands Status/Diff/Log</div>
  </div>
</div>