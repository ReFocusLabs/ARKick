var homescreen = document.getElementById("homescreen");             // 1
var catscreen = document.getElementById("catscreen");               // 2
var subcatscreen = document.getElementById("subcatscreen");         // 3
var subsubcatscreen = document.getElementById("subsubcatscreen");   // 4
var browsermode = document.getElementById("browsermode");           // 5    
var infoscreen = document.getElementById("infoscreen");             // 6
var sidekickmode = document.getElementById("sidekickmode");         // 7
var settings = document.getElementById("settings");                 // 8
var browserButton = document.getElementById("browserButtonDiv");   
var sidekickButton = document.getElementById("sidekickButtonDiv");  
var speakButton = document.getElementById("speakButtonDiv");        
var selcat =-1; 
var selsubcat =-1;
var selsubsubcat =-1;
function makevisible(screen){

    if(screen == 1){
        homescreen.style.visibility="visible";
        catscreen.style.visibility="hidden";
        subcatscreen.style.visibility="hidden";
        subsubcatscreen.style.visibility="hidden";
        browsermode.style.visibility="hidden";
        infoscreen.style.visibility="hidden";
        sidekickmode.style.visibility="hidden";
        settings.style.visibility="hidden";
        
    }
    else if(screen == 2){
        homescreen.style.visibility="hidden";
        catscreen.style.visibility="visible";
        subcatscreen.style.visibility="hidden";
        subsubcatscreen.style.visibility="hidden";
        browsermode.style.visibility="hidden";
        infoscreen.style.visibility="hidden";
        sidekickmode.style.visibility="hidden";
        settings.style.visibility="hidden";
        
    }
    else if(screen == 3){
        homescreen.style.visibility="hidden";
        catscreen.style.visibility="hidden";
        subcatscreen.style.visibility="visible";
        subsubcatscreen.style.visibility="hidden";
        browsermode.style.visibility="hidden";
        infoscreen.style.visibility="hidden";
        sidekickmode.style.visibility="hidden";
        settings.style.visibility="hidden";
        
    }
    else if(screen == 4){
        homescreen.style.visibility="hidden";
        catscreen.style.visibility="hidden";
        subcatscreen.style.visibility="hidden";
        subsubcatscreen.style.visibility="visible";
        browsermode.style.visibility="hidden";
        infoscreen.style.visibility="hidden";
        sidekickmode.style.visibility="hidden";
        settings.style.visibility="hidden";
        
    }
    else if(screen == 5){
        homescreen.style.visibility="hidden";
        catscreen.style.visibility="hidden";
        subcatscreen.style.visibility="hidden";
        subsubcatscreen.style.visibility="hidden";
        browsermode.style.visibility="visible";
        infoscreen.style.visibility="hidden";
        sidekickmode.style.visibility="hidden";
        settings.style.visibility="hidden";
        
    }
    else if(screen == 6){
        homescreen.style.visibility="hidden";
        catscreen.style.visibility="hidden";
        subcatscreen.style.visibility="hidden";
        subsubcatscreen.style.visibility="hidden";
        browsermode.style.visibility="hidden";
        infoscreen.style.visibility="visible";
        sidekickmode.style.visibility="hidden";
        settings.style.visibility="hidden";
        
    }
    else if(screen == 7){
        homescreen.style.visibility="hidden";
        catscreen.style.visibility="hidden";
        subcatscreen.style.visibility="hidden";
        subsubcatscreen.style.visibility="hidden";
        browsermode.style.visibility="hidden";
        infoscreen.style.visibility="hidden";
        sidekickmode.style.visibility="hidden";
        settings.style.visibility="visible";
        
    }
}


browserButtonDiv.onmouseup=function(){
    makevisible(2);
    //$("#catlist ul").append('<li><a><span class="tab">Message Center</span></a></li>');

    
}
sidekickButtonDiv.onmouseup=function(){
    makevisible(7);

}
speakButtonDiv.onmouseup=function(){


}


 
$("#catlist li").click(function(e){
    e.preventDefault();
    var index = $("#catlist li").index(this);
    selcat =index;
    makevisible(3)
    for(var i=0; i<category.response.categories[selcat].categories.length;i++){
               var name = category.response.categories[selcat].categories[i].name;
               $("#subcatscreen ul").append('<li><a href="#"><a class="avatar"><img src="img/category/'+selcat+'.'+i+'.png" alt=""></a><h2>'+name+'</h2></a></li>');           
    }
    $("#subcatscreen li").click(function(){
    var index = $("#subcatscreen li").index(this);
    selsubcat = index;
    if(category.response.categories[selcat].categories[selsubcat].categories.length == 0){
        makevisible(5);
        getplaces();
    }
    else{
        makevisible(4)
         for(var j=0; j<category.response.categories[selcat].categories[selsubcat].categories.length;j++){
                   var name = category.response.categories[selcat].categories[selsubcat].categories[j].name;
                  
                   $("#subsubcatscreen ul").append('<li><a href="#"><a class="avatar"><img src="img/category/'+selcat+'.'+selsubcat+'.'+j+'.png" alt=""></a><h2>'+name+'</h2></a></li>');           
        }
    }
    $("#subsubcatscreen li").click(function(){
    var index = $("#subsubcatscreen li").index(this);
    selsubsubcat = index;
        makevisible(5);
        createPOI();
    });
    
});
});

function displayinfo(id){
    var id='40a55d80f964a52020f31ee3';
    var clientId = '3JLCFT4CFRGATLFWPOTOCKA41HPLBZWCNBZF21MP5Q4E3AY2';
    var clientSec = 'HT50OBCWT5D2HURLEFR0EROAX0DCCICFPJ0FVB4H0I5RPXHT';
    url='https://api.foursquare.com/v2/venues/'+id+'?client_id='+clientId+'&client_secret='+clientSec+'&v=21030621';
    console.log(url);
    jQuery.get(url,function(r){
        
        var phone = r.response.venue.contact.formattedPhone;
        var name = r.response.venue.name;
        var address = r.response.venue.location.address;
        var city = r.response.venue.location.city;
        var state = r.response.venue.location.state;
        var country = r.response.venue.location.country;
        var rating = r.response.venue.rating;
        var menu = r.response.venue.menu.mobileUrl;
        var photos = r.response.venue.photos.groups[0].items;
        var lat = r.response.venue.location.lat;
        var lon = r.response.venue.location.lng;

        if(photos.length == 0){

        }else if(photos.length ==1){
            imgurl = photos[0].prefix+'width'+photos[0].width+photos[0].suffix;
            $("#imgcat1").append('<img src="'+imgurl+'"></img>');
        }else if(photos.length ==2){
            imgurl = photos[0].prefix+'width'+photos[0].width+photos[0].suffix;
            $("#imgcat2").append('<img src="'+imgurl+'"></img>');
            imgurl = photos[1].prefix+'width'+photos[1].width+photos[1].suffix;
            $("#imgcat3").append('<img src="'+imgurl+'"></img>');
        }
        else if(photos.length >=3){
            imgurl = photos[0].prefix+'width'+photos[0].width+photos[0].suffix;
            $("#imgcon1").append('<img src="'+imgurl+'"></img>');
            imgurl = photos[1].prefix+'width'+photos[1].width+photos[1].suffix;
            $("#imgcon2").append('<img src="'+imgurl+'"></img>');
            imgurl = photos[2].prefix+'width'+photos[2].width+photos[2].suffix;
            $("#imgcon3").append('<img src="'+imgurl+'"></img>');
        }
        for(i=0;i<photos.length;i++){
           imgurl = photos[i].prefix+'width'+photos[i].width+photos[i].suffix;
           console.log(imgurl);
           
        }  
        if(name.length > 25){
            var cropname = name.substring(0, 25) + "..";
        }
        else{
            var cropname = name;
        }
        document.getElementById("name").innerHTML=cropname;
        document.getElementById("address").innerHTML=address;
        document.getElementById("citystate").innerHTML=city+', '+state;
        document.getElementById("country").innerHTML=country;
        document.getElementById("phonenum").innerHTML=phone;
        rating = Math.round(rating*10)/10;
        document.getElementById("ratingvalue").innerHTML=rating;

        ///showing map
        var latlng = new google.maps.LatLng(lat,lon);

        var options = {  
            zoom: 16,  
            center: latlng,  
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        var map = new google.maps.Map(document.getElementById('map_canvas'), options);

        marker1 = new google.maps.Marker({  
        position: new google.maps.LatLng(lat,lon),
        map: map
}); 
        ////       
        
    });

}