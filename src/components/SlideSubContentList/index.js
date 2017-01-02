import React, { Component } from 'react';
import styles from './SlideSubContentList.scss';
import { map } from 'lodash';

class SlideSubContentList extends Component {
  getListItem(point, linkablePoints) {
    // render() {
      return (
        Object.keys(point).map(function(i) {
          if(point[i] && !point[i].href) {
           return <li key={i}>{point[i].point}</li>
          } else if (point[i].href) {
            console.log(point[i]);
            return <a href={point[i].href} target="_blank" ><li key={i}>{point[i].point}</li></a>
          }
        })
      )
    // }
  }
  render() {
    const {
      variant,
      point,
      linkablePoints,
      ...others
    } = this.props;

    const parsePoint = point.toString().split(",");
    return (
      <ul className={styles.slideSubContentList, styles[variant]} {...others}>
        {this.getListItem(point, linkablePoints)}
      </ul>
    );
  }
}

SlideSubContentList.propTypes = {
  variant: React.PropTypes.string,
  // point: React.PropTypes.array,
};

SlideSubContentList.defaultProps = {
  // point: [],
};

export default SlideSubContentList;