# LazyImage
This is Javascript and CSS plugin that allows for loading images when the site is fully loaded

# Setup
Include the CSS and JS files
```css
<link href="lazyimage.css" rel="stylesheet">
<script src="lazyimage.js"></script>
```

# Usage
Create a div tag and put an img in inside and give the img tag a class attribute with value "lazy-img"
```html
<div class="img">
  <a>
    <img class="lazy-img" />
  </a>
</div>
```
Style div using
```css
<style>
.img{
  min-width: width-px;
}
img > a > img {
    height: 100%;
    width: 100%;
}
</style>
```

Include the image source in the img tag using data-lazy attribute
```html
<img class="lazy-img" data-lazy="image-src"/>
```

Voila!!! your image is done and ready to go
