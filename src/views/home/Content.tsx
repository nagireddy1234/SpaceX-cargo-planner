import { Box, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { contentInterface } from '../../interfaces/componentInterface/contentInterface';
import { colors } from '../../theme/colors';

const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        padding: '2rem'
    },
    company: {
        fontSize: '2rem',
        lineHeight: '2.5rem',
        color: colors.black,
    },
    email: {
        fontSize: '1rem',
        lineHeight: '2.5rem',
        color: colors.primary,
    },
    title: {
        fontSize: '1rem',
        lineHeight: '1rem',
        color: colors.black,
        marginTop: '3rem',
    },
    input:{
        marginTop: '1rem',
        width: '50%'
    }
});

const Content: FC<contentInterface> = ({data}) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.company}>{data.name}</Typography>
            <Typography className={classes.email}>{data.email}</Typography>
            <Typography className={classes.title}>Number of required cargo bays </Typography>
            <TextField variant="outlined" label="Cargo Boxes"  className={classes.input} value={data.boxes} />
        </Box>
    );
};

export default Content;
