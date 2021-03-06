import { Box, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { FC, memo, useEffect, useState } from 'react';
import { contentInterface } from '../../interfaces/componentInterface/contentInterface';
import { colors } from '../../theme/colors';
import Link from '@material-ui/core/Link';
import { shipmentInterfaceType } from '../../interfaces/responseDataInterface/shipmentInterface';
import { useDispatch } from 'react-redux';
import { getAllshipmentRes } from '../../redux/actions/cargoBaysAction';

const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        padding: '2rem',
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
    input: {
        marginTop: '1rem',
        width: '50%',
    },
    notFound: {
        fontSize: '2rem',
        textAlign: 'center',
    },
});

const Content: FC<contentInterface> = ({ isEmpty, notFound, shipmentData, data }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [cbValue, setCbValue] = useState('');

    useEffect(() => {
        if (data.boxes) {
            setCbValue(data.boxes);
        } else {
            setCbValue('');
        }
    }, [data]);

    const checkRequiredBays = (boxes: string) => {
        if (!['', null, undefined].includes(boxes)) {
            const splitBox = boxes.split(',');
            let cargoBays = 0;
            splitBox.forEach((item: string) => {
                cargoBays += +item;
            });

            let baysFind = cargoBays / 10;
            let totalBays = Math.ceil(baysFind);
            if (isNaN(cargoBays)) {
                return '';
            } else {
                return totalBays;
            }
        } else {
            return '';
        }
    };

    const handleCargoBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!['', null, undefined].includes(e.target.value)) {
            const splitBox = e.target.value.split(',');
            let cargoBays = 0;
            splitBox.forEach((item: string) => {
                cargoBays += +item;
            });
            if (!isNaN(cargoBays)) {
                setCbValue(e.target.value);
            } 
        }
    };

    const saveChange = () => {
        if (data.boxes !== cbValue && shipmentData) {
            const result = shipmentData.map((item: shipmentInterfaceType) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        boxes: cbValue,
                    };
                } else {
                    return item;
                }
            });
            dispatch(getAllshipmentRes(result));
        }
    };

    return (
        <Box className={classes.wrapper}>
            {!isEmpty && !notFound ? (
                <React.Fragment>
                    <Typography className={classes.company}>{data.name}</Typography>
                    <Typography>
                        {' '}
                        <Link className={classes.email} underline="none" href={`mailto:${data.email}`}>
                            {data.email}
                        </Link>
                    </Typography>
                    <Typography className={classes.title}>
                        Number of required cargo bays {checkRequiredBays(cbValue)}
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="Cargo Boxes"
                        className={classes.input}
                        value={cbValue}
                        onChange={handleCargoBox}
                        onBlur={saveChange}
                    />
                </React.Fragment>
            ) : notFound ? (
                <Typography className={classes.notFound}>No data found.</Typography>
            ) : (
                <Typography className={classes.notFound}>
                    No data found. please load the data by clicking on the load button!
                </Typography>
            )}
        </Box>
    );
};

export default memo(Content);
