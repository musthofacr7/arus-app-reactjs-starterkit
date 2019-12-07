import { makeStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    // backgroundColor: palette.background.paper,
    border: '0.1px solid #FFFFFF',
    borderRadius: '8px',
    // padding: spacing(2, 4, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  question: {
    color: '#00000',
    fontSize: '14px'
  },
  loket: {
    color: ' #26CAC0',
    fontWeight: 'bold',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxloket: {
    paddingTop: '12px',
    background: '#E9F9F8',
    border: ' 1px solid #26CAC0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    width: '86px',
    height: '86px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  typographyLoket: {
    fontfamily: 'Google-Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textalign: 'center',
    color: '#26CAC0',
    justifyContent: 'center'
  },
  TypographyLoketCategory: {
    fontfamily: 'Google-Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '61px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textalign: 'center',
    color: '#26CAC0',
    justifyContent: 'center'
  },
  gridItemTwo: {
    paddingTop: '2em'
  },
  gridItemTwo: {
    paddingTop: '2em'
  },
  buttonAgree: {
    border: '2px solid #F7A647',
    minWidth: '118px',
    minHeight: '48px'
  },
  buttonCancel: {
    border: '2px solid #F7A647',
    background: '#FFFFFF',
    minWidth: '118px',
    minHeight: '48px'
  }
};

export default styles;
