import React, { Children, isValidElement, cloneElement } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange, teal } from '@material-ui/core/colors';
import { useStyles } from '../../hooks/useStyles';
import { Header } from '../Header';
import { Footer } from '../Footer';

const appTheme = createTheme({
  palette: {
    primary: {
      light: teal[50],
      main: teal[500],
      dark: teal[200],
    },
    secondary: {
      light: orange[50],
      main: orange[500],
    },
    background: {
      default: 'linear-gradient(45deg, #ebfbfb 30%, #f9f4e8 90%)',
    },
  },
});

export const Layout = ({ children }) => {
  const appHeading = 'ChatBook';
  const classes = useStyles(appTheme);

  return (
      <ThemeProvider theme={ appTheme }>
        <div className={ classes.root }>
          <CssBaseline />
          <Header classes={ classes } appHeading={ appHeading } />
          <Box className={ classes.appBody }>
            { Children.map(children, child => {
              if (isValidElement(child)) {
                return cloneElement(child, { classes })
              }

              return child;
            })}
          </Box>
        </div>
        <Footer classes={ classes } />
      </ThemeProvider>
  );
}