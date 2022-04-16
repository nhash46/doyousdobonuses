import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CalculatorPaper from './CalculatorPaper';

export default function CalculatorContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box 
            sx={{ 
                height: '100vh', 
                alignItems: "center",
                }}
        >
            <CalculatorPaper/>
        </Box>
      </Container>
    </React.Fragment>
  );
}
