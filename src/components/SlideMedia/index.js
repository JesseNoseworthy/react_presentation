import React, { Component } from 'react';
import styles from './SlideMedia.scss';
import Image from '../Image';

const SlideMedia = ({
  source,
  ...others
}) => (
  source ? <Image className={styles.SlideMedia} src={source} /> : null
);

export default SlideMedia;