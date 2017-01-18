import React, { Component } from 'react';
import styles from './Slide.scss';
import SlideSubContent from '../SlideSubContent';

class Slide extends Component {
  render() {
    const {
      slides,
      ...others
    } = this.props;

    return (
      <div className={styles.slide}>
        { slides.title ? <h1>{slides.title}</h1> : null }
        <SlideSubContent subContent={slides.subContent} />
      </div>
    );
  }
}

export default Slide;