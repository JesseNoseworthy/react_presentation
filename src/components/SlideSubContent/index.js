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
                {subContent[i].title ? <h4>{subContent[i].title}</h4> : null}
                <ul>
                  {Object.keys(point).map(function(i) {
                    return point[i] ? <li key={i}>{point[i]}</li> : null
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