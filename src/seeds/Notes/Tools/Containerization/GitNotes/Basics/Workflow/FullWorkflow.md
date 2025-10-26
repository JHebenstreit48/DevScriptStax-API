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
  
  ```shell
  git checkout -b branch-name
  ```

- Just create a branch (without switching):  

```shell
git branch branch-name
```

NOTE:  
You would just create a name for your branch with either dashes in between, camel case, or other casing but no spaces where it says <span class="codeSnip">branch-name</span>.

Examples of valid and invalid branch names:


  ### ✅ Valid

```shell
git checkout -b fix-login-bug
git checkout -b feature/ReactNativeSupport
git checkout -b hotfix_v2_patch
```

  ### ❌ Invalid (don’t do this)

```shell
git checkout -b "my broken branch" # Spaces = trouble
```
- Check your current branch:  

```shell
git status
```
Working on a branch helps keep features or fixes isolated from the main codebase.

---

### Step-by-Step: From Local to Pull Request

1. Make changes to files locally.
2. Stage your changes:
   
```shell
git add .
# Stages changes in current directory
```

```shell
git add -A
# Stages all changes, including deletions
```
3. Commit with a message:

```shell
git commit -m "your message"
```
4. Push your changes:

```shell
git push
```
- First push of a new branch:  

```shell
git push --set-upstream origin branch-name
```

---

### Submitting a Pull Request (PR)

- Go to GitHub and open a PR from your branch into <span class="codeSnip">main</span>.
- After review, click <span class="emphasis">Merge Pull Request</span>.

---

### After Merge Cleanup

- Switch back to <span class="codeSnip">main</span>:

```shell  
git checkout main
```

- Pull the latest updates: 

```shell
git pull
```