const sxStyle = {
  container: {
    borderRadius: "10px",
    boxShadow: "var(--shadow)",
    maxWidth: "210px",
    maxHeight: "185px",
  },
  title: {
    padding: "5px 0 0 10px",
    color: "rgb(92, 92, 95)",
    fontWeight: "600",
  },
  month: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    width: "210px",
    minHeight: "150px",
  },
  currentDay: {
    textAlign: "center",
    fontSize: "12px",
    color: "var(--color)",
    paddingTop: "5px",
    width: "24px",
    height: "24px",
    margin: "0 3px",
    borderRadius: "50%",
    backgroundColor: "rgb(39, 39, 238)",
    cursor: "pointer",
  },
  monthDay: {
    fontSize: "12px",
    textAlign: "center",
    paddingTop: "5px",
    margin: "0 3px",
    width: "24px",
    height: "24px",
    cursor: "pointer",
    color: "rgb(52, 52, 58)",
  },
};
export default sxStyle;
