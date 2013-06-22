var currLat = 1;
var currLon = 1;
var currAlt = 1;
var currAcc = 1;
AR.context.onLocationChanged = function(lat, lon, alt, acc) {
                   currLat = lat;
                   currLon = lon;
                   currAlt = alt;
                   currAcc = acc;
}