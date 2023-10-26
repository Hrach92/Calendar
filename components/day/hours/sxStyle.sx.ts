import { margin } from "../../../dependencies/instance";

const sxStyle = {
  dayRow: {
    display: "flex",
    flexDirection: "row",
    borderRight: "1px solid var(--border)",
  },
  hour: {
    boxSizing: "border-box",
    fontSize: "10px",
    textAlign: "center",
    color: "rgb(136, 129, 129)",
    paddingTop: "10px",
    height: "48px",
    width: "50px",
    border: "1px solid var(--border)",
    borderStyle: "none solid solid none",
  },
  hourNotes: {
    boxSizing: "border-box",
    height: "48px",
    width: "100%",
    border: "1px solid var(--border)",
    borderStyle: "none none solid none",
  },
  redLine: {
    position: "absolute",
    height: "2px",
    backgroundColor: "red",
    marginTop: `${margin}`,
    width: "100%",
  },
};
export default sxStyle;
