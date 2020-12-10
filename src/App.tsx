import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Loader from './components/loader/Loader';
import { Close } from '@material-ui/icons';
import { rootRoutes } from './routes/rootRoutes/rootRoutes';
import { rootRouteInterface } from './interfaces/routeInterface/rootRouteInterface';

export class App extends React.Component {
    CloseButton = ({ closeToast }: { closeToast: any }) => <Close style={{ color: '#000' }} onClick={closeToast} />;
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>SpaceX-cargo-planner</title>
                </Helmet>
                <MuiThemeProvider theme={theme}>
                    <ToastContainer closeButton={this.CloseButton} />
                    <Router>
                        <Suspense fallback={<Loader />}>
                            <Switch>
                                {rootRoutes.map((item: rootRouteInterface, i: number) => (
                                    <Route key={i} path={item.path} component={item.component} />
                                ))}
                            </Switch>
                        </Suspense>
                    </Router>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
