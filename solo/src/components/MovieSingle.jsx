
import { Button,Overlay,Popover} from 'react-bootstrap'
import CommentList from "./CommentList";
import { useState,useRef } from "react";


const MoviesSingle =({allMovies})=>{

   const [show, setShow] = useState(false)
   const [target, setTarget] = useState(null)
   const { Poster, Title, imdbID } = allMovies
   const ref = useRef(null);
   const handleShow = (event)=>{
       setShow(!show);
       setTarget(event.target)
   }
  
        return(
         <>
                    <div className='ml-2' onClick={handleShow}>
                        <img src={Poster}
                        style={{height:200, width:200}}/>
                        <h6 className='text-white'>{Title}</h6>
                </div>
                <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref.current}                        
                        containerPadding={20}
                        >
                        <Popover id="popover-contained">
                        <Popover.Body>     
                            hello                      
                                {/* <CommentList imdbID={ imdbID } /> */}
                        </Popover.Body>
                        <Button onClick={handleShow}>close</Button>
                        </Popover>
               </Overlay>
           
                   </>     
     
        )
  
}

export default MoviesSingle


