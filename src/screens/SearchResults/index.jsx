import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

export default function SearchRestaurant({
  venues,
  setValue,
  value,
  renderMap,
}) {
  const classes = useStyle();
  useEffect(() => {
    renderMap();
    // eslint-disable-next-line
  }, [value]);

  return (
    <div>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Typography className={classes.title} variant="h1">
            Find A Restaurant Close to You
          </Typography>
        </Grid>
        <Grid item>
          <RoomIcon fontSize="large" color="primary" />
        </Grid>
      </Grid>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
        id="combo-box-demo"
        options={venues}
        getOptionLabel={(option) => option.venue?.name}
        renderOption={(option) => (
          <Grid container spacing={2} direction="column">
            <Grid item>
              <h5 className={classes.dropdownTitle}>{option.venue?.name}</h5>
            </Grid>
            <Grid item>
              <label className={classes.dropdownSubtitle}>
                {option.venue?.location.address},{option.venue?.location.city}
              </label>
            </Grid>
            <Grid item xl={6} className={classes.dropdownSubtitle}>
              <RoomIcon fontSize="small" />
              <label>{option.venue?.location.distance / 1000}km</label>
            </Grid>
          </Grid>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Restaurants"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    margin: "5% 10px 20px 0",
  },
  dropdownTitle: {
    fontSize: "16px",
    margin: "0 5px",
    fontWeight: "2px",
  },
  dropdownSubtitle: {
    fontSize: "12px",
    margin: "0 5px",
  },
}));
