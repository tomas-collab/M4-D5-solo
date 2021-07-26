import { Component } from "react";
import MoviesSingle from "./MovieSingle";
import Error from "./Error";
import Loading from "./Loading";




class Movie extends Component{ 
    state = {
        movieData: [], 
        isLoading: true,
        isError: false
    }
    componentDidMount = async () => {
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=27d75181&s=' + this.props.movieData,  )
            if (response.ok) {
                let movieData = await response.json()
                console.log(movieData)
                this.setState({ 
                    movieData: movieData.Search, 
                    isLoading: false, 
                    isError: false 
                })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }
    render(){
        const { isLoading, isError, movieData } = this.state
        return(
             
                 <> 
                  
                    { isLoading && <Loading />}
                    { isError   && <Error   />}
                     {
                         movieData.map( movie=>
                            <>
                                <MoviesSingle allMovies={movie}/>
                                
                              </>
                           ) 
                     }
                
             </>
        )
    }
}

export default Movie