import React, { Component } from 'react';
import styles from './SlideSubContentList.scss';
import { map } from 'lodash';

class SlideSubContentList extends Component {
  render() {
    const {
      variant,
      point,
      ...others
    } = this.props;

    return (
      <ul className={styles.slideSubContentList} {...others}>
        {Object.keys(point).map(function(i) {
          return point[i] ? <li key={i}>{point[i]}</li> : null
        })}
      </ul>
    );
  }
}

SlideSubContentList.propTypes = {
  variant: React.PropTypes.string,
  point: React.PropTypes.array,
};

SlideSubContentList.defaultProps = {
  point: [],
};

export default SlideSubContentList;