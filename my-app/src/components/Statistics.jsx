import PropTypes from 'prop-types';

function Statistics({title, stats}) {
  return (
    <section class="statistics">
      <h2 class="title">{title && title}</h2>

      <ul class="stat-list">
        {stats.map(el => (
          <li class="item">
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}%</span>
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