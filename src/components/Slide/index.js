import React, { Component } from 'react';
import styles from './Slide.scss';

class Slide extends Component {
  render() {
    const {
      data,
      variant,
      title,
      subTitle,
      ...others
    } = this.props;

    return (
      <div className="react-slides" className={styles.slide}>
        <h1>{title}</h1>
        {Object.keys(subTitle).map(function(i) {
          const a = subTitle[i].points;
          console.log(a);
          return (
            <div key={i}>
              <h4>{subTitle[i].title}</h4>
              <ul>
                <li>{subTitle[i].points.split()}</li>
              </ul>
            </div>
          )
        })}
      </div>
    );
  }
}

Slide.propTypes = {
  variant: React.PropTypes.string,
};

export default Slide;