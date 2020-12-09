import React, { FC } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { CustomButtonInterface } from '../../interfaces/buttonsInterfaces';
import { colors } from '../../theme/colors';
import classNames from 'classnames';

const useStyles = makeStyles({
    button: {
        minWidth: '5rem',
        borderRadius: '0.2rem',
    },
    primary: {
        background: colors.primary,
        color: colors.white,
        "&:hover":{
            backgroundColor: colors.primary
        }
    },
    secondary: {
        backgroundColor: colors.black,
        color: colors.white,
        "&:hover":{
            backgroundColor: colors.black
        }

    },
});

const CustomButton: FC<CustomButtonInterface> = ({ variant, children, externalClass, ...rest }) => {
    const classes: any = useStyles();

    return (
        <Button
            disableFocusRipple
            className={classNames(classes.button, variant ? classes[variant] : classes.primary, externalClass)}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
