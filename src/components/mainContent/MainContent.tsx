import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { mainContentInterface } from '../../interfaces/content';

const useStyles = makeStyles({
    wrapper:{
        height: 'calc(100vh - 57px)',
        marginTop: '12px'
    },
    leftBox: {
        width: '15rem',
        '@media (max-width:967px)':{
           width:'12rem'
        },
        '@media (max-width:450px)':{
           width:'7rem'
        },
    },
    rightBox: {
        width: 'calc(100% - 15rem)',
        height: 'calc(100vh - 57px)',
        overflowY: 'auto',
        marginTop: '12px',
        '@media (max-width:967px)':{
            width: 'calc(100% - 12rem)',
         },
         '@media (max-width:450px)':{
            width: 'calc(100% - 7rem)',
         },
    },
});

const MainContent: FC<mainContentInterface> = ({ sidebar, mainConent }) => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" className={classes.wrapper}>
            <Box className={classes.leftBox}>{sidebar}</Box>
            <Box className={classes.rightBox}>{mainConent}</Box>
        </Grid>
    );
};

export default MainContent;
