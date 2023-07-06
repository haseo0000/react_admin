import { useEffect, useState } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import "./Home-styled.css";
import { userData } from "../../data";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(userData);
  }, []);

  if (!data) return;

  return (
    <div className="home-container">
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
