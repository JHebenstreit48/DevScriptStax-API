# package.json & Scripts


---
### Creating package.json
---

You can use the following command to quickly create a <span class="emphasis">package.json</span> file:

```shell
npm init -y
```

---
### What package.json Represents
---

The <span class="emphasis">package.json</span> file can be thought of as a grocery list or recipe list.

It keeps a running list of all the ingredients (packages and scripts) that your application needs in order to run.

---
### Scripts Section
---

The <span class="emphasis">scripts</span> section of <span class="emphasis">package.json</span> is where you define your own custom commands for a project.

---
### Running Scripts
---

If you name a script <span class="emphasis">watch</span>, you can run it using:

```shell
npm run watch
```

As long as <span class="emphasis">nodemon</span> or <span class="emphasis">node</span> is pointing to the correct file, the script will start your server and (in the case of nodemon) automatically restart it when changes are detected.
