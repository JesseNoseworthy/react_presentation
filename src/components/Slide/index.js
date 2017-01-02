import React, { Component } from 'react';
import styles from './Slide.scss';
import SlideSubContent from '../SlideSubContent';

class Slide extends Component {
  render() {
    const {
      data,
      variant,
      title,
      subContent,
      ...others
    } = this.props;

    return (
      <div className={styles.slide}>
        <h1>{title}</h1>
        <SlideSubContent subContent={subContent} />
      </div>
    );
  }
}

Slide.propTypes = {
  variant: React.PropTypes.string,
};

export default Slide;