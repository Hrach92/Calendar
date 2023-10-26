const sxStyle = {
  container: {
    boxSizing: "border-box",
    paddingLeft: "50px",
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    width: "100%",
  },
  day: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    borderRadius: "10px",
    paddingLeft: "10px",
    margin: "0 5px",
    boxShadow: "var(--shadow)",
  },
  current: {
    color: "var(--color)",
    backgroundColor: "rgb(117, 107, 192)",
  },
  name: {
    width: "40px",
  },
};
export default sxStyle;
