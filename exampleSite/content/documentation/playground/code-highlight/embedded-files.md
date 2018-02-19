+++
title = "Python code embedded"
weight = 20
+++

### Python code embedded

This tutorial explains how to embed Python code from a script, located in certain directory.

#### Highlight the file 

Approach demonstrates that `highlight` shortcode can be combined with `readfile` shortcode. 
File can be located in any directory, full path (starting from repo directory) should be specified.

{{< highlight python "linenos=table,hl_lines=5">}}
{{< readfile file="/static/files/code_snippet.py">}}
{{< /highlight >}}

#### Highlight the file  with custom shortcode: highlightfile.

Shortcode provides link to the file for download.
File can be located in any directory, full path should be specified.

{{% highlightfile file="/static/files/code_snippet.py" language="python" %}}

#### Highlight the file with custom shortcode: highlightloc (RECOMMENDED).

Shortcode provides link to the file for download.
File should be located in the same directory with markdown file which refers to that file.

{{< highlightloc file="another_code_snippet.py">}}

{{% alert theme="success" %}}
In the future we have to combine functionality of `highlighfile` and `highlightloc`.
{{% /alert %}}


#### Highlight the file with custom shortcode: highlightloc and line numbers.

Same as in the example above with additional highlighting of selected lines.

{{< highlightloc file="another_code_snippet.py" opt="linenos=table,hl_lines=5 6 7">}}
