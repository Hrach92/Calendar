const sxStyle = {
  leftRight: {
    display: "flex",
    flexDirection: "row",
    "@media screen and (width<=700px)": {
      margin: "6px 180px",
    },
  },
  btn: {
    width: "30px",
    height: "30px",
    position: "relative",
    marginRight: "3px",
    paddingTop: "3px",
    textAlign: "center",
    fontSize: "13px",
    borderRadius: "50%",
    border: "0",
    cursor: "pointer",
    color: "rgb(60,64,67)",
    "&:hover": {
      backgroundColor: "rgb(233, 214, 214,0.5)",
    },
  },
};
export default sxStyle;
