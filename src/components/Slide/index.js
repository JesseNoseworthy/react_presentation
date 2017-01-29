import React, { Component } from 'react';
import styles from './Slide.scss';
import SlideSubContent from '../SlideSubContent';
import Image from '../Image';

class Slide extends Component {
  render() {
    const {
      slides,
      ...others
    } = this.props;

    return (
      <div className={styles.slide}>
        { slides.title ? <h1>{slides.title}</h1> : null }
        { slides.media ? <Image src={slides.media} /> : null }
        <SlideSubContent subContent={slides.subContent} />
      </div>
    );
  }
}

export default Slide;