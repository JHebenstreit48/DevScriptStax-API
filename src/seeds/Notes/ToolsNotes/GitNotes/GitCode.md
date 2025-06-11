use git remote -v to check the current fetch and push paths for the local version of a repo 

use the following command then to update the fetch and push paths to sync the new repo name with your local repo

git remote set-url origin git@github.com:&lt;gitHubUsername&gt;/&lt;newRepoName&gt;.git
