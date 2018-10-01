import React, {Component} from 'react';
import Banks from '../components/Banks';
import Cities from '../components/Cities';
import Branches from '../components/Branches';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center page-title"><i> Bank Branches </i></h3>
        <hr/>
        <br/>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 bank-section">
            <Banks/>
          </div>
          <br/>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <Cities/>
          </div>
        </div>
        <br/>
        <hr/>
        <Branches/>
      </div>
    );
  }
}

export default Home;
