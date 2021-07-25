import logo from './logo.svg';
import './App.css';
import Carousel from 'react-elastic-carousel'
import Movie from './components/Movie'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <h4>Trending Now</h4>
      <Carousel>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
      </Carousel>
      <h4>Watch It Again</h4>
      <Carousel>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
      </Carousel>
      <h4>New Releases</h4>
      <Carousel>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
        <Movie movieData="Spider man"/>
      </Carousel>
      <Footer/>

    </div>
  );
}

export default App;
