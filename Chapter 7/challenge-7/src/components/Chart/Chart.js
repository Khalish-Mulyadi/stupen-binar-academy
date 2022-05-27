import React from "react";
// import { Chart as ChartJS, CategoryScale, ArcElement, BarElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

// ini digunakan agar kita tidak perlu register lagi
// element dari ChartJS
import "chart.js/auto";

import "./Chart.css";

// ChartJS.register(CategoryScale, ArcElement, BarElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const dataLine = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const dataPie = {
  labels: ["Toyota", "Hyundai", "Honda", "Daihatsu", "Suzuki", "Nissan"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1,
      width: 2,
    },
  ],
};
const Chart = () => {
  return (
    <div className="charts">
      {/* <div className="chart">
        <h1>Line Chart</h1>
        <Line data={dataLine} />
      </div> */}

      <div className="chart">
        <h1>Mobil yang paling sering disewakan</h1>
        <Pie data={dataPie} />
      </div>

      {/* <div className="chart">
        <h1>Bar Chart</h1>
        <Bar data={dataLine} />
      </div> */}
    </div>
  );
};

export default Chart;
