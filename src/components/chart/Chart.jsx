import PropTypes from "prop-types";
import "./Chart-styled.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  grid: PropTypes.bool,
  dataKey: PropTypes.string.isRequired,
  dataKeyTwo: PropTypes.string,
};

function Chart({ title, data, grid, dataKey }) {
  return (
    <div className="chart-container">
      <div className="content-container">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="99%" aspect={4 / 2}>
          <LineChart width={500} height={300} data={data}>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 5" />}
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#5550bd"
              strokeWidth={2}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
