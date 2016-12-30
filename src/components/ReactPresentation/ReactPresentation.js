import React, { Component } from 'react';
import styles from './ReactPresentation.scss';
import '../../globalStyles/index.scss';
import Hero from '../Hero';
import Slide from '../Slide';
import appData from '../../app/data/data.json';

class ReactPresentation extends Component {
  render() {
    return (
      <div className={styles.ReactPresentation}>
        <Hero />
        <Slide data={appData.slides} />
      </div>
    )
  }
}

export default ReactPresentation;