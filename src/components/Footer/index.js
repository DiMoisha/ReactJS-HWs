import React from 'react';
import Box from "@material-ui/core/Box";

export const Footer = ({ classes }) => {
  return (
    <Box className={ classes.footer }>
      <p className={ classes.textCenter }>
          © 2021 ChatBook
      </p>
    </Box>
  );
}