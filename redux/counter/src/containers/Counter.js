import { connect } from 'react-redux';
import { add, minus } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => ({
  value: state
});

const mapDispatchToProps = {
  add,
  minus
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Container;
