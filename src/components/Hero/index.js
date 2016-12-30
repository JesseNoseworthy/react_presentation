import React, { Component } from 'react';
import styles from './Hero.scss';
import Image from '../Image';

class Hero extends Component {
  render() {
    return (
      <div className={styles.heroContainer}>
        <Image variant="hero" src={require('../../app/assets/react-logo.png')} />
        <h1>An Introduction to <span className={styles.reactHighlight}>React</span></h1>
      </div>
    )
  }
}

export default Hero;