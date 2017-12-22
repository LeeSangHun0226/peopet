import React from 'react';
import { PropagateLoader } from 'react-spinners';
import styles from './Spinner.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Spinner = ({ loading }) => (
  <div className={cx('spinner-wrapper')}>
    <div className={cx('spinner')}>
      <PropagateLoader
        color={'#123abc'}
        loading={loading}
        size={20}
      />
    </div>
  </div>
)

export default Spinner;