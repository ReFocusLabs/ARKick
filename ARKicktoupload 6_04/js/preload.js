var arkickpreload = new function () {
		
	this.init = function () {
		
		/////////////////PRELOADING IMAGES///////////////////////
		

		var imageArray = [];

		/*for(var j=0; j<category.response.categories.length;j++){
			imageArray.push('img/category/'+j+'.png');	
			for(var i=0; i<category.response.categories[j].categories.length;i++){
				imageArray.push('img/category/'+j+'.'+i+'.png');
				for(var k=0; k<category.response.categories[j].categories[i].categories.length;k++){
					imageArray.push('img/category/'+j+'.'+i+'.'+k+'.png');
				}			
			}
		}*/
		imageArray.push('img/category/0.png');
		imageArray.push('img/category/0.0.png');
		imageArray.push('img/sm1.png');
		imageArray.push('img/bm1.png');
		imageArray.push('img/north.png');
		imageArray.push('img/radar.png');
		imageArray.push('img/plus1.png');
		imageArray.push('img/minus1.png');
		imageArray.push('img/back1.png');
		imageArray.push('img/refresh1.png');
		imageArray.push('img/delete1.png');
		imageArray.push('img/info1.png');
		imageArray.push('img/traffic11.png');
		imageArray.push('img/traffic21.png');
		imageArray.push('img/traffic31.png');
		imageArray.push('img/traffic41.png');
		imageArray.push('img/mode1.png');

		imageCache.pushArray(imageArray, loadImageEvent, loadAllEvent);

		////////////////////////////////////////////////////////
		
	}
	
	function loadImageEvent() {
		
	}
	
	function loadAllEvent() {
		//perform what is to be done when the images are loaded
	
	
	}

}
	//if you want to show images 
	//$('#images').html(s);
	//where var s ='<img src="images/dnfmomd/' + num + '.jpg" class="notShown" />';
		

$(window).load(arkickpreload.init)
