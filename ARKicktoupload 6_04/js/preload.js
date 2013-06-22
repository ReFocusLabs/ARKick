var arkickpreload = new function () {
		
	this.init = function () {
		
		/////////////////PRELOADING IMAGES///////////////////////
		

		var imageArray = [];

		for(var j=0; j<category.response.categories.length;j++){
			imageArray.push('img/category/'+j+'.png');	
			for(var i=0; i<category.response.categories[j].categories.length;i++){
				imageArray.push('img/category/'+j+'.'+i+'.png');
				for(var k=0; k<category.response.categories[j].categories[i].categories.length;k++){
					imageArray.push('img/category/'+j+'.'+i+'.'+k+'.png');
				}			
			}
		}
			
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
