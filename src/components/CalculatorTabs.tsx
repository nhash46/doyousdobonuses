import * as React from 'react';
import { Box, Tabs, Tab, CardHeader } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';

const lightGreen = "#69ffae";

export default function CalculatorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Tabs 
            sx={{
                'mt': '30px',
                '.MuiTab-root': {
                    color: 'white',
                    borderRadius: '8px',
                },
                '.MuiTab-root.Mui-selected': {
                    color: lightGreen,
                  },
                '.MuiTabs-indicator': {
                    backgroundColor: lightGreen,
                    borderRadius: '4px'
                },
            }}
            value={value} 
            onChange={handleChange} 
            centered
        >
        <Tab label="NORMAL BET" />
        <Tab label="BONUS BET SNR" />
        <Tab label="BONUS BET SR" />
      </Tabs>

    </Box>
  );
}