import {  InputBase, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { searchInterface } from '../../interfaces/componentInterface/searchInterface';
import { colors } from '../../theme/colors';

const useStyles = makeStyles(({
    input:{
        border: `1px solid ${colors.grayPrimary}`,
        width: '100%',
        borderRadius: '2rem',
        padding: '0 1rem',
        backgroundColor: colors.white,
        '& .MuiInputBase-input':{
            textAlign: 'center',
        },
        '& ::placeholder':{
            textAlign: 'center'
        }
    }
}))

const SearchInput: FC<searchInterface> = ({...rest}) => {
    const classes = useStyles();
    return (
        <InputBase className={classes.input}  placeholder="Search" {...rest} />
    );
}

export default SearchInput;
