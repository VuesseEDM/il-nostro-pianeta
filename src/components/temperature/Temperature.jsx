import { useState, useEffect } from "react";
import { fetchTemperatureData } from '../../api/ApiClientWeather/ApiClientWeather';
import { Loader } from "../loader/loader";
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'; 


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Temperature = () => {
  const [temperatureData, setTemperatureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTemperatureData = async () => {
      try {
        const data = await fetchTemperatureData();
       console.log("Data ricevuti:", data);
        setTemperatureData(data.result); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTemperatureData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  const chartData = {
    labels: temperatureData ? temperatureData.map(item => item.time) : [],
    datasets: [
      {
        label: "Temperatura (°C) - Station",
        data: temperatureData ? temperatureData.map(item => parseFloat(item.station)) : [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true, 
      },
      {
        label: "Temperatura (°C) - Land",
        data: temperatureData ? temperatureData.map(item => parseFloat(item.land)) : [],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true, 
      }
    ],
  };

  return (
    <div className="temperature-container">
      <h2 className="temperature-title">Temperatura:</h2>
      {temperatureData && temperatureData.length > 0 ? (
        <Line data={chartData} className="temperature-chart" />
      ) : (
        <p>Non ci sono dati disponibili.</p>
      )}
    </div>
  );
};

export default Temperature;
