const sxStyle = {
  container: {
    borderRadius: "10px",
    boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)",
  },
  title: {
    padding: "5px 0 0 10px",
    color: "rgb(92, 92, 95)",
    fontWeight: "600",
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
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
    color: "white",
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
