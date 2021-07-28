
import {Popover,OverlayTrigger,Button} from 'react-bootstrap'
import CommentForm from './CommentForm';
import CommentList from "./CommentList";


const MoviesSingle =({allMovies})=>{


   const { Poster, Title, imdbID } = allMovies
   
   
        return(
            
            <div  className='ml-2' >
                <img src={Poster}
                style={{height:200, width:200}}/>
                <h6 className='text-white'>{Title}</h6>
            <OverlayTrigger
                            trigger="click"
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Popover id='popover-positioned-bottom'>                                       
                                <Popover.Content> 
                                    <p> previous Comments:</p>                                                   
                                 <CommentList imdbID={ imdbID } />                  
                                </Popover.Content>
                                </Popover>
                            }
                            >
                            <button className='dark'>See comments</button>
                </OverlayTrigger>
               
            </div>
           
                    
                      
     
        )
  
}
export default MoviesSingle


