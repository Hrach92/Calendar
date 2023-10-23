import moment from "moment";

const sxStyle = {
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
  },
  dayNames: {
    boxSizing: "border-box",
    paddingLeft: "50px",
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    width: "100%",
  },
  dayContainer: {
    top: "25px",
    overflow: "auto",
    marginTop: "40px",
    left: "20px",
    display: "grid",
    gridTemplateColumns: "50px auto auto auto auto auto auto auto",
    width: "100%",
  },
  dayNumber: {
    paddingTop: "7px",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    marginLeft: "62px",
    "&:hover": {
      backgroundColor: "rgb(250, 245, 245)",
    },
  },
  day: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    borderRadius: "10px",
    paddingLeft: "10px",
    margin: "0 5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.19)",
  },
  name: {
    width: "40px",
  },
  color: {
    backgroundColor: "blue",
    color: "white",
  },
  dayNumberContainer: {
    height: "45px",
    textAlign: "center",
    paddingTop: "2px",
    fontSize: "20px",
    color: "rgb(92, 92, 95)",
  },
  current: {
    position: "absolute",
    marginTop: `${parseInt(moment().format("mm")) * 0.8}px`,
    height: "1px",
    border: "1px solid red",
  },
  hour: {
    boxSizing: "border-box",
    fontSize: "10px",
    textAlign: "center",
    color: "rgb(136, 129, 129)",
    paddingTop: "10px",
    height: "48px",
    width: "100%",
    border: "1px solid rgb(221, 221, 236)",
    borderStyle: "none solid solid none",
  },
};
export default sxStyle;
