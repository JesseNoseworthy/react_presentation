import React, { Component } from 'react';
import styles from './SlideSubContentList.scss';
import { map } from 'lodash';
import classnames from 'classnames';
import Link from '../Link';

class SlideSubContentList extends Component {
  render() {
    const {
      point,
      ...others
    } = this.props;

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

    return (
      <ul className={styles.SlideSubContentList} {...others}>
        {point.map((point, i) => <ListItem key={i} {...point} /> )}

      </ul>
    );
  }
}

SlideSubContentList.propTypes = {
  point: React.PropTypes.array,
};

SlideSubContentList.defaultProps = {
  point: [],
};

export default SlideSubContentList;