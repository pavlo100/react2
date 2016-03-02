import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/scoreboard';

const cx = classNames.bind(styles);

const Scoreboard = ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    return (
    <li className={cx('scoreboard__list-item')} key={key}>
      <span className={cx('scoreboard__topic')}>{topic.text}</span>
      <span className={cx('scoreboard__count')}>{topic.count}</span>
    </li>);
  });
  return (
    <div className={cx('scoreboard')}>
      <h3 className={cx('scoreboard__header')}>Vote count</h3>
      <ul className={cx('scoreboard__list')}>
        {topicListItems}
      </ul>
    </div>
  );
};

Scoreboard.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Scoreboard;
