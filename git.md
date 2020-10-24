markdown cheat Sheet
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

git Tutorial
https://github.com/dictcp/awesome-git


https://www.geeksforgeeks.org/list-useful-github-commands/


https://www.geeksforgeeks.org/ultimate-guide-git-github/

https://www.geeksforgeeks.org/git-lets-get-into-it/


Top 10 Useful GitHub Repos That Every Developer Should Follow
https://github.com/freeCodeCamp/freeCodeCamp

https://www.geeksforgeeks.org/top-10-useful-github-repos-that-every-developer-should-follow/?ref=rp

https://github.com/jwasham/coding-interview-university

https://github.com/donnemartin/system-design-primer

https://github.com/getify/You-Dont-Know-JS

https://github.com/mtdvio/every-programmer-should-know





List of useful Github Commands
Last Updated: 07-02-2018
Github is a distributed version control system which helps to manage the repositories.

These are a list of few commands that you can use frequently on github(git bash)

1.git help
Take help from github help section for different commands and other errors

2.git config
To set the basic configurations on github like your name and email.

3.git config –global user.name “Ashish Madaan”
Sets configuration values for your user name on git.



4.git config –global user.email ashishmadaan6@gmail.com
Sets configuration values for your user email on git.

5.git config –global color.ui true
To see different colours on command line for different outputs.

6.mkdir store
Create a directory if not created initially.

7.cd store
To go inside the directory and work upon its contents.

8.git init
To create a local git repository for us in our store folder.This will help to manage the git commands for that particular repository.

9.git status
To see whats changed since last commit.It shows all the files that have been added and modified and ready to be commmitted and files which are untracked

10.git add Readme.txt
To add a file Readme.txt to the staging area to track its changes.

11.git commit -m “Created a Readme.txt”
To commit our changes(taking a snapshot) and providing a message to remember for future reference.



12.git log
To check the history of commits for our reference.

Different ways to use add command:

13.git add
To add a specific list of files to staging area.

14.git add --all
To add all files of current directory to staging area.

15.git add *.txt
To add all text files of the current directory to staging area.

16.git add docs/*.txt
To add all text files of a particular directory(docs) to staging area.

17.git add docs/
To add all files in a particular directory(docs) to staging area.

18.git add “*.txt”
To add text files of entire project to staging area.
More Commands:

19.git diff
To figure out what changes you made since last commit.

20.git reset head license
To undo staging of the file that was added in the staging area.



21.git checkout –license
To Blow away all changes since the last commit of the file.

22.git commit -a -m “Readme.md”
To add any of our tracked files to staging area and commit them by providing a message to remember.

23.git reset –soft HEAD^
To undo last commit and bring file to staging area.

24.git reset –hard HEAD^
To undo last commit and remove file from the staging area as well(In case we went horribly wrong).

25.git reset –hard HEAD^^
To undo last 2 commits and all changes.

26.git remote add origin https://github.com/madaan123/MyAlgorithms.git
This commands make a bookmark which signifies that this particular remote refers to this URL.
This remote will be used to pull any content from the directory and push our local content to the global server.

27.git remote add <address> 
To add new remotes to our local repository for a particular git address.

28.git remove rm
To remove a remote from our local repository.

29.git push -u origin master
To push all the contents of our local repository that belong to master branch to the server(Global repository).

30.git clone https://github.com/madaan123/MyAlgorithms.git
To clone or make a local copy of the global repository in your system
(git clone command downloads the repository and creates a remote named as origin which can be checked by command – git remote -v).



31.git branch Testing
To create a new branch named as Testing.

32.git branch
To see all the branches present and current branch that we are working on.

33.git checkout Testing
To switch to branch Testing from master branch.

34.ls
To see directories and files in the current directory.

35.git merge Testing
To merge Testing branch with master branch.

36.git branch -d Testing
To delete Testing branch.

37.git checkout -b admin
To create a new branch admin and set it as current branch.

38.git branch -r
To look at all the remote branches.

39.git branch -D Testing
To forcefully delete a branch without making commmits.

40.git tag
To see the list of available tags.



41.git checkout v0.0.1
To set the current tag to v0.0.1.

42.git tag -a v0.0.3 -m “version 0.0.3”
To create a new tag.

43.git push –tags
To push the tags to remote repository.

44.git fetch
To fetch down any changes from global repository to current repository

45.git rebase
Three tasks are performed by git rebase

Move all changes to master which are not in origin/master to a temporary area.
Run all origin master commits.
Run all commits in the temporary area on top of our master one at a time, so it avoids merge commits.

Configure tooling
Configure user information for all local repositories

$ git config --global user.name "[name]"

Sets the name you want attached to your commit transactions

$ git config --global user.email "[email address]"

Sets the email you want attached to your commit transactions

$ git config --global color.ui auto

Enables helpful colorization of command line output

Branches
Branches are an important part of working with Git. Any commits you make will be made on the branch you’re currently “checked out” to. Use git status to see which branch that is.

$ git branch [branch-name]

Creates a new branch

$ git checkout [branch-name]

Switches to the specified branch and updates the working directory

$ git merge [branch]

Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is an important Git operation.

$ git branch -d [branch-name]

Deletes the specified branch

Create repositories
A new repository can either be created locally, or an existing repository can be cloned. When a repository was initialized locally, you have to push it to GitHub afterwards.

$ git init

The git init command turns an existing directory into a new Git repository inside the folder you are running this command. After using the git init command, link the local repository to an empty GitHub repository using the following command:

$ git remote add origin [url]

Specifies the remote repository for your local repository. The url points to a repository on GitHub.

$ git clone [url]

Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits

The .gitignore file
Sometimes it may be a good idea to exclude files from being tracked with Git. This is typically done in a special file named .gitignore. You can find helpful templates for .gitignore files at github.com/github/gitignore.

Synchronize changes
Synchronize your local repository with the remote repository on GitHub.com

$ git fetch

Downloads all history from the remote tracking branches

$ git merge

Combines remote tracking branches into current local branch

$ git push

Uploads all local branch commits to GitHub

$ git pull

Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. git pull is a combination of git fetch and git merge

Make changes
Browse and inspect the evolution of project files

$ git log

Lists version history for the current branch

$ git log --follow [file]

Lists version history for a file, including renames

$ git diff [first-branch]...[second-branch]

Shows content differences between two branches

$ git show [commit]

Outputs metadata and content changes of the specified commit

$ git add [file]

Snapshots the file in preparation for versioning

$ git commit -m "[descriptive message]"

Records file snapshots permanently in version history

Redo commits
Erase mistakes and craft replacement history

$ git reset [commit]

Undoes all commits after [commit], preserving changes locally

$ git reset --hard [commit]

Discards all history and changes back to the specified commit

CAUTION! Changing history can have nasty side effects. If you need to change commits that exist on GitHub (the remote), proceed with caution. If you need help, reach out at github.community or contact support.

Glossary
git: an open source, distributed version-control system
GitHub: a platform for hosting and collaborating on Git repositories
commit: a Git object, a snapshot of your entire repository compressed into a SHA
branch: a lightweight movable pointer to a commit
clone: a local version of a repository, including all commits and branches
remote: a common repository on GitHub that all team members use to exchange their changes
fork: a copy of a repository on GitHub owned by a different user
pull request: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more
HEAD: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using git checkout