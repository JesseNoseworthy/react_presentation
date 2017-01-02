import React, { Component } from 'react';
import styles from './SlideSubContentList.scss';
import { map } from 'lodash';

class SlideSubContentList extends Component {
  render() {
    const {
      point,
      ...others
    } = this.props;

    return (
      <ul className={styles.SlideSubContentList} {...others}>
        {Object.keys(point).map(function(i) {
          if (point[i]) {
            if(point[i].href) {
              return (
                <a href={point[i].href} target="_blank" key={i}>
                  <li>{point[i].point}</li>
                </a>
              )
            }
            return <li key={i}>{point[i].point}</li>
          }
        })}
      </ul>
    );
  }
}

SlideSubContentList.propTypes = {
  point: React.PropTypes.any,
};

SlideSubContentList.defaultProps = {
  point: {},
};

export default SlideSubContentList;