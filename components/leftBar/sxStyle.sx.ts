const sxStyle = {
  container: {
    boxSizing: "border-box",
    zIndex: "1",
    fontSize: "14px",
    maxWidth: "250px",
    borderRight: "1px solid var(--border)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    height: "auto",
    padding: "20px 5px",
  },
  options: {
    width: "100%",
    border: "10px",
    boxShadow: "var(--shadow)",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  lang: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    fontFamily: "var(--font)",
  },
  current: {
    color: "var(--color)",
    backgroundColor: "var(--current)",
    boxShadow: "var(--shadow)",
    borderRadius: "50%",
  },
  calendar: {
    margin: "0",
  },
  create: {
    width: "150px",
    height: "50px",
    borderRadius: "25px",
    border: "0",
    backgroundColor: "var(--color)",
    color: "rgb(93, 93, 99)",
    fontSize: "14px",
    fontWeight: "580",
    boxShadow: "var(--shadow)",
  },
};
export default sxStyle;
