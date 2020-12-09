import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../components/header/Header';
import MainContent from '../../components/mainContent/MainContent';
import Sidebar from '../../components/sidebar/Sidebar';

const useStyles = makeStyles(({
    wrapper:{
        padding: '1rem',
        paddingBottom: 0
    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Header />
            <MainContent sidebar={<Sidebar/>} mainConent={"afdsdf"}/>
        </Box>
    );
};

export default Home;
