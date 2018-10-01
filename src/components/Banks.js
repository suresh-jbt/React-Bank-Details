import React, {Component} from 'react';
import Select from 'react-select';
import API from '../utils/utils';
import withBank from '../common/withBank';
import withLoader from '../common/withLoader';

class Banks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBank: '',
      banks: []
    }
  }

  componentWillMount() {
    this._loadBanks();
  }

  _onSelect = (selectedBank) => {
    const { setBank } = this.props;
    setBank(selectedBank);
    this.setState({selectedBank})
  }

  _loadBanks = () => {
    const { setLoader } = this.props;
    setLoader(true);
    API.getAllBanks().then(({banks}) => {
      setLoader(false);
      banks = banks.map((bank) => ({label:bank, value:bank}))
      this.setState({banks});
    });
  }

  render() {
    const {banks, selectedBank} = this.state;
    return (
      <Select
        getItemValue={(item) => item.label}
        options={banks}
        value={selectedBank}
        placeholder={'Select Bank...'}
        isSearchable={true}
        onChange={this._onSelect.bind(this)}
      />
    );
  }
}

export default withLoader(withBank(Banks));
