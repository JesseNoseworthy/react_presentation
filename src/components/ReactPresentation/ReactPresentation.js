import React, { Component } from 'react';
import styles from './ReactPresentation.scss';
import '../../globalStyles/index.scss';
import Hero from '../Hero';
import Slide from '../Slide';
import appData from '../../app/data/data.json';

class ReactPresentation extends Component {
  render() {
    const slides = appData.slides;
    return (
      <div className={styles.ReactPresentation}>
        <Hero />
        {slides.map((el, i) => 
          <Slide key={i} slides={el} />)}
      </div>
    )
  }
}

export default ReactPresentation;