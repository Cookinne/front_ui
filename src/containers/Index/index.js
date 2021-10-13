import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import * as actions from './actions';
import style from './style.scss';

const Index = (props) => {
  const [a, setA] = useState([]);

  useEffect(() => {
    console.info('this is index - useEffect');
  }, []);
  useEffect(() => {
    setA([1, 2, 3, 4, 5]);
  }, [props.updateList]);

  return (
    <div className={style.container}>
      <div className={style.title}>FRONT_UI  🔨</div>
    </div>
  );
};

Index.propTypes = {
  // getTest1: func.isRequired,
  // getTest2: func.isRequired,
  // data1: PropTypes.array,
  // data2: PropTypes.array,
};

Index.defaultProps = {
  // data1: [],
  // data2: [],
};

function mapStateToProps(state) {
  return {
    // data1: state.IndexReducer.data1,
    // data2: state.IndexReducer.data2,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
