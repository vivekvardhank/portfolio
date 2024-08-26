import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box, Typography } from "@mui/material";

function Terminal(props) {
   const { text } = props;

   return (
      <Box 
        component="section" 
        className={classNames(Style.terminal, Style.shadowed)}
        width={{ xs: '90%', md: '50%' }} 
        maxWidth="100%" 
        borderRadius="0.25rem" 
        mb="4rem" 
        overflow="hidden"
      >
        <Box 
          sx={{ backgroundColor: '#8c8c8c', color: 'white' }} 
          p="0.5rem" 
          borderRadius="0.25rem 0.25rem 0 0"
          fontSize="1rem"
        />
        <Box 
          py={{ xs: '1rem', md: '2rem' }} 
          px={{ xs: '1rem', md: '3rem' }} 
          borderRadius="0 0 0.25rem 0.25rem"
          sx={{ 
            backgroundColor: '#1e1e1e', 
            fontSize: "1rem", 
            fontFamily: "Consolas, Courier New, monospace",
            color: "white", 
            wordWrap: "break-word", 
            overflowWrap: "break-word", 
            overflow: "hidden", 
          }}
          className={Style.setWidth}
        >
          <Typography 
            variant="body2" 
            style={{ marginBottom: '-20px', fontFamily: 'Albertus Medium', fontSize: '17px' }}
          >
            Windows PowerShell
          </Typography>
          <Typography 
            variant="body2" 
            style={{ fontFamily: 'Albertus Medium', fontSize: '17px' }}
          >
            Copyright (C) Microsoft Corporation. All rights reserved.
          </Typography>
          {text}
        </Box>
      </Box>
   );
}

export default Terminal;
