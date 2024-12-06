import { useState, useEffect } from "react";
import { Loader } from "../loader/loader";
import { fetchNitrousOxideData } from '../../api/ApiClientWeather/ApiClientWeather';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './no2.css'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const NO2 = () => {
  const [NO2data, setNO2Data] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNO2Data = async () => {
      try {
        const data = await fetchNitrousOxideData();
      
        console.log(data)
        setNO2Data(data.nitrous); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getNO2Data();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  const chartData = {
    labels: NO2data.map(entry => entry.date),
    datasets: [{
      label: "NO2 Levels (ppb)",
      data: NO2data.map(entry => entry.trend), 
      borderColor: 'rgba(153, 102, 255, 1)',
      fill: false,
    }],
  };

  return (
    <div className="no2-container">
      <h2 className="no2-title">NO2 Levels:</h2>
      <Line data={chartData} className="no2-chart" />
    </div>
  );
}

export default NO2;
