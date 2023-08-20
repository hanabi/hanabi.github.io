# H-Group Conventions for Hanabi

Please visit the **[conventions website](https://hanabi.github.io/)**.

This is the GitHub repository for the website. It is built with [Docusaurus](https://docusaurus.io/), a modern static website generator.

<br />

## What is a Pull Request?

If you're in the H-Group, then you might want to help edit the website. Maybe you want to fix some typos. Or maybe you want to add a new example. Or maybe you proposed a new convention, and it got voted in, and now you need to add a new section. Regardless of what you are doing, you will need to a submit a _pull request_.

In plain English, a pull request (or a PR for short) is simply a request to merge the changes that you want into the master copy of the website. Essentially, you need to make a copy of the website (called a _fork_), make some changes (called a _commit_), and then click a button on the website to create a new PR. At that point, I'll be notified that there is a new PR and I can look over the specific changes. Then, I can click "Approve" or "Deny" accordingly. If I click "Approve", then the changes are integrated and the website is automatically updated!

Pull requests are how people collaborate together to work on code (and documents) on GitHub.

<br />

## How to Submit a Pull Request (Simple)

If all you are doing is making some small changes, like fixing typos, then you can use the GitHub website itself to live-edit the files. (Using the website is not recommended for bigger changes, as you won't be able to see where the errors are, if any.)

The steps to create a new pull request are as follows:

1. [Create an account on GitHub](https://github.com/join) and login to that account, if you already haven't. (GitHub accounts are free.)
1. On the [main website](https://hanabi.github.io/), navigate to the page that you want to change.
1. On the bottom of the page, you should see a link called "Edit this page". Click on that.
1. Click the green button that says "Fork this repository". (That will create your own copy of the website that will live under your GitHub user account.)
1. Edit the file using the website editor.
1. When you are done, click the "Commit" button at the bottom. (This will save your change into your forked copy.)
1. Click the green button that says "Create pull request".
1. Type a description to explain what you changed and why.
1. Click the green button that says "Create pull request".
1. All done!

<br />

## How to Submit a Pull Request (Complicated)

Editing files on the GitHub website is a pain. If you are adding a significant amount of changes, I recommend that you set up a local development environment to work on the website. That way, you can use a browser to see how your edits look in a local copy of the website that runs on your own computer.

### Part 1 - Initial Preparation

- Do you know what a shell/terminal is? If not, watch a basic video on YouTube that explains how to run programs in a shell, how to use the `cd` command to change directories, and so forth.
- Download and install [Node.js](https://nodejs.org/en/) (if you don't already have it installed). Select the "Current" version instead of the "LTS" version.
  - This allows the [JavaScript](https://www.javascript.com/) programming language to run on your local computer.
- Download and install [Python](https://www.python.org/downloads/) (if you don't already have it installed). Select the latest version.
  - This allows the [Python](https://www.python.org/) programming language to run on your local computer.
- Download and install [Git](https://git-scm.com/downloads) (if you don't already have it installed).
  - This allows you to push and pull files to [GitHub](https://github.com/).
- Download and install [VSCode](https://code.visualstudio.com/) (if you don't already have it installed).
  - This is a nice text editor that you can edit the website files with.

### Part 2 - Fork and Clone the Repository

- [Create an account on GitHub](https://github.com/join) and login to that account, if you already haven't. (GitHub accounts are free.)
- In a browser, go to the [main page for the repository](https://github.com/hanabi/hanabi.github.io).
- Click on the "Fork" button in the top-right-hand-corner. This will create your own copy of the website that will live under your GitHub user account.
- Next, open "Git Bash" from the Start Menu. This is a command-line interface that allows you to run command-line programs. (If you are not on Windows, then just open a terminal/shell instead.)
  - By default, the new shell will start in your home directory. (e.g. `C:\Users\[YourUsername]\`)
- [Optional] In the terminal, change to the directory where you want the source code of the website to live. For example, if you want it to live in your "Documents" folder, then type: `cd Documents`
- Clone the forked copy of the website with the following command:
  - `git clone https://github.com/[YourGitHubUsername]/hanabi.github.io.git` <br />
    (replace "[YourGitHubUsername]" with your GitHub username)
- Go into the cloned directory:
  - `cd hanabi.github.io`
- Install the dependencies:
  - `./install.sh`

### Part 3 - Run It, Make Changes, and Observe Changes

- In the shell from the previous step, test to see if the website works with the following command:
  - `./run.sh`
  - Now, the website will "run" forever until you press `Ctrl + C` to cancel it (or close the terminal window).
  - In a browser, surf to http://localhost:3000/ in order to see your local copy of the website. <!-- markdownlint-disable-line MD034 -->
- Now, open VSCode (which is a nice code/document editor). From the menu, select "File", then "Open Folder", then select the website folder that we cloned earlier. Or you can simply type `code .` in your terminal to open current folder in VSCode.
- VSCode is now treating the website as a "project". You can see the list of files in the left pane and you can double click a file to open it. (Alternatively, you can open a file by using the menu with "File" --> "Open File".)
- The main files for the website are located in the "docs" folder. For example, the section for level 1 is located at "docs/level-1.md". Go ahead and edit whatever files that you want to change. As soon as you edit a particular file, you should see the changes automatically appear in your browser (that is, if you happen to be viewing the particular section).

### Part 4 - Make Sure There Are No Errors

- The website has some automated checks that can catch spelling errors and related mistakes. After making some changes, you should ensure that there are no errors with what you did.
- In the shell from the previous step, run the "lint.sh" script:
  - `./lint.sh`
- If it reports "Success!", then no errors were found. Otherwise, a description of the error will be shown.

### Part 5 - Commit Changes and Submit a PR

- By default, VSCode starts in "Explorer" view, where the list of files is in the left pane. This is represented by the two-files icon in the top-left-hand-corner.
- Switch to the "Source Control" view by clicking on the tree icon in the top-left-hand-corner (which is directly below the magnifying glass icon).
- This view allows you to see a summary of the changes that you have made so far. If you are satisfied with the changes, then commit the changes by typing a commit message in the "Message" box in the top-left-hand-corner. For example, "adding new example for level 2".
- After typing a message, press `Ctrl + Enter` to submit it. A warning box will appear; answer "Yes" to commit all of your changes. (Note that most of the time, you will want to commit all your changes. But you can always get more granular and only commit specific files if necessary.)
- Now, the commit lives on your local computer, but it isn't synced with GitHub. Push the commit to GitHub by clicking on the "0⬇ 1⬆" icon in the bottom-left-hand-corner, then select "OK" to the warning box.
- Now, the commit is synced to your GitHub, meaning that if you view your forked copy of the repository on GitHub.com, it should show all of the changes you made.
- On the main page for your forked repository, click on the "Contribute" link near the top of the page, and then click on the "Open Pull Request" button. Next, click on the "Create pull request" button. Enter in a good description of the changes that you made, and then click on "Create pull request".
- Now, wait for me to review the request. If additional changes are needed, then you can just push commits to your fork, and they will be automatically reflected in the pull request without having to do anything else.
