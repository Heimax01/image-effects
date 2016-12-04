# Image Effects with CSS

[See it in action](http://tools.css-tricks.ir/image-effects/)

## How it works
Using one or more newer CSS properties (`background-blend-mode`, `mix-blend-mode`, or `filter`) gives us a surprising amount of possibilities to manipulate a single source image.

The unedited background-image manipulated using CSS.

In most of these effects the single source image url is repeated one or more times and blended with itself using CSS blend modes (multiply, overlay, screen, difference, etc.)

In some of these effects, the CSS `filter` property is used to further refine the output. Functions like `grayscale()`, `brightness()`, and `contrast()` can and should be tweaked to achieve a better result for images you use.

These effects should be used as a progressive enhancement.
By default, the source image is displayed without any effects. When CSS `@supports` detects support for the required CSS properties and values for an individual effect, then the effect will be enabled. This amounts to a precise, native, and lightweight feature detection.
