import { withStyles } from '@material-ui/core/styles';
import Style from './style';
import Component from "./component";
import { withRouter } from 'react-router-dom';

const Styles = withRouter(withStyles(Style)(Component));

export default Styles;
