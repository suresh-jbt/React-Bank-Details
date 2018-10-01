import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import reduxStore from './redux/store';
import App from './App';
import Home from './pages/Home';

class Routers extends React.Component {
    render(){
        return(
            <Provider store={reduxStore}>
                <Router history={browserHistory}>
                   <Route component={App}>
                      <Route path="/" components={{component : Home}} />
                   </Route>
                </Router>
            </Provider>
        );
    };
}

export default Routers;
