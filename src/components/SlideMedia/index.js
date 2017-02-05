import React, { Component } from 'react';
import styles from './SlideMedia.scss';
import Image from '../Image';

class SlideMedia extends Component {
  render() {
    const {
      source,
      ...others
    } = this.props;

    return (
      source ? <Image className={styles.SlideMedia} src={source} /> : null
    );
  }
}

export default SlideMedia;