export const loadScript = (url) => {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
};
export const createMarker = (myVenue, map, infowindow) => {
  let contentString = `${myVenue.venue.name}`;

  // Create A Marker
  let marker = new window.google.maps.Marker({
    position: {
      lat: myVenue.venue.location.lat,
      lng: myVenue.venue.location.lng,
    },
    map: map,
    title: myVenue.venue.name,
  });

  // Click on A Marker!
  marker.addListener("click", function () {
    // Change the content
    infowindow.setContent(contentString);

    // Open An InfoWindow
    infowindow.open(map, marker);
  });
};
