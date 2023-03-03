import React from 'react';
import styles from 'styles/Logo.module.css';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Logo = ({ className }) => (

  <div className={
    cx(styles.Logo, { className })
  }
  >
    <h1>Bookstore CMS</h1>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};
export default Logo;
