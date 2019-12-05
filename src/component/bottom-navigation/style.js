const Style = {
  stickToBottom: {
    width: '100%',
    maxWidth: 446,
    position: 'fixed',
    bottom: 0,
    border: '0px solid #e0e0e0',
    boxShadow: '0px 0px 2px #9e9e9e'
  },
  root: {
    color: '#a3a3a3',
    fill: '#a3a3a3',
    '&$selected': {
      color: '#26CAC0',
      fill: '#26CAC0'
    },
    width: '100%'
  },
  selected: {}
};
export default Style;
