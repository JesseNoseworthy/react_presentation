import React, { Component } from 'react';
import styles from './SlideSubContent.scss';
import SlideSubContentList from '../SlideSubContentList';

class SlideSubContent extends Component {
  render() {
    const {
      slides,
      ...others
    } = this.props;

    const SlideTitle = ({ innerHtml }) => {
      return innerHtml ? <h2>d</h2> : null
    };

    const SlideContainer = ({ subContent, className, points }) => (
      <div className={className}>
        <SlideTitle innerHtml={subContent} />
      </div>
    )

    return (
      <div>
        {slides.map((slideContent, i) => <SlideContainer key={i} {...slideContent} />)}
      </div>
    )
  }
}

SlideSubContent.propTypes = {
  subContent: React.PropTypes.object,
};

SlideSubContent.defaultProps = {
  subContent: {},
};

export default SlideSubContent;