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
    },
    rightBox: {
        width: 'calc(100% - 15rem)',
        height: 'calc(100vh - 57px)',
        overflowY: 'auto',
        marginTop: '12px'
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
