import React, { Component } from 'react';
import styles from './Slide.scss';

class Slide extends Component {
  render() {
    const {
      data,
      variant,
      ...others
    } = this.props;

    return (
      <div>
        {Object.keys(data).map(function(i) {
          return (
            <div key={i}>
              <h1>{data[i].title}</h1>
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