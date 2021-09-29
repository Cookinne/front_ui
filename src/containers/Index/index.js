import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import { Carousel } from 'antd';
import img1 from '@src/assets/img1.jpeg';
import img3 from '@src/assets/img3.jpeg';
import img4 from '@src/assets/img4.jpeg';
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

  const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className={style.container}>
      <h2>首页</h2>
      <Carousel style={{ width: 450, margin: 'auto', background: 'pink' }} autoplay autoplaySpeed={4000}>
        <div>
          <img style={contentStyle} src={img1} alt="img1" />
        </div>
        <div>
          <img style={contentStyle} src={img3} alt="img3" />
        </div>
        <div>
          <img style={contentStyle} src={img4} alt="img4" />
        </div>
      </Carousel>
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
