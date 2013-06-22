var arkickpreloadhome = new function () {
		
	this.init = function () {
		
		/////////////////PRELOADING IMAGES///////////////////////
		var imageArray = [];
		
		imageArray.push('img/center.png');
		imageArray.push('img/browserButton.png');
		imageArray.push('img/sidekickButton.png');		
		imageArray.push('img/speakButton.png');

		imageCache.pushArray(imageArray, loadImageEvent, loadAllEvent);

		////////////////////////////////////////////////////////
		
	}
	
	function loadImageEvent() {
		
	}
	
	function loadAllEvent() {
		//perform what is to be done when the images are loaded
		$('#centerButtonDiv').html('<img id="centerloading" src="img/center.png">');
		$('#browserButtonDiv').html('<img id="browserButton" src="img/browserButton.png">');
		$('#sidekickButtonDiv').html('<img id="sidekickButton" src="img/sidekickButton.png">');
		$('#speakButtonDiv').html('<img id="speakButton" src="img/speakButton.png">');
		

	
	}

}
	//if you want to show images 
	//$('#images').html(s);
	//where var s ='<img src="images/dnfmomd/' + num + '.jpg" class="notShown" />';
		

$(window).load(arkickpreloadhome.init)
