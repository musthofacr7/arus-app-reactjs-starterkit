const Style = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    flexDirection: "column",
    display: "flex",
    overflowY: "hidden",
    overflowX: "hidden",
    flex: 1,
    backgroundColor: "#F1F1F1",
    padding: 0
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row"
  },
  gridOne: {
    display: "flex",
    background: "#26CAC0",
    maxWidth: "100%",
    padding: 10,
    paddingBottom: 50,
    height: "170px"
  },
  gridTwo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "-4em"
    // width: "100%",
    // height: "256px"
  },

  containerProfil: {
    padding: 20
  },
  image: {
    maxWidth: "100%",
    marginLeft: "1em"
  },
  gridName: {
    maxWidth: "100%",
    marginLeft: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  name: {
    fontSize: "16px",
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  nik: {
    color: "#FFFFFF",
    fontSize: "12px"
  },
  antrian: {
    background: "white",
    borderRadius: 8,
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    width: "87%",
    paddingBottom: 20,
    // margin: "auto",
    // alignItems: "center",
    justifyContent: "center"
  },
  gridText: {
    maxWidth: "100%"
  },
  nomorAntrian: {
    color: "#25282B",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: "20px"
  },
  gridNumb: {
    maxWidth: "100%"
  },
  nomor: {
    marginTop: "0.7em",
    color: "#26CAC0",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Nunito Sans"
  },
  locket: {
    color: "#9E9E9E",
    fontFamily: "Nunito Sans",
    fontWeight: 400,
    fontSize: "18px"
  },
  gridLocket: {
    maxWidth: "100%",
    padding: 0
  },

  box: {
    background: "#E9F9F8",
    border: "0.5px solid #26CAC0",
    borderRadius: "8px",
    borderSizing: "border-box",
    minWidth: "60%",
    maxWidth:'80%',
    marginTop: "1em"
  },
  estimasi: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "40px",
    color: "#9E9E9E"
  },
  waktu: {
    color: "black"
  },
  gridBellow: {
    backgroundColor: "red"
  },
  gridLink: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    borderRadius: 8
  },
  link: {
    textDecoration: "none"
  },

  ambilNomor: {
    color: "#000000",
    fontfamily: "Nunito Sans",
    fontWeight: 500,
    fontSize: 14
  },
  contentTwo: {
    display: "flex",
    paddingTop: "1em",
    justifyContent: "center"
  }
};
export default Style;
