import React, { Component } from 'react';
import styles from './SlideSubContentList.scss';
import { map } from 'lodash';
import Link from '../Link';

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
                <Link href={point[i].href} target="_blank" key={i}>
                  <li>{point[i].point}</li>
                </Link>
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