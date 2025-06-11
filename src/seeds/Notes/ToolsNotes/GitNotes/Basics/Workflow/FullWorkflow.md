## Full Git Workflow

---

### What is a Workflow?

A <span class="emphasis">workflow</span> in Git refers to the process developers follow to make and manage changes in a codebase. It helps maintain clean, organized, and trackable development practices.

---

### Key Concepts in a Workflow

- Work is done on a feature branch rather than <span class="codeSnip">main</span>.
- Changes are <span class="emphasis">staged</span> before they are <span class="emphasis">committed</span>.
- Commits represent self-contained, meaningful units of change.
- Remote repositories (like GitHub) are used for collaboration and backup.

---

### Branching Basics

- Create and switch to a new branch:  
  <span class="codeSnip">git checkout -b &lt;branch-name&gt;</span>
- Just create a branch (without switching):  
  <span class="codeSnip">git branch &lt;branch-name&gt;</span>
- Check your current branch:  
  <span class="codeSnip">git status</span>

Working on a branch helps keep features or fixes isolated from the main codebase.

---

### Step-by-Step: From Local to Pull Request

1. Make changes to files locally.
2. Stage your changes:
   - <span class="codeSnip">git add .</span> → Stages changes in current directory
   - <span class="codeSnip">git add -A</span> → Stages all changes, including deletions
3. Commit with a message:  
   <span class="codeSnip">git commit -m "your message"</span>
4. Push your changes:
   <span class="codeSnip">git push</span>  
   - First push of a new branch:  
     <span class="codeSnip">git push --set-upstream origin &lt;branch-name&gt;</span>

---

### Submitting a Pull Request (PR)

- Go to GitHub and open a PR from your branch into <span class="codeSnip">main</span>.
- After review, click <span class="emphasis">Merge Pull Request</span>.

---

### After Merge Cleanup

- Switch back to <span class="codeSnip">main</span>:  
  <span class="codeSnip">git checkout main</span>
- Pull the latest updates:  
  <span class="codeSnip">git pull</span>
