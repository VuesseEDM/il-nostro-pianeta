import { useState } from "react";
import CO2 from "../../components/co2/CO2";
import Methane from "../../components/methane/Methane";
import NO2 from "../../components/no2/NO2";
import Temperature from "../../components/temperature/Temperature";
import './graphPage.css';
import Footer from "../../components/ResponsiveElement/Footer/Footer";
import { Helmet } from "react-helmet"; 


const GraphPage = () => {
  const [showCO2, setShowCO2] = useState(true);
  const [showMethane, setShowMethane] = useState(true);
  const [showNO2, setShowNO2] = useState(true);
  const [showTemperature, setShowTemperature] = useState(true);

  return (
    <>
    <div className="graph-page">
      <Helmet>
        <title>Grafici sull'Ambiente | Il nostro Pianeta</title>
        <meta name="description" content="Visualizza i grafici sull'impatto dei gas serra, temperatura e inquinamento per capire meglio il cambiamento climatico." />
        <meta property="og:title" content="Grafici sull'Ambiente | Il nostro Pianeta" />
        <meta property="og:description" content="Visualizza i grafici sull'impatto dei gas serra, temperatura e inquinamento per capire meglio il cambiamento climatico." />
        <meta property="og:type" content="Grafici sull' ambiente"/>
        <meta property="og:image"
              content="https://raw.githubusercontent.com/VuesseEDM/il-nostro-pianeta/main/public/img/graph.png"/>
        <meta property="og:image:alt" content="data element"/>
        <meta property="og:url" content="https://vuesseedm.github.io/il-nostro-pianeta/graphs"/>
      </Helmet>


      <h1 className="graph-page-title">Grafici sull'Ambiente</h1>

      <section className="data-section">
        <div className="data-card">
          <h2 className="data-title">Metano (CH₄)</h2>
          <p className="data-description">
            Il metano è uno dei gas serra più potenti, responsabile di un impatto significativo sul riscaldamento globale. La sua concentrazione nell'atmosfera è in aumento, principalmente a causa delle attività agricole e industriali. Il monitoraggio delle emissioni di metano è cruciale per sviluppare politiche efficaci di mitigazione del cambiamento climatico.
          </p>
          <button className="toggle-button" onClick={() => setShowMethane(!showMethane)}>
            {showMethane ? "Nascondi Grafico" : "Visualizza Grafico"}
          </button>
          {showMethane && <Methane />}
        </div>

        <div className="data-card">
          <h2 className="data-title">Anidride Carbonica (CO₂)</h2>
          <p className="data-description">
            L'anidride carbonica è uno dei principali gas responsabili del cambiamento climatico. La sua concentrazione nell'atmosfera è aumentata notevolmente a causa delle attività umane, come la combustione di combustibili fossili. La CO₂ è il principale contributore al riscaldamento globale e monitorarla è essenziale per contrastare il cambiamento climatico.
          </p>
          <button className="toggle-button" onClick={() => setShowCO2(!showCO2)}>
            {showCO2 ? "Nascondi Grafico" : "Visualizza Grafico"}
          </button>
          {showCO2 && <CO2 />}
        </div>

        <div className="data-card">
          <h2 className="data-title">Diossido di Azoto (NO₂)</h2>
          <p className="data-description">
            Il diossido di azoto è un inquinante atmosferico che si forma durante la combustione dei combustibili fossili. L'NO₂ è responsabile per la formazione di smog e piogge acide, con effetti dannosi sulla qualità dell'aria e sulla salute umana. La sua concentrazione è strettamente legata alla crescita delle aree urbane e industriali.
          </p>
          <button className="toggle-button" onClick={() => setShowNO2(!showNO2)}>
            {showNO2 ? "Nascondi Grafico" : "Visualizza Grafico"}
          </button>
          {showNO2 && <NO2 />}
        </div>

        <div className="data-card">
          <h2 className="data-title">Temperatura Globale</h2>
          <p className="data-description">
            L'aumento delle temperature globali è uno degli indicatori più evidenti del cambiamento climatico. Gli effetti del riscaldamento globale si manifestano con il ritiro dei ghiacciai, l'innalzamento del livello del mare e eventi meteorologici estremi. Monitorare i cambiamenti di temperatura è fondamentale per la pianificazione delle politiche ambientali a lungo termine.
          </p>
          <button className="toggle-button" onClick={() => setShowTemperature(!showTemperature)}>
            {showTemperature ? "Nascondi Grafico" : "Visualizza Grafico"}
          </button>
          {showTemperature && <Temperature />}
        </div>
      </section>
    </div>
       <Footer/>
      </>
  );
};

export default GraphPage;
