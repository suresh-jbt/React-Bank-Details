import React, {Component} from 'react';
import API from '../utils/utils';
import withBank from '../common/withBank';
import withCity from '../common/withCity';
import withLoader from '../common/withLoader';

class Branches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      branches: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const { city } = this.props;
    this.setState({branches: []});
    if (city != nextProps.city) {
      this._loadBranches(nextProps.bank, nextProps.city);
    }
  }

  _loadBranches = (bank, city) => {
    if (bank != null && city != null) {
      const { setLoader } = this.props;
      setLoader(true);
      API.getBranches({bank_name: bank.value, city: city.value}).then(({branches}) => {
        setLoader(false);
        this.setState({branches});
      });
    }
  }

  render() {
    const { branches } = this.state;
    return (
      <div className="row">
        {
          branches.map((branch, key) =>
            <div className="col-md-4" key={key}>
              <div className="card mb-4 box-shadow">
                <div className="text-center branch-title">
                  <b>{branch.branch}</b>
                </div>
                <div className="card-body">
                  <div className="row">
                    <span className="col-4 col-sm-4 col-md-4">IFSC : </span>
                    <small className="col-8 col-sm-8 col-md-8 text-muted">{branch.ifsc}</small>
                  </div>
                  <div className="row">
                    <span className="col-4 col-sm-4 col-md-4">Address : </span>
                    <small className="col-8 col-sm-8 col-md-8 text-muted">{branch.address}</small>
                  </div>
                  <div className="row">
                    <span className="col-4 col-sm-4 col-md-4">District : </span>
                    <small className="col-8 col-sm-8 col-md-8 text-muted">{branch.district}</small>
                  </div>
                  <div className="row">
                    <span className="col-4 col-sm-4 col-md-4">State : </span>
                    <small className="col-8 col-sm-8 col-md-8 text-muted">{branch.state}</small>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {
          branches.length == 0 &&
          <div className="col-sm-12 text-center">
            <h6>
              <i>
                No Results Found!
              </i>
            </h6>
          </div>
        }

      </div>
    );
  }
}

export default withLoader(withCity(withBank(Branches)));
