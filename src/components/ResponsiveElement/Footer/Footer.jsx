import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Uniti per il Pianeta</h3>
        <p className="footer-text">
          Insieme possiamo fare la differenza: scopri come contribuire a un futuro più sostenibile.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Termini e Condizioni</a>
          <a href="/contact" className="footer-link">Contattaci</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cambiamenti Climatici. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
