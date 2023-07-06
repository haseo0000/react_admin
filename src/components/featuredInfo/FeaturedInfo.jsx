import "./FeaturedInfo-styled.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  const Data = [
    {
      title: "Revenue",
      money: "2,415",
      rate: -11.4,
    },
    {
      title: "Sales",
      money: "3,415",
      rate: -1.4,
    },
    {
      title: "Cost",
      money: "4,415",
      rate: 21.4,
    },
  ];

  return (
    <div className="featured">
      {Data.map((item) => (
        <div className="featuredItem" key={item.title}>
          <div className="featuredTitle">{item.title}</div>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{`$${item.money}`}</span>
            <span className="featuredMoneyRate">
              {`${item.rate >= 0 ? " +" : " "}${item.rate}`}
              {item.rate >= 0 ? (
                <ArrowUpward className="featuredIcon" sx={{ fontSize: 14 }} />
              ) : (
                <ArrowDownward
                  className="featuredIcon negative"
                  sx={{ fontSize: 14 }}
                />
              )}
            </span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>
      ))}
    </div>
  );
}
