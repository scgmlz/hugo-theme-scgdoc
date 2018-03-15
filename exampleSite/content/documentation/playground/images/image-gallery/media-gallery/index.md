+++
title = "Media gallery"
weight = 30
showimages = true
showresizedimages = true
+++

### Media gallery

This is a special gallery were source images are automatically resized on Hugo side
to get gallery's thumbnails. Check frontmatter of this file which is not standard (`showimages=true`).

{{< galleryscg class="tz-gallery">}}
{{< imgproc src="instrument-view.png" command="Resize" options="320x" caption="Instrument view" >}}
{{< imgproc src="sample-view.png" command="Resize" options="320x" caption="Sample view" >}}
{{< imgproc src="job-view.png" command="Resize" options="320x" caption="Job view" >}}
{{< imgproc src="job-view-and-projections.png" command="Resize" options="320x" caption="Projections view" >}}
{{< imgproc src="import-view-and-masks.png" command="Resize" options="320x" caption="Mask editor" >}}
{{< imgproc src="fit-view.png" command="Resize" options="320x" caption="Fit view" >}}
{{< /galleryscg >}}
