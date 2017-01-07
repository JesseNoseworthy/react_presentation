import React, { Component } from 'react';
import styles from './SlideSubContent.scss';
import SlideSubContentList from '../SlideSubContentList';

class SlideSubContent extends Component {
  render() {
    const {
      subContent,
      ...others
    } = this.props;

    const SlideTitle = ({ innerHtml }) => {
      return innerHtml ? <h2>{innerHtml}</h2> : null
    };

    const SlideContainer = ({ title, points }) => (
      <div className={styles.SlideSubContent}>
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