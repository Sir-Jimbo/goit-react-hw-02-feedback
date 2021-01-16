import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: stat.color }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
