import React, { Component } from 'react';
import styles from './SlideSubContent.scss';
import SlideSubContentList from '../SlideSubContentList';
import SlideMedia from '../SlideMedia';

class SlideSubContent extends Component {
  render() {
    const {
      subContent,
      ...others
    } = this.props;

    const SlideTitle = ({ innerHtml }) => {
      return innerHtml ? <h2>{innerHtml}</h2> : null
    };

    const SlideContainer = ({ title, points, media }) => (
      <div className={styles.SlideSubContent}>
        <SlideMedia source={media} />
        <SlideTitle innerHtml={title} />
        <SlideSubContentList point={points} />
      </div>
    )

    return (
      <div>
        {subContent.map((slideContent, i) => <SlideContainer key={i} {...slideContent} />)}
      </div>
    )
  }
}

SlideSubContent.propTypes = {
  subContent: React.PropTypes.array
};

SlideSubContent.defaultProps = {
  subContent: {},
};

export default SlideSubContent;