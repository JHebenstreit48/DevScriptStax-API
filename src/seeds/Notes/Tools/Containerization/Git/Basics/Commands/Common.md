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