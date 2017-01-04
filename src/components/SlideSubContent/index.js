import React, { Component } from 'react';
import styles from './SlideSubContent.scss';
import SlideSubContentList from '../SlideSubContentList';

class SlideSubContent extends Component {
  render() {
    const {
      subContent,
      ...others
    } = this.props;

    return (
      <div className="slide-subContent" {...others}>
          {Object.keys(subContent).map(function(i) {
            return (
              <div key={i} className={styles.SlideSubContent}>
                {subContent[i].title ? <h3>{subContent[i].title}</h3> : null}
                <SlideSubContentList point={subContent[i].points} />
              </div>
            )
          })}
      </div>
    );
  }
}

SlideSubContent.propTypes = {
  subContent: React.PropTypes.object,
};

SlideSubContent.defaultProps = {
  subContent: {},
};

export default SlideSubContent;