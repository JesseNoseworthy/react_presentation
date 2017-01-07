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

    const List = ({ point, href }) => {
      if (point) {
        if (href) {
          return (
            <Link href={href} target="_blank">
              <li>{point}</li>
            </Link>
          )
        }
        return <li className={classnames({[styles.isQuote]: point.quote })}>{point}</li>
      }
    };

    return (
      <ul className={styles.SlideSubContentList} {...others}>
        {point.map((point, i) => <List key={i} {...point} /> )}

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