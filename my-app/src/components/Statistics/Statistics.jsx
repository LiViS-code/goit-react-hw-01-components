import PropTypes from 'prop-types';
import randomColor from '../../lib/random-color';
function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title && title}</h2>

      <ul className="stat-list">
        {stats.map(el => (
          <li
            className="item"
            key={el.id}
            style={{ backgroundColor: randomColor(100, 30, 1) }}
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
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
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
