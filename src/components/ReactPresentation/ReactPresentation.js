import React, { Component } from 'react';
import styles from './ReactPresentation.scss';
import '../../globalStyles/index.scss';
import Hero from '../Hero';

class ReactPresentation extends Component {
  render() {
    return (
      <div className={styles.ReactPresentation}>
        <Hero />
      </div>
    )
  }
}

export default ReactPresentation;