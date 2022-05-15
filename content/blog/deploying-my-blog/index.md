---
title: Deploying my blog using Gatsby and Github Pages
date: "2022-05-15T22:12:03.284Z"
description: "Why and How I built my first blog with Gatsby and deployed it on Github Pages"
---

## Why and how

I’ve always been interested in improving my knowledge. I usually try to accomplish that following talks, discussing  opinions with friends and colleagues or reading stuff on the net.

In the last few months often happened, during those situations or simply while working, to think something like “Hey man! You shouldn’t forget this! It would be cool even to share this with someone that could give you another point of view.”

We can always share with people directly or through Social Networks but it’s not so easy to consult again very old things. And of course we have our brain to store info but mine is not the most reliable.

Honestly I was looking also for something to improve my writing.
So what about a blog?

#### Gatsby

I set some requirement for choosing the right tools:
- Minimal and ready to use;
- Customisable without too much effort;
- Easy deployable (and for free?)

After some research and comparison with others similar tools I found Gatsby!

According to the official website Gatsby is “A full-stack frontend framework that comes with everything you need out of the box.”
One of the major points for me was that it’s based on ReactJs which I already had some minimal experience with.
Another important point was the existence of ready to use templates for building simple blogs.

#### Perfect then! And What about Deploy?

My idea was to reuse my existing custom domain (used for my personal website https://mircoporetti.me) and to make the blog accessible under the subpath/blog.

Since the website mentioned above was already deployed using Github Pages, the most natural choice was doing the same for the Gatsby app.
As I will describe in the next section, it was really easy to do that.

## Installation

#### Install Nodejs, npm and Gatsby CLI

Install Node and npm from https://nodejs.org/en/download/.

then

```shell
npm install -g gatsby-cli
```

#### Create the application

For this project I used a very simple blog template called  “gatsby-starter-blog”.
Source and info here https://github.com/gatsbyjs/gatsby-starter-blog.

Create the app executing
```shell
gatsby new blog-name https://github.com/gatsbyjs/gatsby-starter-blog
```

and run it
```shell
cd blog-name/
gatsby develop
```

Looked easy! :)

## Deploy

In order to reach the website under domain/blog, Github Pages requires that the Github repository is created with the same name of the subpath, in my case it was “blog”. 

To do that, go to the “Repositories” section on Github, click on “New” and create a public repo called “blog”.


#### Gatsby configuration

Add Github Pages dependency:
npm install gh-pages --save-dev

Add the following script into the package.json:

```json
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```
"deploy": "gatsby build --prefix-paths && gh-pages -d public"

After committing and pushing the changes to the main branch, create another branch called “gh-pages” and push it too.
Go to the Github repository’s settings through Settings->Pages and set the gh-pages branch as source.

NOTE: The custom domain doesn’t need to be set here since our page will be automatically published as a subpage of  the domain of the repository deployed under the root / using the repo name “yourGithubName.github.io”.
If the main app has a custom domain configured, the blog app will be under “customDomain/blog”, in my case “mircoporetti.me/blog”.

Edit gatsby-config.js file and add the following line into "module.exports":

```js
pathPrefix: "/blog"
```

If you receive an error about parallel queries, add even:
```js
flags: {
    PARALLEL_QUERY_RUNNING: true
}
```

#### Do it! Now!
To run the deploy script type:

```shell
npm run deploy
```

That's it!
