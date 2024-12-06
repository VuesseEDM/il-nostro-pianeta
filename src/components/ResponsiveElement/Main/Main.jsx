import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faStore } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <section className="main-section">
      <div className="main-content">
        <h2 className="main-title-you">Come puoi fare la differenza?</h2>
        <p className="main-subtitle">
          Ogni piccolo gesto conta: scopri come puoi aiutare a proteggere il nostro pianeta e a combattere i cambiamenti climatici.
        </p>
        <div className="action-container">
          <div className="action-item">
            <a href="https://sostieni.wwf.it/dona-ora/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHeart} className="action-icon" />
              Dona ora
            </a>
          </div>
          <div className="action-item">
            <a href="https://sostieni.wwf.it/adozioni/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHeart} className="action-icon" />
              Adotta
            </a>
          </div>
          <div className="action-item">
            <a href="https://sostieni.wwf.it/iscrizioni/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faUser} className="action-icon" />
              Diventa Socio
            </a>
          </div>
          <div className="action-item">
            <a href="https://shop.wwf.it" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faStore} className="action-icon" />
              Shop WWF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
