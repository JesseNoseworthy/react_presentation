import React, { Component } from 'react';
import styles from './Image.scss';

const Image = ({
  variant,
  ...others
}) => (
  <img className={styles[variant]} {...others} />
);

Image.propTypes = {
  variant: React.PropTypes.string,
};

export default Image;