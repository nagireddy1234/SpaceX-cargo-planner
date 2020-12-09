import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import MainContent from '../../components/mainContent/MainContent';
import Sidebar from '../../components/sidebar/Sidebar';
import { getAllshipmentRes } from '../../redux/actions/cargoBaysAction';
import shipmentData from '../../data/shipmentData.json';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerTypes } from '../../interfaces/reducerStateTypes/rootReducerTypes';
import Content from './Content';
import { saveData } from '../../helper/loadStateFromStorage';

const useStyles = makeStyles({
    wrapper: {
        paddingBottom: 0,
    },
});

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const shipments = useSelector((state: rootReducerTypes) => state.cargoBaysReducer.cargoBaysData);
    const [active, setActive] = useState(0);
    const [checkEmpty, setCheckEmpty] = useState(false);

    const [showContent, setShowContent] = useState({ id: '', name: '', email: '', boxes: '' });

    const loadShipments = () => {
        dispatch(getAllshipmentRes(shipmentData));
    };

    useEffect(() => {
        if (shipments && active === 0) {
            setShowContent(shipments[active]);
            setCheckEmpty(false);
        } else {
            setCheckEmpty(true);
        }
    }, [shipments]);

    const handleActive = (i: number) => {
        setActive(i);
        if (shipments) {
            setShowContent(shipments[i]);
        }
    };

    return (
        <Box className={classes.wrapper}>
            <Header handleSave={saveData} handleLoad={loadShipments} />
            <MainContent
                sidebar={<Sidebar active={active} data={shipments} onClick={handleActive} />}
                mainConent={<Content isEmpty={checkEmpty} data={showContent} />}
            />
        </Box>
    );
};

export default Home;
