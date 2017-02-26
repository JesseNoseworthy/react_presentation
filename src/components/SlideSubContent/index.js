import React, { Component } from 'react';
import styles from './SlideSubContent.scss';
import SlideSubContentList from '../SlideSubContentList';
import SlideMedia from '../SlideMedia';

const SlideTitle = ({ innerHtml }) => (
  innerHtml ? <h2>{innerHtml}</h2> : null
);

const SlideContainer = ({ title, points, media }) => (
  <div className={styles.SlideSubContent}>
    <SlideTitle innerHtml={title} />
    <SlideMedia source={media} />
    <SlideSubContentList point={points} />
  </div>
);

const SlideSubContent = ({
  subContent,
  ...others
}) => (
  <div>
    {subContent.map((slideContent, i) => <SlideContainer key={i} {...slideContent} />)}
  </div>
);

SlideSubContent.propTypes = {
  subContent: React.PropTypes.array
};

SlideSubContent.defaultProps = {
  subContent: {},
};

export default SlideSubContent;