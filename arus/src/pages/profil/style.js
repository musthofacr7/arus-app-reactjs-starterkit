const Style = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'hidden',
    flex: '1',
    backgroundColor: '#F1F1F1',
    // margin: 0
    padding: 0
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: '10%',
    padding: 20
  },
  gridUpper: {
    lineBorder: '1px solid black'
  },
  gridBellow: {
    backgroundColor: 'blue'
    // maxWidth: '100%'
  },
  containerProfil: {
    // marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    backgroundColor: 'white',

    marginTop: '5%'
  },

  gridName: {
    // backgroundColor:'green',
    paddingTop: 15
  },
  name: {
    color: '#25282B',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 'bold',
    fontFamily: 'Google Sans'
  },
  nik: {
    color: '#9E9E9E',
    fontSize: '9px',
    fontFamily: 'Nunito Sans'
  },
  gridEdit: {
    paddingTop: 15,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  link: {
    textDecoration: 'none',
    color: '#F7A647',
    fontSize: '14px',
    lineHeight: '19px',
    fontFamily: 'Nunito Sans'
  },
  image: {
    width: '64px'
  },
  gridTwo: {
    display: 'flex',
    backgroundColor: 'white',
    marginTop: '15px',
    justifyContent: 'center',
    padding: 20
  },

  arrow: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  icon: {
    width: 15,
    color: '#E0E0E0'
  },
  text: {
    fontFamily: 'Nunito Sans',
    fontSize: 13
  },
  linkArrow: {
    textDecoration: 'none',
    color: '#000000'
  },
  button: {
    fontFamily: 'Montserrat, sans-serif',
    width: '450%',
    height: 48,
    boxShadow: '0px 0px 2px #c1b1b1',
    border: '1px solid #F7A647',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    color: '#F7A647',

    fontSize: '14px'
  },
  buttonBox: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },
  gridButton: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '75%'
  }
};
export default Style;
