import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary,
    textAlign: "center",
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    mixBlendMode: "overlay",
    backgroundColor: "#757575",
  },
  title: {
    fontSize: "144px",
    color: "#b0bec5",
    width: "100%",
    display: "flex",
    backgorundPosition: "center",
    alignItems: "center",
    backgroundSize: "cover",
    justifyContent: "center",
    marginBottom: 0,
  },
  subTitle: {
    fontSize: "80px",
    color: "#b0bec5",
    margin: "0",
  },
}));
