import axios from "axios";

const API_BASE_URL = "https://global-warming.org/api";

export const fetchCO2Data = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/co2-api`);
    return response.data;
  } catch (error) {
    throw new Error("Errore nel recupero dei dati CO2: " + error.message);
  }
};

export const fetchMethaneData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/methane-api`);
    return response.data;
  } catch (error) {
    throw new Error("Errore nel recupero dei dati metano: " + error.message);
  }
};

export const fetchNitrousOxideData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/nitrous-oxide-api`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Errore nel recupero dei dati ossido di azoto: " + error.message
    );
  }
};

export const fetchTemperatureData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/temperature-api`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Errore nel recupero dei dati di temperatura: " + error.message
    );
  }
};
