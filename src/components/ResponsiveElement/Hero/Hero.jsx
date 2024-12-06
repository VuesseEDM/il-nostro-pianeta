import './hero.css';
import { Link } from 'react-router-dom';



const HeroImage = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Cambiamenti 
    
          Climatici</h1>
        <p className="hero-description">
          Il nostro pianeta sta cambiando rapidamente. È fondamentale agire ora per proteggere la Terra e garantire un futuro sostenibile per le generazioni future.
        </p>
    
       <Link to="/graphs"><button className="hero-button">Leggi i grafici</button></Link> 
      </div>

    </div>
  );
};

export default HeroImage;
