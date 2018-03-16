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

**File is located in static directory, full path should be specified.**

{{% highlightfile file="/static/files/code_snippet.py" language="python" %}}

**File is located in same directory. No path is required.**

{{< highlightfile file="another_code_snippet.py">}}

#### Highlight the file and mark certain line numbers.

Same as in the example above with additional highlighting of selected lines.

{{< highlightfile file="another_code_snippet.py" opt="linenos=table,hl_lines=5 6 7">}}
