const componentWrapperStyle = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  backgroundColor: "rgb(250,250,250)",      
  width:"35rem",
};
const authorInfoStyle = {
  wrapper: {
     display: "flex", flexDirection: "column",
     alignItems:"center",
    },
  text: {
    textAlign: "center",
    fontSize: "2em",
    margin: "0.5em 0px 0.5em 0px",
    color: "rgb(200,200,200)",
  },
  image: {
    width: "70%",
    borderRadius: "50%",
  },
  name: {
    textAlign: "center",
    fontSize: "1.5em",
    margin: "3% 4% 5% 4%",
  },
  contact: {
    div: {
      maxWidth:"90%",
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
  image: {
    width:"50%"
  },
};

export { componentWrapperStyle, authorInfoStyle, recentWorksStyle };
