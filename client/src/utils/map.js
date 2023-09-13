export default  function getlocation(){
     
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(showPos, showErr); 
    }
    else{
        alert("Sorry! your Browser does not support Geolocation API")
    }
} 
//Showing Current Poistion on Google Map
function showPos(position){ 
    var latt = position.coords.latitude; 
   var long = position.coords.longitude; 
    var lattlong = new google.maps.LatLng(latt, long); 
    var myOptions = { 
        center: lattlong, 
        zoom: 15, 
        mapTypeControl: true, 
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL} 
    } 
    var maps = new google.maps.Map(document.getElementById("demo"), myOptions); 
    var markers = 
    new google.maps.Marker({position:lattlong, map:maps, title:"You are here!"}); 
} 

//Handling Error and Rejection
     function showErr(error) {
      switch(error.code){
      case error.PERMISSION_DENIED:
     alert("User denied the request for Geolocation API.");
      break;
     case error.POSITION_UNAVAILABLE:
     alert("USer location information is unavailable.");
    break;
    case error.TIMEOUT:
    alert("The request to get user location timed out.");
    break;
   case error.UNKNOWN_ERROR:
    alert("An unknown error occurred.");
    break;
   }
}       