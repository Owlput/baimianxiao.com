const componentWrapperStyle = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  backgroundColor: "rgb(250,250,250)",      
  width:"18em",
};
const authorInfoStyle = {
  wrapper: {
     display: "flex", flexDirection: "column",

    },
  text: {
    textAlign: "center",
    fontSize: "3em",
    margin: "0.5em 0px 0.5em 0px",
    color: "rgb(200,200,200)",
  },
  image: {
    width: "15em",
    borderRadius: "50%",
  },
  name: {
    textAlign: "center",
    fontSize: "2.2em",
    margin: "0px 0px 0.5em 0px",
  },
  contact: {
    div: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    text: {
      fontSize: "5em",
    },
  },
  status: {},
};
const recentWorksStyle = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    fontSize: "1.5em",
  },
  image: {},
};

export { componentWrapperStyle, authorInfoStyle, recentWorksStyle };
