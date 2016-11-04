# Some helpful git commands

## git clone [address.git]

Hopefully you know this one - creates a folder on your local machine and clones the repository at [address.git] into it  

## git branch  

Checks which branch you're on  

### git branch [name]  

Creates a branch named [name]  

## git checkout [branch]  

Switch to branch [branch]  

### git checkout -b [branch]  

Create new branch [branch] and switch to it  

## git status  

This "displays the state of the working directory and the staging area" - which basically means it lets you see the changes you've made, whether they've been staged or not, and which files are/aren't currently being tracked. NB - this doesn't show you anything about the project history, just the current status  

## git log  

Haven't used this yet, but likely to be useful - shows project history  

## git add [filename]  

Adds changes in the working directory to the staging area. If you specify a filename, changes to that file will be staged for the next commit. If you have a full stop instead of filename, it adds all files with changes  

## git commit -m "message"  

Commits the versions of your changed (and already added) files to the project history. You need to add a message explaining your commit, and using -m means you can write the message in right there, rather than having to use a text editory etc.  

## git fetch  [origin] [branch]  

Fetch all branches from [origin], along with all required commits and files. Specifying a branch only fetches from that branch.  

## git merge [branch]  

This merges the specified branch [branch] into the branch you're on.  

## git pull [origin] [branch]  

Rolls **fetch** and **merge** into one command - fetch the remote copy of the specified branch and merge it into the local copy.  

## git push [origin] [branch]  

Push changes to remote repo, branch [branch] - default branch is [master]  

## git diff 

See differences between files line by line  

### git diff HEAD    

See the difference between your current files and your last commit  

### git diff --staged  

See the difference between your staged files and your last commit  

## git stash  

Temporarily store changes in a "dirty" working directory  

