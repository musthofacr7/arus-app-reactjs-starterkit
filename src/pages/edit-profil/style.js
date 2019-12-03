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

    padding: 0
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: '55px',
    padding: 10
    // padding: 20
    // height: '60%'
  },
  gridAvatar: {
    alignItems: 'center',
    display: 'flex',
    paddingTop: 20,
    justifyContent: 'center'
  },
  gridEdit: {
    paddingTop: 10
  },
  image: {
    width: '82px',
    alignItems: 'center'
  },
  ganti: {
    color: '#26CAC0',
    fontFamily: 'Nunito Sans',
    fontSize: '14px'
  },
  link: {
    textDecoration: 'none'
  },
  gridField: {
    backgroundColor: 'green'
  },
  form: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    width: 300
  },
  gridForm: {
    // display: 'flex',
    // flexDirection: 'column',
    // backgroundColor: 'white'
  },
  saveButton: {
    width: '100%',
    margin: 'auto',
    paddingTop: 40,
    paddingBottom: 50
  },
  button: {
    border: '1px solid #F7A647',
    animation: 'none',
    textTransform: 'capitalize',
    width: 300
  },
  save: {
    color: '#FFFFFF',

    fontStyle: 'normal',
    fontSize: '14px'
  }
};
export default Style;
