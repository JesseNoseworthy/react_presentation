import React, { Component } from 'react';
import styles from './SlideSubContentList.scss';
import { map } from 'lodash';
import classnames from 'classnames';
import Link from '../Link';

const ListItem = ({ point, href, quote }) => {
  if (point) {
    if (href) {
      return (
        <li>
          <Link href={href} target="_blank">{point}</Link>
        </li>
      )
    }
    return <li className={classnames({[styles.isQuote]: quote })}>{point}</li>
  }
};

const SlideSubContentList = ({
  point,
  ...others
}) => (
  <ul className={styles.SlideSubContentList} {...others}>
    {point.map((point, i) => <ListItem key={i} {...point} /> )}
  </ul>
);

SlideSubContentList.propTypes = {
  point: React.PropTypes.array,
};

SlideSubContentList.defaultProps = {
  point: [],
};

export default SlideSubContentList;