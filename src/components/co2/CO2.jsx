import React, { useState, useEffect } from "react";
import { Loader } from "../loader/loader";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './co2.css'
import { fetchCO2Data } from "../../api/ApiClientWeather/ApiClientWeather";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CO2 = () => {
  const [NO2data, setNO2Data] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCO2Data = async () => {
      try {
        //  richiesta  API
        const data = await fetchCO2Data();
        console.log(data)
       setNO2Data(data.co2)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCO2Data();
  }, []);

  if (loading) return <Loader />;

  if (error) return <p>Errore: {error}</p>;

  const chartData = {
    labels: NO2data.map(entry => entry.year),
    datasets: [{
      label: "CO2 Levels (ppm)",
      data: NO2data.map(entry => entry.trend),
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    }],
  };

  return (
    <div className="co2-container">
      <h1 className="co2-title">Livelli di CO2</h1>
      <Line data={chartData} className="co2-chart" />
    </div>
  );
};

export default CO2;
