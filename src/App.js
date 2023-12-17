import './App.css';
import Comments from './Components/Comments';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Menu />
        <Reservation />
        <Comments />
      </main>
      <Footer />
    </>
  );
}

export default App;
