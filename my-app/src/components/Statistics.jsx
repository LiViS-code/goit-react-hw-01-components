import PropTypes from 'prop-types';

function Statistics({title, stats}) {
  return (
    <section className="statistics">
      <h2 className="title">{title && title}</h2>

      <ul className="stat-list">
        {stats.map(el => (
          <li className="item" key={el.id}>
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
  stats: PropTypes.array,
} 

export default Statistics;