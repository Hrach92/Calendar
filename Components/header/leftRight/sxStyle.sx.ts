const sxStyle = {
  leftRight: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    margin: "8px 335px",
    "@media screen and (width<=700px)": {
      position: "absolute",
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
    color: "rgb(60,64,67)",
    "&:hover": {
      backgroundColor: "rgb(233, 214, 214,0.5)",
    },
  },
};
export default sxStyle;