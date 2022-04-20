import * as React from 'react';
import Paper from '@mui/material/Paper';

import CalculatorTabs from './CalculatorTabs';
import CalculatorInputFieldGrid from './CalculatorInputFieldGrid';

export default function CalculatorPaper() {
  return (
    <Paper
        elevation={3}
        sx={{
            bgcolor: '#262626',
            mt: '15%',
            mb: '10%',
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            height: '80%',
            minHeight: 'xl',
            borderRadius: '9px',
          }}
    >
        <CalculatorTabs/>
        <CalculatorInputFieldGrid/>
    </Paper>

  );
}
