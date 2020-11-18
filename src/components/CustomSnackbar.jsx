import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";

import { closeSnackbar } from "../store/errors/actions";

/* eslint-disable */
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
/* eslint-enable */

const CustomSnackbar = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.error.snackbar.isOpen);
  const message = useSelector((state) => state.error.snackbar.message);
  const severity = useSelector((state) => state.error.snackbar.severity);

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity || "success"}>
        {message || "Operation completed!"}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
