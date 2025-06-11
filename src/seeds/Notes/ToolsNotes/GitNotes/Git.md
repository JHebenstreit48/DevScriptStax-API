The <span class="codeSnip">git status</span> command <span class="emphasis">checks</span> what <span class="emphasis">branch</span> we are <span class="emphasis">currently</span> on.  
The <span class="codeSnip">git checkout -b &lt;branch-name&gt;</span> command <span class="emphasis">creates</span> a <span class="emphasis">new</span> branch and <span class="emphasis">switches</span> to it.  

The <span class="codeSnipt">git add .</span> command is used to stage <span class="emphasis">all changes</span> (new and modified files) in the <span class="emphasis">current directory</span> and <span class="emphasis">subdirectories</span>.  

In the <span class="codeSnip">git add -A</span> command , the <span class="emphasis">"A"</span> stands for <span class="emphasis">"All"</span> and it stages <span class="emphasis">all changes</span> in the entire working directory <span class="emphasis">new</span> files, <span class="emphasis">modified</span> files, and <span class="emphasis">deletions</span>.  

The <span class="codeSnip">"-m":</span> <span class="emphasis">flag</span> is used to associate a message with our commit.  

The <span class="codeSnip">git branch -b branch-name</span> command creates a branch, but does not check you out to it.  

When you are on or in the <span class="codeSnip">main</span> branch <span class="emphasis">locally</span>, you have a requirement to work on a <span class="emphasis">feature</span> or <span class="emphasis">separate</span> branch.  

Checkout to a new branch with the <span class="codeSnip">git checkout -b branch name</span> command.  
This will create and checkout to the new &lt;<span class="codeSnip">branch-name</span>&gt;.  

Do the <span class="emphasis">commit</span> workflow as needed in this stage.  
This includes <span class="emphasis">pushing</span> those <span class="emphasis">commits</span> to GitHub.  

This means do either <span class="codeSnip">git add .</span> or <span class="codeSnip">git add -A</span>.  

Sync with GitHub with the <span class="codeSnip">git push</span> command.  

Warning: this will prompt you with the following suggestion example:  
<span class="codeSnip">push --set-upstream origin &lt;branch name&gt;</span>.

NOTE: This only happens the first time you push to a newly created branch.

Now we will have a synced connection between <span class="emphasis">GitHub</span> and our <span class="emphasis">local</span> branch.  

Work on your files/directories <span class="emphasis">locally</span>.  

Create a <span class="emphasis">Pull Request (PR)</span> in GitHub.  

Then do a <span class="emphasis">Merge Pull Request</span>.  

On the <span class="emphasis">local</span> device, if we are still not in <span class="codeSnip">main</span> branch,  
we need to <span class="emphasis">checkout</span>.  

To checkout to the <span class="codeSnip">main</span> branch, use the <span class="codeSnip">git checkout main</span> command.  

Then we need to bring all the changes living in GitHub remote/main branch to our local machine using the  
<span class="codeSnip">git pull</span> command.  

When you finish, rinse and repeat as needed.