import { Grid, InputBase, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { FC } from 'react';
import { searchInterface } from '../../interfaces/componentInterface/searchInterface';
import { colors } from '../../theme/colors';

const useStyles = makeStyles({
    wrapper: {
        borderRadius: '2rem',
        border: `1px solid ${colors.grayPrimary}`,
        backgroundColor: colors.white,
    },
    input: {
        width: 'calc(98% - 1.5rem)',
        padding: '0 1rem',
        '& .MuiInputBase-input': {
            textAlign: 'start',
        },
        '& ::placeholder': {
            textAlign: 'start',
        },
    },
    icon: {
        fontSize: '1.5rem',
    },
});

const SearchInput: FC<searchInterface> = ({ ...rest }) => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justify="center" className={classes.wrapper}>
            <Search />
            <InputBase className={classes.input} placeholder="Search" {...rest} />
        </Grid>
    );
};

export default SearchInput;
