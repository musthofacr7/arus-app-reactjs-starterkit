const Style = {
  Container: {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'hidden',
    flex: '1',
    backgroundColor: '#26CAC0',
    padding: 0
  },
  imgEcclipse: {
    marginTop: '50%',
    marginLeft: '50%',
    transform: 'translate(-50%, 50%)',
    opacity: 0.4,
    width: 128
  },
  imgLogo: {
    marginLeft: '50%',
    transform: 'translate(-50%, 0%)',
    width: 74,
    marginTop: '-30px'
  },
  textOne: {
    marginTop: 47,
    fontfamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineheight: '31px',
    color: '#FFFFFF'
  },
  textTwo: {
    marginTop: 5,
    fontfamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineheight: '21px',
    color: '#FFFFFF'
  }
};
export default Style;
