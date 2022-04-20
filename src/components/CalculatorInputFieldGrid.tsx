import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from 'react';
import { layStakeBonusBetSNR } from '../functions/formulas';

const lightGreen = "#69ffae";
const darkGreen = '#bddbd0'

export default function CalculatorInputFieldGrid() {

    const [ betType, setBetType ] = useState('Normal');
    const [ betStake, setBetStake ] = useState(50);
    const [ backOdds, setBackOdds ] = useState(2);
    const [ layOdds, setLayOdds ] = useState(2.10);
    const [ layCommission, setLayCommission ] = useState(0.05);
    const [ layStake, setLayStake ] = useState(0);
    const [ liability, setLiability ] = useState(0);

    const handleBetStakeSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setBetStake(Number(newValue));
    };
    
    const handleBetStakeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBetStake(Number(event.target.value));
    };

    const handleBackOddsSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setBackOdds(Number(newValue));
    };
    
    const handleBackOddsInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBackOdds(Number(event.target.value));
    };

    const handleLayOddsSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setLayOdds(Number(newValue));
    };
    
    const handleLayOddsInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLayOdds(Number(event.target.value));
    };

    const handleLayCommissionSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setLayCommission(Number(newValue));
    };
    
    const handleLayCommissionInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLayCommission(Number(event.target.value));
    };
    
    const handleLiabilityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLiability(Number(event.target.value));
    };


    useEffect(() => {

        setLayStake(layStakeBonusBetSNR(backOdds, layOdds, layCommission, betStake));

    }, [betStake, backOdds, layOdds, layCommission, liability])

    return(
        <Box 
            sx={{ 
                flexGrow: 1,
                'ml':'60px',
                'mr':'60px',
                'mt':'20px',
                '.MuiFormLabel-root':{
                    'color':lightGreen
                },
                '.MuiSlider-root': {
                    'color':'33px'
                },
                '.MuiSlider-track': {
                    'color':lightGreen
                },
                '.MuiSlider-thumb': {
                    'color':lightGreen
                },
                '.MuiSlider-thumb:hover': {
                    'color':lightGreen
                },
                '.MuiSlider-rail': {
                    'color':lightGreen
                },
                '.Mui-focued': {
                    'color':lightGreen
                },
                '.MuiInputBase-formControl': {
                    'color': lightGreen
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: lightGreen,
                },
                '& .MuiOutlinedInput-root': {
                    '& input': {
                        'height': '0.8em'
                    },
                    '& fieldset': {
                    borderColor: darkGreen,
                    },
                    '&:hover fieldset': {
                    borderColor: lightGreen,
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: lightGreen,
                    },
                },
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        value={betStake}
                        onChange={handleBetStakeInputChange}
                        id="outlined-number"
                        label="Bet stake"
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Slider
                        value={betStake}
                        onChange={handleBetStakeSliderChange}
                        aria-label="Default" 
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={backOdds}
                        onChange={handleBackOddsInputChange}
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
                        value={backOdds}
                        onChange={handleBackOddsSliderChange}
                        defaultValue={50} 
                        aria-label="Default" 
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={layOdds}
                        onChange={handleLayOddsInputChange}
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
                        onChange={handleLayOddsSliderChange}
                        value={layOdds}
                        defaultValue={50} 
                        aria-label="Default" 
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        onChange={handleLayCommissionInputChange}
                        value={layCommission}
                        id="outlined-number"
                        label="Lay commission %"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Slider 
                        onChange={handleLayCommissionSliderChange}
                        value={layCommission}
                        defaultValue={50} 
                        aria-label="Default" 
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        value={layStake}
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
                        onChange={handleLiabilityInputChange}
                        value={liability}
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
