+++
title = "Get started"
weight = 20
+++

### How to get started

Here we explain how to start playing with [Hugo](https://gohugo.io) and 
our [Scientific Computing Group Thema](https://github.com/scgmlz/scgdoc-hugo).


#### Install Hugo

* Downloads latest hugo from [here](https://github.com/gohugoio/hugo/releases).
* Archive will contain single binary which you will have to put to your `$HOME/bin` directory, for example

#### Cloning our site

Our site repository contains two branches. `Master` branch contains the theme and markdown content of the site.
`gh-pages` branch contains generated html.

Clone our site.

```
$ git clone https://github.com/scgmlz/scgdoc-hugo.git
```

While being in `master` branch configure `public` directory to be a worktree for `gh-pages` branch (should be done only once). This step can be skipped when using the more classical approach of creating an extra clone.

```
$ git worktree add -B gh-pages public origin/gh-pages
```

Put `public` branch in `.gitignore`.

```
$ echo 'public/*' >> .gitignore;  echo '.gitignore' >> .gitignore
```

#### Run Hugo, make you first changes

Run Hugo server on `master` branch.

```
$ cd <source>
$ hugo server --disableFastRender
```

Open web-browser using address Hugo will tell you (most probably http://localhost:1313/scgdoc-hugo/).
Modify `<source>/content/_index.md` and see updated landing page in a browser. Commit your changes.

```
$ cd <source>; git add _index.md; git commit -m "my changes"; git push
```

#### Publishing new version of web site on GitHub

##### Using the git worktree

To generate new site in `public` run `hugo` without parameters.

```
$ hugo
```

Push new version of site to `gh-pages` using worktree syncronization.
```
cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages
```
See details in [Deployment to gh-pages branch](https://discourse.gohugo.io/t/simple-deployment-to-gh-pages/5003)

In few minutes, check [https://scgmlz.github.io/scgdoc-hugo/](https://scgmlz.github.io/scgdoc-hugo/) to see if your changes have been successfully published.

##### Using a local git clone

Follow these steps:

```bash
# remove previous publication
rm -rf public
mkdir public

# clone gh-pages branch from the local repo into a repo located within "public"
git clone .git --branch gh-pages public
  
# generate
hugo
  
# commit the changes in the clone and push them back to the *local* gh-pages branch    
cd public
git commit -a -m "Publishing to gh-pages"
git push origin gh-pages

# push the changes to the remote origin
cd ..
git push origin :
```



#### Cleaning previous publication

To clean from remnants of previous publication

```
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/
git worktree add -B gh-pages public origin/gh-pages
```
