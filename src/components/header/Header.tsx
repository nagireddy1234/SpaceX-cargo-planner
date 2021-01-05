import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FC, memo } from 'react';
import { headerInterface } from '../../interfaces/componentInterface/headerInterface';
import { colors } from '../../theme/colors';
import CustomButton from '../buttons/CustomButton';
import SearchInput from '../inputs/SearchInput';
import Link from '@material-ui/core/Link';
import { saveActive } from '../../helper/loadStateFromStorage';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.grayPrimary,
        // boxShadow: '0 0 10px -1px rgba(0,0,0, 0.2)',
        position: 'sticky',
        padding: '0.5rem 1rem',
        top: 0,
        zIndex: 2,
    },
    HeaderStyles:{
        cursor:"pointer",
        '@media (max-width:967px)':{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    TitleStyles:{
        color:colors.black,
    },
    buttonShift: {
        marginRight: '1rem',
    },
    ResponsiveStyles:{
        '@media (max-width:967px)':{
        },
    },
    buttonStyles:{
        '@media (max-width:967px)':{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
});


const Header: FC<headerInterface> = ({ handleLoad, handleSave, handleSearch, searchValue }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.wrapper}>
            <Grid item md={3} sm={12} xs={12} className={classes.HeaderStyles}>
                <Typography variant="h4" onClick={()=>saveActive(0)}> <Link href="/" underline="none" className={classes.TitleStyles}>Cargo Planner</Link></Typography>
            </Grid>
            <Grid item container alignItems="center" justify="center" md={6}  sm={12} xs={12}>
                <SearchInput onChange={handleSearch} value={searchValue}  />
            </Grid>
            <Grid item md={3}  sm={12} xs={12} container alignItems="center" justify="flex-end" className={classes.buttonStyles}>
                <CustomButton externalClass={classes.buttonShift} onClick={handleLoad}>
                    Load
                </CustomButton>
                <CustomButton variant="secondary" onClick={handleSave}>
                    Save
                </CustomButton>
            </Grid>
        </Grid>
    );
};

export default memo(Header);
