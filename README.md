# Hyphen-ated Conventions for Hanabi

[![Hyphen-ated](/static/img/hyphenated-circle.png)](https://hanabi.github.io/)

Please visit the **[conventions website](https://hanabi.github.io/)**.

This is the GitHub repository for the website. It is built with [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

<br />

## What is a Pull Request?

If you're in the Hyphen-ated group, then you might want to help edit the website. Maybe you want to fix some typos. Or maybe you want to add a new example. Or maybe you proposed a new convention, and it got voted in, and now you need to add a new section. Regardless of what you are doing, you will need to a submit a *pull request*.

In plain English, a pull request (or a PR for short) is simply a request to merge the changes that you want into the master copy of the website. Essentially, you need to make a copy of the website (called a *fork*), make some changes (called a *commit*), and then click a button on the website to create a new PR. At that point, I'll be notified that there is a new PR and I can look over the specific changes. Then, I can click "Approve" or "Deny" accordingly. If I click "Approve", then the changes are integrated and the website is automatically updated!

Pull requests are how people collaborate together to work on code (and documents) on GitHub.

<br />

## How to Submit a Pull Request (Simple)

If all you are doing is making some small changes, like fixing typos, then you can use the GitHub website itself to live-edit the files. (Using the website is not recommended for bigger changes, as you won't be able to see where the errors are, if any.)

The steps to create a new pull request are as follows:

1. [Create an account on GitHub](https://github.com/join), if you already haven't. (They are free.)
1. On the [main Hanabi Conventions website](https://hanabi.github.io/), navigate to the page that you want to change.
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

Editing files on the GitHub website is a pain. If you are adding a significant amount of changes, I recommend that you set up a local development environment to work on the website. That way, you can use a browser to instantaneously see how your edits look live in a local copy of the website that runs on your own computer.

* Download and install [Node.js](https://nodejs.org/en/) (if you don't already have it installed). Select the "Current" version instead of the "LTS" version.
* Download and install [Git](https://git-scm.com/downloads) (if you don't already have it installed).
* Open "Git Bash" from the Start Menu. (If you are not on Windows, then just open a terminal/shell.)
  * By default, Git Bash will start in your home directory. (e.g. `C:\Users\[YourUsername]\`)
* [Optional] In the terminal, navigate to the directory where you want the source code of the website to live. For example, if you want it to live in your "Documents" folder, then type `cd Documents`.
* Clone the website by pasting in the following command:
  * `git clone https://github.com/hanabi/hanabi.github.io.git`
