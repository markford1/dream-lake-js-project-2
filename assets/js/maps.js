function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15.5,
    mapTypeId: 'satellite',
    mapId: '80cddb6fa48bfbbc',
    center: {
      lat: 51.25128133326796,
      lng: -0.14101412024338056
    }
  });

  /* Lake location Marker */

  var myMarker;
  var title = "Dream Lake Fishery svg Marker";

  myMarker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    label: {
      text: "Dream Lake Fishery",
      fontFamily: "sans-serif",
      color: "#fff",
      fontSize: "18px",
    },
    icon: {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z", // SVG for flag
      scale: 1.0,
      fillColor: "#fe6723",
      fillOpacity: 0.8,
      strokeWeight: 0.3,
      anchor: new google.maps.Point(0, 0),
      rotation: 0
    },
    animation: google.maps.Animation.DROP,
    title: "Dream Lake Fishery svg Marker"

  });

  /* Catch location Markers */

  var fishSVGmarker = {
    url: "assets/images/carp2.svg",
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(10, 16),
    scaledSize: new google.maps.Size(27, 27)
  };

  var fishMarkers;
  var title = "fish svg markers";

  fishMarkers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      map: map,
      icon: fishSVGmarker,
      label: {
        text: labels[i % labels.length],
        fontFamily: "sans-serif",
        color: "#fff",
        fontSize: "14px",
      },
      title: "fish svg markers"
    });
  })

  /* Cluster Marker */

  var markerCluster = new MarkerClusterer(map, fishMarkers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}

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

/* scale marker on different zooms */

google.maps.Map.event.addListener(map, 'zoom_changed', function() {
  var zoom = map.getZoom();
  var picon = myMarker.getIcon();

  if (zoom >= 16 && zoom <= 17 && picon.scale != 0.6) {
    picon.scale = 0.6;
    myMarker.setOptions({
      icon: picon
    });
  } else if (zoom == 18 && picon.scale != 0.8) {
    picon.scale = 0.8;
    myMarker.setOptions({
      icon: picon
    });
  } else if (zoom > 18 && picon.scale != 1.0) {
    picon.scale = 1.0;
    myMarker.setOptions({
      icon: picon
    });
  }
});


// /* Catch location Markers */
//
// // var markers = locations.map(function(location, i) {
// //   return new google.maps.Marker({
// //     position: location,
// //     icon: "assets/images/carp2.svg",
// //     opacity: 0.5,
// //     height: 30,
// //     width: 30,
// //     scaledSize: 0.01,
// //     label: labels[i % labels.length]
// //   });
// // });
//
// /* Cluster Marker + Options (unused code)(achieved the wrong thing) /*
//
//   mcOptions = {
//     styles: [{
//       height: 35,
//       width: 35,
//       url: "assets/images/carp2.svg"
//     }]
//   }
//
//   var mc = new MarkerClusterer(map, markers, mcOptions);
// }
//
// /* Cluster Styles  (unused/unfinished Code) /*
//
//   var clusterStyles = [
//     {
//       textColor: 'white',
//       url: 'path/to/smallclusterimage.png',
//       height: 50,
//       width: 50      },
//    {
//       textColor: 'white',
//       url: 'path/to/mediumclusterimage.png',
//       height: 50,
//       width: 50
//     },
//    {
//       textColor: 'white',
//       url: 'path/to/largeclusterimage.png',
//       height: 50,
//       width: 50
//     }
//   ];
//
// /* Unused/Unfinished Code */
