var map;

$(function() {
  var center = { lat: 35.7, lng: 139.7 };
  var gmap_options = {
    center: center,
    zoom: 15,
    scaleControl: true
  };
  map = new google.maps.Map(document.getElementById("gmap"), gmap_options);
  map.addListener("click", function (e) {
    console.log(e.latLng.lat(), e.latLng.lng());
  });
});
