+++
title = "Resource image"
weight = 50
+++

## Resource image

Tutorial demonstrates how to resize an image on Hugo site before inserting it in html.
Image should reside in content/media.

This technique is applied when original images are large but have to be embedded as small one to reduce page load time (e.g. in the context of image gallery).

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
