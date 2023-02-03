import Layout from "@/components/Layout";
import Form from "@/components/Form";
import Chart from "@/components/Chart";

import { useEffect, useState } from "react";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState("no");

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, [render]);
  // console.log(data);

  return (
    <Layout>
      <div>
        <div className="db__contents">
          <div className="db__contents-top">
            <table className="db__table list" id="devicesList">
              <thead></thead>

              <tbody>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Power</th>
                  <th></th>
                </tr>
                {data.map((article, index) => {
                  return (
                    <tr key={index}>
                      <td>{article.name}</td>
                      <td>{article.id}</td>
                      <td>{article.power}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="db__table-total">
              <span>Total: </span>
              <span id="val">
                {data.reduce((a, b) => a + parseInt(b.power), 0)}
              </span>
            </div>
          </div>

          <div className="db__contents-bottom">
            <div className="db__chart container">
              <h1>Power Consumption</h1>
              <div>
                <Chart data={data} />
              </div>
            </div>
            <Form setRender={setRender}></Form>
          </div>
        </div>
        {/* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> */}
      </div>
    </Layout>
  );
};

export default DashBoard;
