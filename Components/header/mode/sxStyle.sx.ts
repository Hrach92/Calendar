const sxStyle = {
  mode: {
    lineHeight: "normal",
    borderRadius: "4px",
    fontFamily: "Roboto, Arial, sans-serif",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.032)",
      transition: "1s",
      border: "0",
    },
  },
  item: {
    height: "100%",
    minWidth: "100%",
    padding: "6px 16px",
  },
  select: {
    height: 31,
    maxWidth: 85,
    borderRadius: "4px",
    boxSizing: "border box",
    paddingRight: "1px",
    fontSize: "14px",
    fontWeight: "500",
    ">div": {
      paddingLeft: "0",
      ">p": {
        paddingLeft: "3px",
      },
    },
  },
  menu: {
    padding: "0",
  },
};
export default sxStyle;
