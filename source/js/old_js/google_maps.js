var map;

function initMap() {
  'use strict';

  var styles = [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#f7efe1"
        }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

  var mapOptions = {
    zoom: 14,
    scaleControl: false,
    scrollwheel: false,
    center: new google.maps.LatLng(55.694732, 37.530343),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.694732, 37.530343),
    map: map
    // icon: 'map_marker.svg'
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}