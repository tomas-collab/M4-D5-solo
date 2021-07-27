
import { FormControl,Button } from "react-bootstrap"

const CommentForm=()=>{
    return(
        <div>
        <FormControl 
        type='number'
            
            >
            
        </FormControl>
        <FormControl 
            placeholder='comment'
          >
        </FormControl>  
        <Button>Add Comment</Button>
    </div>
    )
}
export default CommentForm