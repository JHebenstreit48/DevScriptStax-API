## Push / Pull Nuances

---

### Tracking Remotes

Every time you push to or pull from a repository, Git communicates with a <span class="emphasis">remote</span> — often GitHub or GitLab — using a configured URL.

To check what remote URL your local repository is tracking:

```shell
git remote -v
```

This shows the current <span class="emphasis">fetch</span> and <span class="emphasis">push</span> URLs for the remote named <span class="codeSnip">origin</span>.

---

### Updating a Remote URL

If your repository name or username changes (e.g., on GitHub), you'll need to update the remote URL to continue pushing or pulling.

```shell
git remote set-url origin git@github.com:yourUsername/newRepoName.git
```

This updates both fetch and push targets so you can continue syncing with the correct repository.

---

### Push Errors & First-Time Pushes

If you try to push a new branch and Git doesn't know which remote branch to track, you'll get an error like:

```shell
fatal: The current branch X has no upstream branch.
```

To resolve this, use:

```shell
git push --set-upstream origin branch-name
```

This sets up a <span class="emphasis">tracking relationship</span> between your local and remote branch. Future pushes can then be done with just <span class="codeSnip">git push</span>.

---

### Pull Conflicts & Out-of-Sync Issues

Pulling from the remote can fail if your local branch has changes that conflict with the remote version.

Symptoms may include:

- ❌ Merge conflicts during <span class="codeSnip">git pull</span>
- ❌ Rejected updates due to history divergence

To handle this:

- If your local commits are okay to override, use:

```shell
git pull --rebase
```

- If there's a true conflict, Git will pause and ask you to resolve it manually, then commit or continue the rebase.

---

### git add . vs git add -A

This is one of the most misunderstood staging behaviors in Git.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">What It Does</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git add .</span></td>
      <td class="tableCell">Stages <strong>new and modified</strong> files in the <strong>current directory</strong> and its subdirectories.  
      <br />Does <span class="emphasis">not</span> stage deleted files or changes outside the current directory.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">git add -A</span></td>
      <td class="tableCell">Stages <strong>everything</strong>: new, modified, and <strong>deleted</strong> files across the <strong>entire working tree</strong>.</td>
    </tr>
  </tbody>
</table>

---

### When to Use Which?

Use <span class="codeSnip">git add .</span> if you only want to add updates in your current working folder.  
Use <span class="codeSnip">git add -A</span> if you want a full snapshot, including file deletions and renames.

---

### Visual Scenario

You delete a file from a sibling folder and run:

```shell
git add .
git commit -m "Removed old utils.js"
```

❌ The deleted file is <span class="emphasis">not staged</span> — so it remains in the repo!

Now try:

```shell
git add -A
git commit -m "Removed old utils.js"
```

This time, the file deletion is staged and recorded correctly in the commit.

---

By understanding these differences and failure points, you’ll avoid common frustrations when collaborating or syncing with a remote.
