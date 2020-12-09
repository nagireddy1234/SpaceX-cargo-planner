import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { mainContentInterface } from '../../interfaces/content';

const useStyles = makeStyles({
    leftBox: {
        width: '15rem',
    },
    rightBox: {
        width: 'calc(100% - 15rem)',
    },
});

const MainContent: FC<mainContentInterface> = ({ sidebar, mainConent }) => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center">
            <Box className={classes.leftBox}>{sidebar}</Box>
            <Box className={classes.rightBox}>{mainConent}</Box>
        </Grid>
    );
};

export default MainContent;
