## Status / Diff / Log

---

### Checking Your Working Tree

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git status</span></td>
      <td class="tableCell">Show modified, staged, deleted, and untracked files</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git status -sb</span></td>
      <td class="tableCell">Short status with branch information</td>
    </tr>
  </tbody>
</table>

---

### Viewing Changes (Diff)

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git diff</span></td>
      <td class="tableCell">Show unstaged changes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git diff --staged</span></td>
      <td class="tableCell">Show staged changes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git diff --name-only</span></td>
      <td class="tableCell">List changed file names only</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git diff --name-status</span></td>
      <td class="tableCell">Show file changes with status (M, A, D, R)</td>
    </tr>
  </tbody>
</table>

---

### Viewing Commit History (Log)

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git log</span></td>
      <td class="tableCell">Show commit history</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git log --oneline</span></td>
      <td class="tableCell">Condensed one-line commit history</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">
        <span class="codeSnip">git log --oneline --graph --decorate --all</span>
      </td>
      <td class="tableCell">Graph view of commits, branches, and tags</td>
    </tr>
  </tbody>
</table>

---

### Renaming Files and Folders (git mv)

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">
        <span class="codeSnip">git mv &lt;old-path&gt; &lt;new-path&gt;</span>
      </td>
      <td class="tableCell">Rename or move a tracked file or folder</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">
        <span class="codeSnip">git mv src/Pages src/__tmp_pages__</span>
      </td>
      <td class="tableCell">Windows case-only <span class="emphasis">folder</span> rename (step 1: temporary folder name)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">
        <span class="codeSnip">git mv src/__tmp_pages__ src/pages</span>
      </td>
      <td class="tableCell">Windows case-only <span class="emphasis">folder</span> rename (step 2: final folder casing)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">
        <span class="codeSnip">git mv src/Foo.tsx src/__tmp_foo__.tsx</span>
      </td>
      <td class="tableCell">Windows case-only <span class="emphasis">file</span> rename (step 1: temporary file name)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">
        <span class="codeSnip">git mv src/__tmp_foo__.tsx src/foo.tsx</span>
      </td>
      <td class="tableCell">Windows case-only <span class="emphasis">file</span> rename (step 2: final file casing)</td>
    </tr>
  </tbody>
</table>

#### Examples of File Renaming

Rename a file and verify Git sees it.

```shell
git mv src/OldName.tsx src/NewName.tsx
git status
git diff --name-status
```

Case-only rename on Windows (folder). Use a temporary name so it shows up in PRs.

```shell
git mv src/Pages src/__tmp_pages__
git mv src/__tmp_pages__ src/pages
git status
```

Case-only rename on Windows (file).

```shell
git mv src/Foo.tsx src/__tmp_foo__.tsx
git mv src/__tmp_foo__.tsx src/foo.tsx
git status
```

---

### Verifying Renames

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git status</span></td>
      <td class="tableCell">Verify Git sees the rename</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">
        <span class="codeSnip">git diff --name-status</span>
      </td>
      <td class="tableCell">Confirm rename shows as R instead of delete/add</td>
    </tr>
  </tbody>
</table>

---

### Notes

On Windows, case-only renames (such as Pages → pages) may not be detected reliably.
Use a temporary rename with <span class="codeSnip">git mv</span> to force Git to record the change so it appears correctly in pull requests.

Shell note:

Git commands (<span class="codeSnip">git mv</span>, <span class="codeSnip">git status</span>, <span class="codeSnip">git diff</span>) work the same in Git Bash and PowerShell.

Differences usually come from shell helper commands:
- Git Bash uses Unix-style tools (<span class="codeSnip">ls</span>, <span class="codeSnip">rm</span>, <span class="codeSnip">grep</span>)
- PowerShell uses different built-in commands and aliases

When following shell-based examples on Windows, Git Bash avoids most command differences.

<div class="xrefNav">
  <div class="xrefBox">
    <span class="emphasis">Back:</span>
    <a href="/markdown/basics/content-elements/formatting">Commands → Common</a>
  </div>