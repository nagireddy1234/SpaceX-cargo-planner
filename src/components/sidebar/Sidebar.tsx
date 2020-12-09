import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { colors } from '../../theme/colors';

const useStyles = makeStyles({
    wrapper:{
        backgroundColor: colors.lighterPrimary,
        height: 'calc(100vh - 57px)'
    },
    title: {
        color: colors.primary,
        padding: '0.5rem',
        cursor: 'pointer',
        '&:hover':{
            backgroundColor: colors.primary,
            color: colors.white
        }
    },
});

const Sidebar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            {['company 1', 'company 2', 'company 3', 'company 4', 'company 5'].map((item: string) => (
                <Typography className={classes.title}>{item}</Typography>
            ))}
        </Box>
    );
};

export default Sidebar;
