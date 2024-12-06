import HeroImage from "../../components/ResponsiveElement/Hero/Hero"
import Header from "../../components/ResponsiveElement/Header/Header";
import Main from "../../components/ResponsiveElement/Main/Main";
import Footer from "../../components/ResponsiveElement/Footer/Footer";
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
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
