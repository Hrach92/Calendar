const sxStyle = {
  container: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    overflow: "auto",
    gap: "15px",
    padding: "10px",
    "@media screen and (width<=1250px)": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  item: {
    width: "285px",
  },
};
export default sxStyle;
