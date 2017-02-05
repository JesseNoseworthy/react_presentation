import React, { Component } from 'react';
import styles from './Link.scss';

const Link = ({
  href,
  children,
  variant,
  ...others
}) =>  (
  <a className={styles[variant]} href={href} {...others}>
    {children}
  </a>
);

Link.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.any,
  variant: React.PropTypes.string,
};

export default Link;