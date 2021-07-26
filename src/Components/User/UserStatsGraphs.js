import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data.length > 0)
      setTotal(
        data
          .map((item) => Number(item.acessos))
          .reduce((acc, item) => acc + item)
      );
    console.log(data);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
      <div>{total > 0 && <VictoryPie data={graph} />}</div>
    </section>
  );
};

export default UserStatsGraphs;
