import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
// import { rootRoutes } from './routes/rootRoutes/rootRoutes';
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                {/* {rootRoutes.map((item:any, i:number) => {
                                    return <Route key={i} exact path={item.name} component={item.component} />;
                                })} */}
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </Suspense>
                    </Router>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
