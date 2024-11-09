import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <section>
        <article>
        <a href="/busquedas">
          <img src="https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg" />
          <div className="overlay">
            <p>Búsquedas laborales</p>
          </div>
        </a>
        </article>
        <article>
        <a href="/busquedas">
          <img src="https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg" />
          <div className="overlay">
            <p>Búsquedas laborales</p>
          </div>
        </a>
        </article>
        <article>
        <a href="/busquedas">
          <img src="https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg" />
          <div className="overlay">
            <p>Búsquedas laborales</p>
          </div>
        </a>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
