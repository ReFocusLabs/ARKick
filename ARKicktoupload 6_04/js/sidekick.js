        
            
                //user current locations
               
                var radius = 2000;
                var timereq = 0;
                // Create new images, which will be loaded right away
                /*var markerimg = new AR.ImageResource("img/marker.png", {onError: SKerrorLoadingImage});
                radarImage = new AR.ImageResource("img/radar.png", {onError: SKerrorLoadingImage});
                northIndicator = new AR.ImageResource("img/north.png", {onError: errorLoadingImage});
                */
                var clientId = '3JLCFT4CFRGATLFWPOTOCKA41HPLBZWCNBZF21MP5Q4E3AY2';
                var clientSec = 'HT50OBCWT5D2HURLEFR0EROAX0DCCICFPJ0FVB4H0I5RPXHT';

              
                var SKselectedObject = null;
                var SKjsonObject = new Array();
           

                 //function that gets called when the displayed poi bubble is clicked
                //sends the id of the selected poi to the native app
                function SKgenerateOnPoiBubbleClickFunc(id)
                {
                    return function()
                    {
                        //document.location = "architectsdk://opendetailpage?id="+id;       
                    }
                }
                
                
                // creates a property animation
                function SKcreateOnClickAnimation(imageDrawable)
                {
                    var anim = new AR.PropertyAnimation( imageDrawable, 'scaling', 1.0, 1.1, 750, new AR.EasingCurve(AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC, {amplitude : 2.0}) );
                    return anim;
                }
                
                
                // creates a function for assigning to label's and imageDrawable's onClickTrigger
                function SKcreateClickTrigger(id) 
                {
                    return function() 
                    {
                       
                        if(SKselectedObject != null)
                        {
                            // reset the property animation
                            SKselectedObject.animation.stop();
                            SKselectedObject.arLabel.style.textColor = '#FFFFFF';
                        
                            SKselectedObject.img.scaling = 1.0;
                            SKselectedObject.poiObj.renderingOrder = 0;
                        }
                        
                        // set a new select status for the current selected poi
                        SKselectedObject = SKjsonObject[id];
                        SKselectedObject.arLabel.style.textColor = '#FFFF00';
                        SKselectedObject.poiObj.renderingOrder = 1;
                        
                        // start the assigned animation
                        SKselectedObject.animation.start();
                        var directionurl = 'maps.googleapis.com/maps/api/directions/json?origin='+currLat+','+currLon+'&destination='+selectedObject.lat+','+selectedObject.lon+'&sensor=false';
                        document.getElementById("timetxt").innerHTML = "Testing";
                        jQuery.get(directionurl,function(r){
                               
                              document.getElementById("timetxt").innerHTML = r.routes[0].legs[0].duration.text;  
                        });
                        return true;
                    }
                }
                
            
                function SKcreatePOI(idarray){
                    
                makevisible(7);
                 
                   
                AR.radar.background = radarImage;
                AR.radar.positionX = 0.025; 
                AR.radar.positionY = 0.025; 
                AR.radar.width = 0.4; 
                
                AR.radar.centerX = 0.5; 
                AR.radar.centerY = 0.5; 
                AR.radar.radius = 0.3;
                
                AR.radar.northIndicator.image = northIndicator;
                AR.radar.northIndicator.radius = 0.0;
                AR.radar.enabled = true;
                var radarCircle = new AR.Circle(0.05, {style: {fillColor: '#83ff7b'}});
                   /////Parsing begins from here
                var k = 0;
                for(i=0;i<idarray.length;i++){    
                
                var url='https://api.foursquare.com/v2/venues/search?ll='+currLat+','+currLon+'&categoryId='+idarray[i]+'&radius='+radius+'&intent=browse&client_id='+clientId+'&client_secret='+clientSec+'&v=21030621'; 
                   
                jQuery.get(url,function(r){
                       
                   for(var i = 0; i < r.response.venues.length; i++)
                    {
                        var obj = new Object(); 
                        var poidrawables = new Array();
                        var name =r.response.venues[i].name;
                        if(name.length > 18){
                            var cropname = name.substring(0, 18) + "..";
                        }else{
                            var cropname = name;
                        }
                        var poiImage;
                        poiImage = markerimg;
                        ///Changing Y Offsets randomly
                         var rand = Math.floor(Math.random() * 5) + 1;
                        
                        var yoff;
                        if(rand == 0){
                            yoff = -1;
                        }else if(rand == 1){
                            yoff = 1;
                        }else if(rand == 2){
                            yoff = 2;
                        }else if(rand == 3){
                            yoff = -2
                        }
                        else{
                            yoff = 0;
                        }
                        
                        ///
                                            
                        var img = new AR.ImageDrawable(poiImage, 3.0,{zOrder: 1,offsetX : 0.8 ,offsetY:yoff,
                                                       triggers: { 
                                                       onClick:
                                                       createClickTrigger(i)}}
                                                       );
                        
                        
                        var label = new AR.Label(cropname,0.8, {
                            zOrder:2,
                            offsetY : 0.6+yoff, 
                            offsetX : -3.5 ,
                            triggers:{
                                onClick: createClickTrigger(i)
                            } ,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.LEFT,
                            style : {
                                fontStyle: AR.CONST.FONT_STYLE.BOLD,
                                textColor : '#FFFFFF',
                                backgroundColor: '#FFFFFF00'
                            }});
                        
                        obj.arLabel = label;
                        var lat = r.response.venues[i].location.lat;
                        var lon = r.response.venues[i].location.lng;
                        var geoLoc = new AR.GeoLocation(lat,lon);
                        var currentloc = new AR.GeoLocation(currLat,currLon);
                        var distance = currentloc.distanceTo(geoLoc);
                        obj.distance = distance;
                        if(distance>1000){
                            distance = distance / 1000;
                            distance = Math.round(distance,3);
                            var distancetxt = distance+'km';
                        }else{
                            distance = Math.round(distance,1);
                            var distancetxt = distance+'m';
                            
                        }
                        
                         var distancelabel = new AR.Label(distancetxt,0.65, {
                            zOrder:2,
                            offsetY : -0.4+yoff, 
                            offsetX : -3.5 , 
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.LEFT,
                            style : {
                                fontStyle: AR.CONST.FONT_STYLE.BOLD,
                                textColor : '#00FFFF',
                                backgroundColor: '#FFFFFF00'
                            }});
                         obj.distancelabel = distancelabel;
                       
                      
                      
                                                                         
                        obj.animation = createOnClickAnimation(img);
                        obj.img = img;
                       
                        poidrawables.push(label);
                        poidrawables.push(img);
                        poidrawables.push(distancelabel);
                        
                        obj.poiObj = new AR.GeoObject(geoLoc, {drawables: {cam: poidrawables,radar:radarCircle}});
                       
                        obj.name = r.response.venues[i].name;
                        obj.id = r.response.venues[i].id;
                       
                        SKjsonObject[k]=obj;
                        k++;

                        if(i>3){
                            i=r.response.venues.length;
                        }
                        
                        
                    }
                    
                },"jsonp");
                   
                }   
                   
                }
                
                // Called if loading of the image fails.
                function SKerrorLoadingImage() {
                    // set error message on HUD
                    //document.getElementById("statusElement").innerHTML = "Unable to load image!";
                }
                
                
                // hide bubble and reset the selected poi if nothing was hit by a display click
                AR.context.SKonScreenClick = function()
                {
                    // hide the bubble
                    //document.getElementById("footer").style.display = 'none';
                    
                    // and reset the current selected poi
                    if(SKselectedObject != null)
                    {
                        // reset the property animation
                        SKselectedObject.animation.stop();
                        
                        SKselectedObject.arLabel.style.textColor = '#FFFFFF';
                        SKselectedObject.img.scaling = 1.0;
                        SKselectedObject.poiObj.renderingOrder = 0;
                        SKselectedObject = null;
                    }
                }
