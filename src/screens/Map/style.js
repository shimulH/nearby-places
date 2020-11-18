import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  root: {
    // marginTop: "10%",
  },
  map: {
    width: "100%",
    height: "50vh",
    // border: "10px solid black",
  },
  title: {
    marginTop: "50px",
    fontSize: "20px",
    textAlign: "left",
    marginRight: "10px",
  },
  recommned: {
    display: "flex",
    marginBottom: "10px",
    alignItems: "center",
  },
  button: {
    fontSize: "16px",
    marginTop: "50px",
    textAlign: "left",
    marginRight: "10px",
  },
}));
