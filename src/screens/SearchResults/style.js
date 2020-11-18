import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
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
  icon: {
    marginTop: "5px",
  },
}));
