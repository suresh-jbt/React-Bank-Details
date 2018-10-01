import React, {Component} from 'react';
import Select from 'react-select';
import API from '../utils/utils';
import withBank from '../common/withBank';
import withCity from '../common/withCity';
import withLoader from '../common/withLoader';

class Cities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      cities: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const { bank } = this.props;
    if (bank != nextProps.bank) {
      this.setState({selectedCity: ''});
      this._loadCities(nextProps.bank);
    }
  }

  _loadCities = (bankName) => {
    const { setLoader } = this.props;
    setLoader(true);
    API.getCitiesByBank({bankName: bankName.value}).then(({cities}) => {
      setLoader(false);
      cities = cities.map((city) => ({label:city, value:city}))
      this.setState({cities})
    });
  }

  _onSelect = (selectedCity) => {
    const { setCity } = this.props;
    setCity(selectedCity);
    this.setState({selectedCity});
  }

  render() {
    const {cities, selectedCity} = this.state;
    return (
      <Select
        getItemValue={(item) => item.label}
        options={cities}
        value={selectedCity}
        placeholder={'Select City...'}
        isSearchable={true}
        onChange={this._onSelect.bind(this)}
      />
    );
  }
}

export default withLoader(withCity(withBank(Cities)));
