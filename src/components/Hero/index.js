import React, { Component } from 'react';
import styles from './Hero.scss';
import Image from '../Image';
import reactLogo from '../../app/assets/react-logo.png';

const Hero = () => (
  <div className={styles.heroContainer}>
    <Image variant="hero" src={reactLogo} />
    <h1>An Introduction to <span className={styles.reactHighlight}>React</span></h1>
  </div>
);

export default Hero;