import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-carousel-container">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <Link to="/contacto">
            <div className="slide">
              <img
                src="https://sqt.com.ar/wp-content/uploads/2018/04/intro-hotel.jpg"
                alt="Slide 1"
              />
              <div className="overlay">
                <p className="text">Contacto</p>
              </div>
            </div>
          </Link>
          <Link to="/busquedas">
            <div className="slide">
              <img
                src="https://sqt.com.ar/wp-content/uploads/2018/04/intro-home-busquedas2.jpg"
                alt="Slide 2"
              />
              <div className="overlay">
                <p className="text">Búsquedas Actuales</p>
              </div>
            </div>
          </Link>
          <Link to="quienes-somos">
            <div className="slide">
              <img
                src="https://sqt.com.ar/wp-content/uploads/2018/04/intro-home-capacitacion.jpg"
                alt="Slide 3"
              />
              <div className="overlay">
                <p className="text">¿Quiénes somos?</p>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Home;
