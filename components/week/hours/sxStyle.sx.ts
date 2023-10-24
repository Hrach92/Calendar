import moment from "moment";

const sxStyle = {
  container: {
    top: "25px",
    overflow: "auto",
    marginTop: "40px",
    left: "20px",
    display: "grid",
    gridTemplateColumns: "50px auto auto auto auto auto auto auto",
    width: "100%",
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
