import React, { Component } from 'react';
import styles from './SlideSubContent.scss';
import SlideSubContentList from '../SlideSubContentList';

class SlideSubContent extends Component {
  render() {
    const {
      variant,
      subContent,
      ...others
    } = this.props;

    return (
      <div className="slide-subContent" {...others}>
          {Object.keys(subContent).map(function(i) {
            const point = subContent[i].points.toString().split(",");
            return (
              <div key={i} className={styles.slideSubContent, styles[variant]}>
                {subContent[i].title ? <h4>{subContent[i].title}</h4> : null}
                <SlideSubContentList point={subContent[i].points} linkablePoints={subContent[i].linkablePoints}/>
              </div>
            )
          })}
      </div>
    );
  }
}

SlideSubContent.propTypes = {
  variant: React.PropTypes.string,
  subContent: React.PropTypes.object,
};

SlideSubContent.defaultProps = {
  subContent: {},
};

export default SlideSubContent;