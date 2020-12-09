import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Loader from './components/loader/Loader';
const Home = React.lazy(() => import('./views/home/Home'));

export class App extends React.Component {
    CloseButton = ({ closeToast }: { closeToast: any }) => (
        <i style={{ color: '#000' }} className="icon-Close_Nav" onClick={closeToast} />
    );
    render() {
        return (
            <React.Fragment>
                 <Helmet>
                <title>SpaceX-cargo-planner</title>
                </Helmet>
                <MuiThemeProvider theme={theme}>
                    <ToastContainer closeButton={this.CloseButton} />
                    <Router>
                        <Suspense fallback={<Loader/>}>
                            <Switch>
                                <Route  path="/" component={Home} />
                            </Switch>
                        </Suspense>
                    </Router>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
