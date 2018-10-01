import React, {Component} from 'react';
import withLoader from '../common/withLoader';
import Loader from 'react-loader-spinner';

class Indicator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {loader} = this.props;
    console.log('loader', loader);
    return (
      <div>
        {
          (loader) && <div className="loader">
            <Loader
              type="Plane"
              color="#00BFFF"
              height="100"
              width="100"
            />
          </div>
        }
      </div>
    );
  }
}

export default withLoader(Indicator);
