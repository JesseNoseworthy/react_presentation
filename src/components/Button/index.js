import React, { Component } from 'react';
import styles from './Button.scss';

const Button = ({
  children,
  variant,
  ...others
}) => (
  <button className={styles[variant]} {...others}>
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.any,
  variant: React.PropTypes.string,
};

Button.defaultTypes = {
  children: '',
};

export default Button;