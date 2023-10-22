const sxStyle = {
  containerWithOpenBar: {
    boxSizing: "border-box",
    width: "979px",
    margin: "32px 0 0 256px",
    display: "flex",
    flexWrap: "wrap",
    height: "580px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "0px",
    },
  },

  container: {
    boxSizing: "border-box",
    width: "1225px",
    margin: "32px 0 0 10px",
    display: "flex",
    flexWrap: "wrap",
    height: "580px",
    overflow: "auto",
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
    height: "603px",
    position: "absolute",
    top: "65px",
    right: "65px",
    backgroundColor: "rgb(221, 221, 236)",
    zIndex: "-5",
  },
  dayContainer: {
    position: "relative",
    marginTop: "40px",
    left: "20px",
    "&::-webkit-scrollbar": {
      width: "0px",
    },
  },
};
export default sxStyle;
