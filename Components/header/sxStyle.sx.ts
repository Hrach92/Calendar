const sxStyle = {
  header: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "44px",
    padding: "0 10px",
    justifyContent: "space-between",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: "15px",
  },
  logo: {
    width: "40px",
    height: "40px",
    color: "rgb(36, 36, 241)",
  },
  logoCurrent: {
    position: "absolute",
    width: "14px",
    height: "16px",
    marginLeft: "13px",
    top: "12px",
    backgroundColor: "rgb(248, 244, 244)",
    fontSize: "12px",
    paddingTop: "1px",
    textAlign: "center",
  },
  title: {
    width: "180px",
    margin: "12px 107px",
    fontSize: "22px",
    lineHeight: "24px",
    color: "#5f6368",
    fontFamily: '"Product Sans",Arial,sans-serif',
  },

  smallCalendar: {
    position: "absolute",
    backgroundColor: "white",
    zIndex: "12",
    top: "10px",
    left: "340px",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.19)",
    animation: "small",
    animationDuration: "0.1s",
    animationIterationCount: "1",
  },
};
export default sxStyle;
