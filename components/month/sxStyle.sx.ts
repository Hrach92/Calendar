const sxStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 54px)",
  },
  box: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    height: "100%",
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
    backgroundColor: "var(--current)",
    boxShadow: "var(--shadow)",
    "&:hover": {
      backgroundColor: "var(--current) !important",
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
    border: "1px solid var(--border)",
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
