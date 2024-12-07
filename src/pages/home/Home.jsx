import HeroImage from "../../components/ResponsiveElement/Hero/Hero"
import Header from "../../components/ResponsiveElement/Header/Header";
import Main from "../../components/ResponsiveElement/Main/Main";
import Footer from "../../components/ResponsiveElement/Footer/Footer";
import './home.css';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
      <title>Benvenuti nella nostra app | Il nostro Pianeta</title>
        <meta name="description" content="Scopri come affrontare il cambiamento climatico e migliorare l'ambiente." />
        <meta property="og:title" content="Benvenuti nella nostra app | Il nostro Pianeta" />
        <meta property="og:description" content="Scopri come affrontare il cambiamento climatico e migliorare l'ambiente." />
     
      </Helmet>
      <HeroImage />
      <section className="description-section">
        <Header />
      </section>
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
