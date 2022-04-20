import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';

const lightGreen = "#69ffae";

export default function CalculatorInputFieldGrid() {
  return(
    <Box 
        sx={{ 
            flexGrow: 1,
            'ml':'60px',
            'mr':'60px',
            'mt':'20px'
        }}
    >
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField
                
                    id="outlined-number"
                    label="Bet stake"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={8}>
                <Slider 
                    sx={{
                        '.MuiSlider-root': {
                            'color':lightGreen
                        }
                    }}
                    defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="auto"
                 />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-number"
                    label="Back odds"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={8}>
                <Slider 
                    sx={{
                        '.MuiSlider-root': lightGreen
                    }}
                    defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="auto"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-number"
                    label="Lay odds"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={8}>
                <Slider 
                    sx={{
                        '.MuiSlider-root': lightGreen
                    }}
                    defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="auto"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-number"
                    label="Lay commission"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={8}>
                <Slider 
                    sx={{
                        '.MuiSlider-root': lightGreen
                    }}
                    defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="auto"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-number"
                    label="Lay stake"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-number"
                    label="Max liability"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
        </Grid>
    </Box>
  );
}
