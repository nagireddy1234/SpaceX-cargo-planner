import { Box, Button, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { sidebarInterface } from '../../interfaces/componentInterface/sidebarInterface';
import { shipmentInterfaceType } from '../../interfaces/responseDataInterface/shipmentInterface';
import { colors } from '../../theme/colors';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        height: 'calc(100vh - 69px)',
        overflowY: 'auto',
    },
    title: {
        padding: '0.5rem',
        cursor: 'pointer',
        width: '100%',
        borderRadius: 0,
        color: colors.primary,
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: colors.primary,
            color: colors.white,
        },
    },
    acitve: {
        backgroundColor: colors.primary,
        color: colors.white,
    },
});

const Sidebar: FC<sidebarInterface> = ({ data, onClick, active, ...rest }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            {data &&
                data.map((item: shipmentInterfaceType, i: number) => (
                    <Button
                        key={uuidv4()}
                        className={classNames(classes.title, active === i ? classes.acitve : '')}
                        {...rest}
                        onClick={() => onClick(i)}
                    >
                        {item.name}
                    </Button>
                ))}
        </Box>
    );
};

export default Sidebar;
