import { useState, useEffect } from "react";
import { Loader } from "../loader/loader";
import { fetchMethaneData } from "../../api/ApiClientWeather/ApiClientWeather";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './methane.css'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Methane = () => {
  const [methaneData, setMethaneData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMethaneData = async () => {
      try {
        const data = await fetchMethaneData();
      
        console.log(data);
        setMethaneData(data.methane); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMethaneData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  const chartData = {
    labels: methaneData.map(entry => entry.date), // 'date' =asse X
    datasets: [{
      label: "Methane Levels (ppm)",
      data: methaneData.map(entry => entry.trend), //'trend' = dati del grafico
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false,
    }],
  };

  return (
    <div className="methane-container">
      <h2 className="methane-title">Metano:</h2>
      <Line data={chartData} className="methane-chart" />
    </div>
  );
};

export default Methane;
