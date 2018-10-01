import {connect} from "react-redux";
import {loaderSet} from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  setLoader: data => {
    dispatch(loaderSet(data));
  }
});

const mapStateToProps = state => ({
  loader: state.loader ? state.loader : false
});

export default connect(mapStateToProps, mapDispatchToProps);
