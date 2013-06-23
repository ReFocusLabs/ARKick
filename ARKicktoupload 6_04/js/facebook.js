//facebook app id
appid='522639257803649';
channelurl='//decodingtech.com/arkick/channel.html';
var accessToken; 
var expiresin;
//function to get current userid
function getUser()
{
    FB.init({
        appId      : appid, // App ID
        channelUrl : channelurl, // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    });
    //check current user login status
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
             accessToken = response.authResponse.accessToken;
             expiresIn = response.authResponse.expiresIn;
            loadSideKick();
        } else {
            //user is not connected.
            FB.login(function(response) {
                if (response.authResponse) {
                    loadSideKick();
                } else {
                    //alert('User cancelled login or did not fully authorize.');
                }
            });
        }
    });
}
 
//function to load friends
function loadSideKick()
{
    //get array of friends
    FB.api('/me/likes',{fields: 'name,id'}, function(response) {
                var pageCount = response.data.length; 
                var pageName = response.data[0].name;
                var pageId = response.data[0].id;      
       
       //$('#stage').append('<p> Name: ' + pageCount + '</p>');
       //$('#stage').append('<p> Name: ' + pageName + '</p>');
       //$('#stage').append('<p> Name: ' + pageId + '</p>');
       var url = 'https://graph.facebook.com/'+pageId;
       $.getJSON(url, function(data) {
          console.log(data);
         // $('#stage').html('<p> Name: ' + data.category+ '</p>');
         console.log(data.category);
         SKcreatePOI(modelist[0]);
        });
        
      // $('#stage').html('<p> Name: ' + response.data[0].name + '</p>');
       
    });
}
 