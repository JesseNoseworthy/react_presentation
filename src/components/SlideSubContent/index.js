import React, { Component } from 'react';
import styles from './SlideSubContent.scss';
import { map } from 'lodash';

class SlideSubContent extends Component {
  render() {
    const {
      variant,
      subContent,
      ...others
    } = this.props;

    return (
      <div className="react-subContent" className={styles.slideSubContent}>
          {Object.keys(subContent).map(function(i) {
            const point = subContent[i].points.toString().split(",");
            return (
              <div key={i}>
                <h1>{subContent[i].title}</h1>
                <ul>
                  {Object.keys(point).map(function(i) {
                    return <li key={i}>{point[i]}</li>
                  })}
                </ul>
              </div>
            )
          })}
      </div>
    );
  }
}

SlideSubContent.propTypes = {
  variant: React.PropTypes.string,
};

export default SlideSubContent;