const sxStyle = {
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    marginTop: "10px",
    "&::-webkit-scrollbar": {
      width: "0px",
    },
  },
  eventList: {
    position: "absolute",
    top: "65px",
    right: "75px",
  },
  rightLine: {
    width: "1px",
    height: "100%",
    position: "absolute",
    top: "65px",
    right: "65px",
    backgroundColor: "rgb(221, 221, 236)",
    zIndex: "-5",
  },
  dayContainer: {
    position: "relative",
    marginTop: "60px",
    width: "100%",
    borderRight: "1px solid rgb(221, 221, 236)",
    "&::-webkit-scrollbar": {
      width: "0px",
    },
  },
};
export default sxStyle;
