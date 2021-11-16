function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16.5,
    mapTypeId: 'satellite',
    mapId: '80cddb6fa48bfbbc',
    center: {
      lat: 51.2513006322912,
      lng: -0.14155799801976798
    }
  });

  /* Catch Labels */

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  /* Catch Locations */

  var locations = [{
      lat: 51.25296363159436,
      lng: -0.14135794019545625
    },
    {
      lat: 51.252897020134256,
      lng: -0.1401201886901425
    },
    {
      lat: 51.25283346944166,
      lng: -0.13936002198743108
    },
    {
      lat: 51.252722035880154,
      lng: -0.1393782198569834
    },
    {
      lat: 51.25237583175535,
      lng: -0.1386050788321077
    },
    {
      lat: 51.252216809329596,
      lng: -0.1385647817841912
    },
    {
      lat: 51.25206943895661,
      lng: -0.13802931365951152
    },
    {
      lat: 51.2508916459689,
      lng: -0.13946186994994264
    },
    {
      lat: 51.250784728048004,
      lng: -0.1402440891900723
    },
    {
      lat: 51.25124321324701,
      lng: -0.14031677254312755
    },
    {
      lat: 51.25038753671867,
      lng: -0.13925534490956393
    },
    {
      lat: 51.249981846586465,
      lng: -0.14514039643819948
    },
    {
      lat: 51.25014256953351,
      lng: -0.14525968951036178
    },
    {
      lat: 51.250288324439644,
      lng: -0.14551359942481923
    },
    {
      lat: 51.25097999386726,
      lng: -0.14436633453427894
    },
    {
      lat: 51.250884553252945,
      lng: -0.1446132478755658
    },
    {
      lat: 51.25081762702781,
      lng: -0.14437598817494982
    },
    {
      lat: 51.25173229419499,
      lng: -0.14381991684399978
    },
    {
      lat: 51.25172503441158,
      lng: -0.1436748286164524
    },
    {
      lat: 51.25172993535885,
      lng: -0.14393450535930694
    },

  ];

  /* Lake location Marker */

  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "#fe6723",
    fillOpacity: 0.7,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };

  new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "Dream Lake Fishery"
  });

  /* Catch location Markers */

  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

/* Unused/Unfinished Code

  var clusterStyles = [
    {
      textColor: 'white',
      url: 'path/to/smallclusterimage.png',
      height: 50,
      width: 50
    },
   {
      textColor: 'white',
      url: 'path/to/mediumclusterimage.png',
      height: 50,
      width: 50
    },
   {
      textColor: 'white',
      url: 'path/to/largeclusterimage.png',
      height: 50,
      width: 50
    }
  ];

/* Unused/Unfinished Code */

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}