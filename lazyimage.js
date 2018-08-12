/*! 
* LazyImage lazyimage.js https://github.com/joscelyn56/LazyImage
* Version - 0.0.1
* Licensed under the MIT license - http://opensource.org/licenses/MIT
*
* Copyright (c) 2018 Okwu Joscelyn Kinikachi
*/
(function(){

	window.addEventListener('load', function(){
		const images = document.getElementsByClassName('lazy-img');

		for(var i = 0; i < images.length; i++){
			var image = images[i];
			image.addEventListener('load', LazyImage(image), false);
		}
	});

	function LazyImage(image){
		const imageParent = image.parentElement;
		var imageHolder = imageParent;
		if(imageParent.nodeName == 'A'){
			imageHolder = image.parentElement.parentElement;
		}

	    let loaderCover = document.createElement('div');
	    loaderCover.className = 'loader-cover';
	    let loader = document.createElement('div');
	    loader.className = 'loader';
	    loaderCover.appendChild(loader);

	    imageHolder.appendChild(loaderCover)

	    let img_width = 0;
	    let img_height = 0;

		let attach = image.getAttribute('data-lazy');

    	imageHolder.style.textAlign = "center";
    	imageHolder.style.position = "relative";

        let parent_width = imageParent.offsetWidth;
        let parent_height = imageHolder.offsetHeight;
        let image_max_width = parent_width;
        let image_max_height = parent_height;

        var screenWidth = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;

		let img = new Image();
		img.onload = function() {
			
			if (this.width >= image_max_width && this.height >= image_max_height) {
	            img_width = '100%';
	            img_height = image_max_height;
	            if(imageParent.nodeName !== 'A'){
		            image.style.width = img_width;
		            image.style.height = img_height;
		        }
	        } else{
				if(imageParent.nodeName == 'A'){
				    image.style.margin = 'auto';
					if(screenWidth > 491){
		        		image.style.position = 'absolute';
					    image.style.top = 0;
					    image.style.bottom = 0;
					    image.style.left = 0;
					    image.style.right = 0;
					}else{
						image.style.marginBottom = '10px';
					}
	    		}
    			image.style.width = 'unset';
	        }

	   		imageHolder.removeChild(imageHolder.querySelector('.loader-cover'));
	   		image.removeAttribute('data-lazy');
	   		image.removeAttribute('class');
	   		image.src = attach;	
	   	}
	    img.src = attach;
    }
})()
