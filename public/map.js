var map;
function initMap() {
  var myLatLng = {lat: 32.7765, lng: -79.9311};

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.7765, lng: -79.9311},
    zoom: 4
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Charleston'
  });
}
$('form').on('submit', function(event){
  event.preventDefault();
  codeAddress();
  var restroom = {
    facility:"",
    address: "",
    latitude: num,
    longitude: num,
    access: num,
    capacity: num,
    cleanliness: num,
  }
})

function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        console.log(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }