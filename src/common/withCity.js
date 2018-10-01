import {connect} from "react-redux";
import {citySet} from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  setCity: data => {
    dispatch(citySet(data));
  }
});

const mapStateToProps = state => ({
  city: state.city ? state.city : null
});

export default connect(mapStateToProps, mapDispatchToProps);
