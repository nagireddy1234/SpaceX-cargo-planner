import {  Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { colors } from '../../theme/colors';
import CustomButton from '../buttons/CustomButton';
import SearchInput from '../inputs/SearchInput';

const useStyles = makeStyles(({
    wrapper:{
        backgroundColor: colors.grayPrimary,
        boxShadow: '0 0 10px -1px rgba(0,0,0, 0.2)'
    },
    buttonShift:{
        marginRight: '1rem'
    }
}))


const Header = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} >
            <Grid item md={3} sm={12}>
                <Typography variant="h4">Cargo Planner</Typography>
            </Grid>
            <Grid item container alignItems="center" justify="center" md={6} sm={12}>
                <SearchInput />
            </Grid>
            <Grid item md={3} sm={12} container alignItems="center" justify="flex-end">
                <CustomButton externalClass={classes.buttonShift}>Load</CustomButton>
                <CustomButton variant="secondary">Save</CustomButton>
            </Grid>
        </Grid>
    );
};

export default Header;
