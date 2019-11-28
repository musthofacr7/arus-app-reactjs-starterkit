const Style = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    overflowY: "hidden",
    overflowX: "hidden",
    justifyContent: "",
    flex: "1",
    padding: 0,
    flexDirection: "column",
    backgroundSize: "cover"
  },
  gridItemTop: {
    flex: "0.8",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    backgroundSize: "cover",
    paddingTop: "10%",
    backgroundColor: "white",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "center"
  },
  gridItemCenter: {
    display: "flex",
    flex: "0.5",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    paddingTop: "5%"
  },
  gridTwo: {
    backgroundColor: "white",
    height: "60px",
    padding: "3%",
    paddingTop: "6%"
  },
  gridItemBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "2",
    backgroundColor: "#E5E5E5",
    justifyContent: "flex-end",
    paddingBottom: "20%"
  },
  containerProfil: {
    display: "flex",
    flexDirection: "row"
  },

  gridImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  name: {
    color: "#25282B",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "bold",
    fontFamily: "Google Sans"
  },
  nik: {
    color: "#9E9E9E",
    fontSize: "9px",
    fontFamily: "Nunito Sans"
  },
  gridEdit: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "#F7A647",
    fontSize: "14px",
    lineHeight: "19px",
    fontFamily: "Nunito Sans"
  },
  image: {
    width: "64px"
  },

  button: {
    fontFamily: "Montserrat, sans-serif",
    width: "400%",
    height: 48,
    boxShadow: "0px 0px 2px #c1b1b1",
    border: "1px solid #F7A647",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    color: "#F7A647",

    fontSize: "14px"
  },
  buttonBox: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center"
  },

  linkArrow: {
    textDecoration: "none",
    color: "#000000"
  },

  gridName: {
    paddingTop: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },

  arrow: {
    display: "flex",
    justifyContent: "flex-end"
  },
  icon: {
    width: 15,
    color: "#E0E0E0"
  },
  text: {
    fontFamily: "Nunito Sans",
    fontSize: 13
  },
  gridItem: {
    backgroundColor: "#E5E5E5"
  }
};
export default Style;
