import React, { Component } from 'react';
import styles from './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className={styles.heroContainer}>
        <h1>React Presentation</h1>
      </div>
    )
  }
}

export default Hero;