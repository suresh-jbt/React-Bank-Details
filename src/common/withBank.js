import {connect} from "react-redux";
import {bankSet} from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  setBank: data => {
    dispatch(bankSet(data));
  }
});

const mapStateToProps = state => ({
  bank: state.bank ? state.bank : null
});

export default connect(mapStateToProps, mapDispatchToProps);
