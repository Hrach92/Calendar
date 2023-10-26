const sxStyle = {
  header: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    padding: "0 10px",
    justifyContent: "space-between",
    borderBottom: "1px solid var(--border)",
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
  day: {
    position: "absolute",
    width: "14px",
    height: "16px",
    marginLeft: "13px",
    top: "16px",
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
    fontFamily: "var(--font)",
  },

  smallCalendar: {
    position: "absolute",
    backgroundColor: "var(--color)",
    zIndex: "12",
    top: "10px",
    left: "340px",
    borderRadius: "5px",
    boxShadow: "var(--shadow)",
  },
};
export default sxStyle;
