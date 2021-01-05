import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import MainContent from '../../components/mainContent/MainContent';
import Sidebar from '../../components/sidebar/Sidebar';
import { getAllShipmentDataAPIcall } from '../../redux/actions/cargoBaysAction';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerTypes } from '../../interfaces/reducerStateTypes/rootReducerTypes';
import Content from './Content';
import { getActive, saveActive, saveData } from '../../helper/loadStateFromStorage';
import { htmlInput } from '../../interfaces/inputInterface';
import { shipmentInterfaceType } from '../../interfaces/responseDataInterface/shipmentInterface';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    wrapper: {
        paddingBottom: 0,
    },
});

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const routes = useHistory();

    const shipments = useSelector((state: rootReducerTypes) => state.cargoBaysReducer.cargoBaysData);
    const [active, setActive] = useState(getActive());
    const [checkEmpty, setCheckEmpty] = useState(false);
    const [search, setSearch] = useState('');
    const [filterSeach, setFilterSearch] = useState<Array<shipmentInterfaceType>>([]);
    const [searchNotFound, setSearchNotFound] = useState(false);
    const [showContent, setShowContent] = useState({ id: '', name: '', email: '', boxes: '' });

    const loadShipments = () => {
        dispatch(getAllShipmentDataAPIcall());
            dispatch(getAllShipmentDataAPIcall());
          toast.success('Load button overwritten successfully');
    };

    useEffect(() => {
        if (shipments) {
            setFilterSearch(shipments);
            setShowContent(shipments[active]);
            setCheckEmpty(false);
        } else {
            setCheckEmpty(true);
        }
    }, [shipments]);

    useEffect(() => {
        if (search !== '' && shipments) {
            setTimeout(() => {
                const data = shipments.filter((item: shipmentInterfaceType): any => {
                    if (item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1) {
                        return item;
                    }
                });
                if (!data.length) {
                    setSearchNotFound(true);
                } else {
                    setCheckEmpty(false);
                    setSearchNotFound(false);
                }
                setFilterSearch(data);
            }, 1000);
        } else {
            if (shipments) {
                setCheckEmpty(false);
                setFilterSearch(shipments);
                setSearchNotFound(false);
            }
        }
    }, [search]);

    const handleActive = (i: number) => {
        setActive(i);
        saveActive(i);
        routes.push(filterSeach[i].name.split(' ').join('-'));
        if (filterSeach) {
            setShowContent(filterSeach[i]);
        }
    };

    const handleSearch = (e: htmlInput) => {
        setSearch(e.target.value);
    };

    return (
        <Box className={classes.wrapper}>
            <Header handleSave={saveData} handleLoad={loadShipments} handleSearch={handleSearch} searchValue={search} />
            <MainContent
                sidebar={<Sidebar active={active} data={filterSeach} onClick={handleActive} />}
                mainConent={
                    <Content
                        shipmentData={shipments}
                        notFound={searchNotFound}
                        isEmpty={checkEmpty}
                        data={showContent}
                    />
                }
            />
        </Box>
    );
};

export default Home;




