
import './App.css';
import Carousel from 'react-elastic-carousel'
import Movie from './components/Movie'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { Component } from 'react';
import {FormControl} from 'react-bootstrap'

class App extends Component {
state = {
  search:'home'
}
render(){
  return (
    <div className="App">
      <Navigation
      />
       <FormControl
        value={this.state.search}
        placeholder='search'
        onInput={(e)=>this.setState({search:e.target.value})}
    />
      <h4>Trending Now</h4>
      <Carousel>
        <Movie movieData={this.state.search}/>
        <Movie movieData={this.state.search}/>
        <Movie movieData={this.state.search}/>
        <Movie movieData={this.state.search}/>
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
}

export default App;
