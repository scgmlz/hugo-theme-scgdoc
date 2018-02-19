+++
title = "Overview"
weight = 10
+++

### Overview

Prototype of the documentation site made with [Hugo](https://gohugo.io/) and [Bootstrap](http://getbootstrap.com/).
The documentation theme is called `scgdoc` and is supported by the Scientific Computing Group at MLZ.
The theme is heavilly based on following projects

* [hugo-theme-learn - Documentation theme for Hugo](https://github.com/gpospelov/hugo-theme-learn)
* [docDoc - Documentation theme for Hugo](https://themes.gohugo.io/docdock/)
* [Startboostrap Clean Blog](https://themes.gohugo.io/startbootstrap-clean-blog/)

#### Site layout

This theme expects a relatively standard Hugo blog/personal site layout:

```
.
└── content
    ├── post
    |   ├── release-1.8.0.md
    |   ├── release-1.9.0.md
    ├── documentation
    |    ├── _index.md
    |    ├── overview.md
    |    ├── gestarted.md
    └──── playground
            ├── _index.md
            ├── labels-and-icons.md
            ├── basic-markdown
```

#### Limitations

* Every directory with new branch should contain `_index.md`
* Weight of page specified in _index.md is actually for one level up

#### Unteresting facts

* `scgdoc` theme contains 800 lines of `go+html` code
* Main `theme.css` has 700 lines of code

#### Useful links

During theme development following links were found to be very useful

* [Embedding partials in markdown using a shortcode](https://gohugohq.com/partials/shortcode-embedding-partials-from-content-markdown-files/)
* [Code tabs widgets](https://discourse.gohugo.io/t/code-tabs-widget/975/5)
* [Bootstrap Tabs as Hugo Shortcodes](https://stackoverflow.com/questions/46207512/bootstrap-tabs-as-hugo-shortcodes)
* [Align images side by side in html](https://stackoverflow.com/questions/24680030/align-images-side-by-side-in-html)
* [How to Align Images Side-by-Side Using HTML](https://owlcation.com/stem/how-to-align-images-side-by-side)
* [How to change image size Markdown?](https://stackoverflow.com/questions/14675913/how-to-change-image-size-markdown)
* [Markdown and image alignment](https://stackoverflow.com/questions/255170/markdown-and-image-alignment#answer-5054055)
* [CSS with caption float left](https://www.w3schools.com/css/tryit.asp?filename=trycss_float3)
* [Leverage shortcodes in Hugo](https://jpescador.com/blog/leverage-shortcodes-in-hugo/)
* [Hugo Easy Gallery](https://www.liwen.id.au/heg/)
* [About permalinks](https://github.com/gohugoio/hugo/issues/1768)
* [Centering images in Hugo](http://www.ebadf.net/2016/10/19/centering-images-in-hugo/)
* [Responsive images in Hugo](https://www.adamwills.io/blog/responsive-images-hugo/)
* [Hugo Shortcode to Show Multiple Images](http://yoshiharuyamashita.com/post/hugo-shortcode-to-show-multiple-images/)
* [Formatting Pygments linenos with Jekyll and Bootstrap](https://monicagranbois.com/blog/webdev/formatting-code-with-pygments-and-jekyll/)
* [Google Prettify with Bootstrap: Line Numbers Not Showing](https://stackoverflow.com/questions/11664850/google-prettify-with-bootstrap-line-numbers-not-showing)
* [Pygment styles demo](http://pygments.org/demo/6640643/?style=native)
* [Pygment css](https://github.com/richleland/pygments-css)
* [Small hortcode collection](https://github.com/richleland/pygments-css)
* [More shorcodes](https://github.com/gohugoio/hugo/tree/master/docs/layouts/shortcodes)
* [Font awesome icons](http://astronautweb.co/snippet/font-awesome/)
* [Hugo as documentation tool](https://discourse.gohugo.io/t/hugo-as-a-documentation-tool/112/39)
* [Convert an existing site to Hugo](http://whipperstacker.com/2016/09/22/convert-an-existing-site-into-hugo/)
* [Moving Wordpress to Hugo](https://blog.philipphauer.de/moving-wordpress-hugo/)

##### Latex in Hugo

* [Setting MathJax](https://divadnojnarg.github.io/blog/mathjax/)
* [Better Tex in Hugo](http://www.latkin.org/blog/2016/08/07/better-tex-math-typesetting-in-hugo/)
* [How to use Latex expressions in blogdown?](https://github.com/rstudio/blogdown/issues/36)
