const sxStyle = {
  menu: {
    top: " 0px",
    left: "10px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    padding: "10px",
    color: "#5f6368",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eceef3",
    },
    "@media screen and (width<=700)": {
      top: "0px",
      width: "40px",
      height: "40px",
      padding: "8px",
      color: "rgb(132, 132, 136)",
      "&:hover": {
        backgroundColor: "rgb(230, 212, 212,0.5)",
      },
    },
  },
};
export default sxStyle;
