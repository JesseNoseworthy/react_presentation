import React, { Component } from 'react';
import styles from './Slide.scss';
import SlideSubContent from '../SlideSubContent';
import SlideMedia from '../SlideMedia';

const Slide = ({
  slides,
  ...others
}) => (
  <div className={styles.slide}>
    { slides.title ? <h1>{slides.title}</h1> : null }
    <SlideMedia source={slides.media} />
    <SlideSubContent subContent={slides.subContent} />
  </div>
);

export default Slide;