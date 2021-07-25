import { Component } from "react";
import {Card} from 'react-bootstrap'
// import CommentArea from './CommentArea'


class MoviesSingle extends Component{
    state = {
        selected:false
    }
    render(){
        const { Poster, Title, imdbID } = this.props.allMovies
        return(
            <>
            <div className='ml-2' onClick={() => this.setState({ selected: !this.state.selected })}
            style={{ border: this.state.selected ? '3px solid red' : 'none' }}>
                <img src={Poster}
                style={{height:200, width:200}}/>
                <h6 className='text-white'>{Title}</h6>
          </div>
          {/* {
            this.state.selected && <CommentArea imdbID={ imdbID } />
        } */}
        </>
        )
    }
}

export default MoviesSingle


