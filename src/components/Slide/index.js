import React, { Component } from 'react';
import styles from './Slide.scss';
import SlideSubContent from '../SlideSubContent';

class Slide extends Component {
  render() {
    const {
      title,
      slides,
      ...others
    } = this.props;

    return (
      <div className={styles.slide}>
        <h1>{title}</h1>
        <SlideSubContent slides={slides} />
      </div>
    );
  }
}

export default Slide;