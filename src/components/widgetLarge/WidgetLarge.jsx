import "./WidgetLarge-styled.css";
import PropTypes from "prop-types";
import { lastTransactions } from "../../data";

function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>;
  };

  Button.propTypes = {
    type: PropTypes.string,
  };

  return (
    <div className="widgetLarge">
      <div className="widgetLargeTitle">Latest Transactions</div>
      <table className="widgetLargeTable">
        <thead>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">Customer</th>
            <th className="widgetLargeTh">Date</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {lastTransactions.map((item) => (
            <tr className="widgetLargeTr" key={item.userName}>
              <td className="widgetLargeUser">
                <img
                  src={item.img}
                  alt={item.img}
                  className="widgetLargeImage"
                />
                <span className="widgetLargeName">{item.userName}</span>
              </td>
              <td className="widgetLargeDate">{item.date}</td>
              <td>
                <span className="widgetLargeAmount">${item.amount}</span>
              </td>
              <td className="widgetLargeStatus">
                <Button type={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLarge;
