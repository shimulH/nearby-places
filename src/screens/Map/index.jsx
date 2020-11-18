import React, { useEffect, useState } from "react";
import { getVenues } from "../../store/map/actions";
import { connect } from "react-redux";
import { loadScript } from "../../utils/utilActions";
import SearchRestaurant from "../SearchResults/index";
import { Button, Container, Typography } from "@material-ui/core";
import { useStyle } from "./style";
import { createMarker } from "../../utils/utilActions";
import Skeleton from "@material-ui/lab/Skeleton";

function _Map({ venues, getVenues }) {
  const classes = useStyle();
  const [latLng, setLatLng] = useState({ lat: "", lng: "" });
  const [value, setValue] = useState(null);
  const [randomSelect, setRandomSelect] = useState(1);

  const initMap = () => {
    // Create A Map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: latLng.lat, lng: latLng.lng },
      zoom: 13,
    });

    // Create An InfoWindow
    let infowindow = new window.google.maps.InfoWindow();

    // Display Dynamic Markers
    if (value) {
      createMarker(value, map, infowindow);
    } else {
      venues?.map((myVenue) => createMarker(myVenue, map, infowindow));
    }
  };
  const renderMap = () => {
    loadScript(process.env.REACT_APP_GOOGLE_MAP_API);
    window.initMap = initMap;
  };

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatLng({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };
  useEffect(() => {
    getGeoLocation();
  }, []);
  useEffect(() => {
    renderMap();
    // eslint-disable-next-line
  }, [venues]);
  useEffect(() => {
    getVenues(latLng);
    // eslint-disable-next-line
  }, [latLng.lat]);
  return (
    <Container>
      <div className={classes.root}>
        <SearchRestaurant
          venues={venues}
          setValue={setValue}
          value={value}
          renderMap={renderMap}
        />
        <div className={classes.recommned}>
          <Typography className={classes.title} variant="subtitle1">
            Want find some cool places around you?
          </Typography>
          <Button
            onClick={() => {
              setValue(venues[randomSelect]);
              setRandomSelect(Math.floor(Math.random() * 20 + 1));
            }}
            className={classes.button}
          >
            recommend me one
          </Button>
          <Button
            onClick={() => {
              setValue(null);
            }}
            className={classes.button}
          >
            Show me all
          </Button>
        </div>
        {venues ? (
          <div className={classes.map} id="map"></div>
        ) : (
          <Skeleton animation="wave" variant="rect" width={1230} height={518} />
        )}
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  venues: state.map.venues,
});

const Map = connect(mapStateToProps, { getVenues })(_Map);

export default Map;
