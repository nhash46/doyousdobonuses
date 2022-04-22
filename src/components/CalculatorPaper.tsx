import * as React from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

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
            borderRadius: '9px',
          }}
    >
        <AppBar 
            position="static"
            sx={{
                backgroundColor: '#69ffae',
                color: '#000',
                height: '12%',
                borderRadius: '6px 6px 0px 0px'
            }}
        >
            <Toolbar>
                <Typography 
                    textAlign='center'
                    variant="h6" 
                    component="div" 
                    fontWeight='600'
                    fontSize='30'
                    sx={{ 
                        flexGrow: 1,
                        fontSize: 26,
                        textAlign: 'center',
                        paddingTop: '15px'
                    }}>
                    doyousdobonuses 
                    <PriceCheckIcon/>
                </Typography>
            </Toolbar>
        </AppBar>
        <CalculatorTabs/>
        <CalculatorInputFieldGrid/>
    </Paper>

  );
}
