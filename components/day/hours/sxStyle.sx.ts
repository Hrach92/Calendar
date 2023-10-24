import { margin } from "../../../dependencies/instance";

const sxStyle = {
  dayRow: {
    display: "flex",
    flexDirection: "row",
  },
  hour: {
    boxSizing: "border-box",
    fontSize: "10px",
    textAlign: "center",
    color: "rgb(136, 129, 129)",
    paddingTop: "10px",
    height: "48px",
    width: "50px",
    border: "1px solid rgb(221, 221, 236)",
    borderStyle: "none solid solid none",
  },
  hourNotesWithBarOpen: {
    boxSizing: "border-box",
    height: "48px",
    width: "900px",
    border: "1px solid rgb(221, 221, 236)",
    borderStyle: "none none solid none",
  },
  hourNotes: {
    boxSizing: "border-box",
    height: "48px",
    width: "1135px",
    border: "1px solid rgb(221, 221, 236)",
    borderStyle: "none none solid none",
  },
  redLine: {
    position: "absolute",
    height: "2px",
    backgroundColor: "red",
    marginTop: `${margin}`,
  },
};
export default sxStyle;
