const sxStyle = {
  cntainer: {
    display: "flex",
    flexDirection: "column",
  },
  box: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
  },
  number: {
    color: "black",
    minWidth: "24px",
    height: "24px",
    borderRadius: "12px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(0,0,0,0.1)",
    },
  },
  currentDay: {
    color: "rgb(208, 208, 230) !important",
    backgroundColor: "#1a73e8",
    boxShadow:
      "0 0 2px 2px rgba(0, 0, 0, 0.2),0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    "&:hover": {
      backgroundColor: "#1a73e8 !important",
    },
  },
  dayContainer: {
    display: "flex",
    justifyContent: "center",
    minWidth: "45px",
  },
  day: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "4px",
    border: "1px solid rgb(221, 221, 236)",
    borderStyle: "none solid solid none",
    textAlign: "center",
    fontSize: "0.9em",
    fontWeight: "400",
    color: "rgb(143, 143, 151)",
    zIndex: "0",
    minHeight: "100px",
  },
};
export default sxStyle;
