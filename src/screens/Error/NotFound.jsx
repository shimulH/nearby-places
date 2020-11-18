import React from "react";
import { useStyles } from "./style";

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg} />
      <h1 className={classes.title}>404</h1>
      <p className={classes.subTitle}>Not Found!</p>
    </div>
  );
};

export default NotFound;
