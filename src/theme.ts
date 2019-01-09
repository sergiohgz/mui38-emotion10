import { colors, createMuiTheme } from '@material-ui/core';
import { blueGrey, blue } from '@material-ui/core/colors';

const primary = {
  light: blueGrey[300],
  main: blueGrey[700],
  dark: blueGrey[800],
};
const secondary = {
  light: blue[300],
  main: blue[700],
  dark: blue[800],
};

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary,
    secondary,
  },
});
