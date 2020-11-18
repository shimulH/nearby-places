import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import RoomIcon from "@material-ui/icons/Room";
import { useStyle } from "./style";

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
          <RoomIcon className={classes.icon} fontSize="large" color="primary" />
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
            {option.venue?.location.address?.length > 0 && (
              <Grid item>
                <label className={classes.dropdownSubtitle}>
                  {option.venue?.location.address},{option.venue?.location.city}
                </label>
              </Grid>
            )}
            <Grid item className={classes.dropdownSubtitle}>
              <RoomIcon fontSize="small" color="primary" />
              <label>{option.venue?.location.distance / 1000} km</label>
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
