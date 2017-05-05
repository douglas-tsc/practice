import { connect } from 'react-redux';
import { orderFood } from '../actions';
import YourTable from '../components/YourTable';

const mapStateToProps = (state) => ({
  value: state
});

const mapDispatchToProps = {
  orderFood
};

const YourOrder = connect(
  mapStateToProps, mapDispatchToProps
)(YourTable);

export default YourOrder;
