import { Box, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { contentInterface } from '../../interfaces/componentInterface/contentInterface';
import { colors } from '../../theme/colors';

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

const Content: FC<contentInterface> = ({ isEmpty, notFound, data }) => {
    const classes = useStyles();
    const [cbValue, setCbValue] = useState('');

    useEffect(() => {
        if (data.boxes) {
            setCbValue(data.boxes);
        } else {
            setCbValue('');
        }
    }, [data]);

    const checkRequiredBays = (boxes: string) => {
        if (!['', NaN, null, undefined].includes(boxes)) {
            const splitBox = boxes.split(',');
            let cargoBays = 0;
            splitBox.forEach((item: string) => {
                cargoBays += +item;
            });
            let baysFind = cargoBays / 10;
            let totalBays = Math.ceil(baysFind);
            return totalBays;
        } else {
            return '';
        }
    };

    const handleCargoBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCbValue(e.target.value);
    };

    return (
        <Box className={classes.wrapper}>
            {!isEmpty && !notFound ? (
                <React.Fragment>
                    <Typography className={classes.company}>{data.name}</Typography>
                    <Typography className={classes.email}>{data.email}</Typography>
                    <Typography className={classes.title}>
                        Number of required cargo bays {checkRequiredBays(cbValue)}
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="Cargo Boxes"
                        className={classes.input}
                        value={cbValue}
                        onChange={handleCargoBox}
                    />
                </React.Fragment>
            ) : notFound ? (
                <Typography className={classes.notFound}>
                    No data found.
                </Typography>
            ) : (
                <Typography className={classes.notFound}>
                    No data found. please load the data by clicking on the load button!
                </Typography>
            )}
        </Box>
    );
};

export default Content;
