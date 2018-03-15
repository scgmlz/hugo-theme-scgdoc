+++
title = "Resource image"
weight = 50
showimages = true
showresizedimages = true
+++

## Resource image

Tutorial demonstrates how to resize an image on Hugo site before inserting it in html.


This technique is applied when original images are large but have to be embedded as small one to reduce page load time (e.g. in the context of image gallery).

Materials used:

* [Page resources.](https://gohugo.io/content-management/page-resources/)
* [Image processing.](https://gohugo.io/content-management/image-processing/)
* [Hugo resource image example.](https://github.com/talves/hugo-resource-images)
* [Hugo image resize on Stack Overflow #1.](https://stackoverflow.com/questions/48063067/resize-image-in-hugo-v-0-32-x-in-markdown)
* [Hugo image resize on Stack Overflow #2.](https://stackoverflow.com/questions/48213883/image-processing-outside-bundles/48215030#48215030)


### image-resize shortcode

**Image resize with screwed aspect ratio**

{{< image-resize "sample-view.png" "100x200" >}}

**Resize to a width of 300px with preserved aspect ratio**

{{< image-resize "sample-view.png" "300x" >}}

**Resize to a height of 300px with preserved aspect ratio**

{{< image-resize "sample-view.png" "x300" >}}

### imgproc shortcode

**Resize to a width of 500px with preserved aspect ratio**

{{< imgproc "sample-view.jpg" Resize "700x" >}}

**Image quality reduced (works on jpeg, quality 1-100)**

{{< imgproc "sample-view.jpg" Resize "700x q1" >}}

**Fill mode: left**

Resize and crop the image to match the given dimensions. Both height and width are required.

{{< imgproc "sample-view.png" Fill "90x120 left" >}}

**Fill mode: right**

Resize and crop the image to match the given dimensions. Both height and width are required.

{{< imgproc "sample-view.png" Fill "90x120 right" >}}

**Fill mode with smart cropping**

{{< imgproc "sample-view.png" Fill "200x200 smart" >}}

**Fit mode**

Scale down the image to fit the given dimensions while maintaining aspect ratio. Both height and width are required.

{{< imgproc "sample-view.png" Fit "100x100" >}}
