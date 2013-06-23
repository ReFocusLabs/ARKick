var modelist = new Array();
var temp, cond, code=0, maxplaces= 20, fblikes;
var d = new Date();
var hrs = d.getHours();
uri="http://api.openweathermap.org/data/2.5/weather?lat=18.53&lon=73.85&cnt=1&APPID=2385a4ba2769df3c1750f3123dfd1105&units=metric"; 
jQuery.get(uri,function(r){
  cond = r.weather[0].id;
  calculate();
},"jsonp");
//var indoor= [[4d4b7104d754a06370d81259,]]
//weather initially 0 | 2,3,,6,9 recommend indoor places| If 9 recommend user to stay indoor since extreme weather conditions | Sidekick mode will only filter if the no. of places we fetched is greater than 5
//nop is Number of places
//if (nop >= 6 )
 // {//20 places max5
    //5-10 from FB
    //5 max from foursquare trending
    // 5 from recommended places, it also has a contextual engine
    // 10 based on our Sidekick engine
   if(hrs<20){
   if (temp >= 38 || temp <= 15 || cond == 2 || cond == 3 || cond == 5 || cond == 6 || cond == 9){
       //say 'The weather looks harsh'
        // if (weather == 9)
        //   say 'we recommend you to stay at home'
        // else say 'but lets look for indoor places
        // Excluded places=[0.8,0.15,0.16,0.17,0.19,1.12,4]  
         modelist = ['4fceea171983d5d06c3e9823', '4bf58dd8d48988d1e1931735', '4bf58dd8d48988d1e2931735', '4bf58dd8d48988d1e4931735', '5032792091d4c4b30a586d5c', '4bf58dd8d48988d17f941735', '4bf58dd8d48988d18f941735', '4bf58dd8d48988d190941735', '4bf58dd8d48988d192941735', '4bf58dd8d48988d191941735', '4bf58dd8d48988d1df931735', '4bf58dd8d48988d109941735', '4bf58dd8d48988d149941735', '4bf58dd8d48988d1fd941735'];

    }
   else{
    // say 'Weather looks awesome, lets find you some nice places'
        modelist = ['5032829591d4c4b30a586d5e', '4e39a956bd410d7aed40cbc3', '4bf58dd8d48988d1e3941735', '4bf58dd8d48988d1e5941735', '4bf58dd8d48988d15b941735', '4bf58dd8d48988d15e941735'];
        

        }
        
   }
    else{
        modelist = ['4bf58dd8d48988d116941735', '4bf58dd8d48988d117941735', '4bf58dd8d48988d11e941735', '4bf58dd8d48988d119941735', '4bf58dd8d48988d1d5941735', '4bf58dd8d48988d120941735', '4bf58dd8d48988d121941735', '4bf58dd8d48988d11f941735', '4bf58dd8d48988d11a941735', '4bf58dd8d48988d11d941735','4bf58dd8d48988d1c7941735', '4bf58dd8d48988d110941735', '4bf58dd8d48988d16e941735', '4bf58dd8d48988d14e941735', '4bf58dd8d48988d1df931735'];
     // var restro = [];
        //Include these places = [3] and [2] with the condition open now
    }
  
//}
function calculate(){
  code = cond/100;
  code = Math.floor(code);
  
}
