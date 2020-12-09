import {  InputBase, makeStyles } from '@material-ui/core';
import React from 'react';
import { colors } from '../../theme/colors';

const useStyles = makeStyles(({
    input:{
        border: `1px solid ${colors.grayPrimary}`,
        width: '100%',
        borderRadius: '2rem',
        textAlign: 'center',
        padding: '0 1rem',
        '& ::placeholder':{
            textAlign: 'center'
        }
    }
}))

const SearchInput = () => {
    const classes = useStyles();
    return (
        <InputBase className={classes.input} placeholder="Search" />
    );
}

export default SearchInput;
