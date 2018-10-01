import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Indicator from './components/Loader';

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { component } = this.props;
        return(
            <div>
                <Indicator />
                {component}
            </div>
        );
    }
}

export default App;
