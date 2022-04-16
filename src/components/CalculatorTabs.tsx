import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CalculatorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: '2%' }}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            centered
            textColor="secondary"
        >
        <Tab label="NORMAL BET" />
        <Tab label="BONUS BET SNR" />
        <Tab label="BONUS BET SR" />
      </Tabs>
    </Box>
  );
}