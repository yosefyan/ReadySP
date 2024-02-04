import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js/auto";
import { useContext, useEffect, useState } from "react";
import DynamicContext from "../store/DynamicContext";
import { TSortedData } from "../types/componentTypes";
import { TUsersData } from "../types/constantsTypes";

const Graph = () => {
  const { usersData } = useContext(DynamicContext);

  const [sortedData, setSortedData] = useState<TSortedData>({
    Admin: 0,
    Business: 0,
    Normal: 0,
  });

  useEffect(() => {
    setSortedData((prev) => {
      const updatedData: TSortedData = {};
      Object.keys(prev).map((key) => {
        updatedData[key] = usersData?.filter(
          (user: TUsersData) => user.role === key
        ).length;
      });
      return updatedData;
    });
  }, [usersData]);

  ChartJS.register(...registerables);
  const data = {
    labels: ["Admin", "Business", "Normal"],
    datasets: [
      {
        label: "Roles",
        data: [sortedData?.Admin, sortedData?.Business, sortedData?.Normal],
        borderColor: "rgb(249 115 22 / 0.25)",
        borderWidth: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            weight: "bold",
            size: 15,
          },
        },
      },
      x: {
        ticks: {
          font: {
            weight: "bold",
            size: 25,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Roles Difference",
        font: {
          size: 22,
          weight: "bolder",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Graph;
