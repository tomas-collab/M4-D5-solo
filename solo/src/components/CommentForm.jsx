
import { Component } from "react"
import { FormControl,Button ,Form} from "react-bootstrap"
import {AiFillStar} from 'react-icons/ai'

class CommentForm extends Component{
    state={
        comment:[],
        rate:1
    }
render(){
    return(
                <div>
                {/* <FormControl
               
                value={this.state.rate}
                type='number'
                onChange={(e)=>this.setState({rate:e.currentTarget.value.toLowerCase()})}    
                placeholder="rate"       
                    >
                    
                </FormControl> */}
                <select

                        value={this.state.rate}
                        onClick={(e)=>this.setState({rate:e.currentTarget.value})}    
                      
                  aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value={<AiFillStar/>}><AiFillStar/></option>
                    <option value="2"><AiFillStar/><AiFillStar/></option>
                    <option value="3"><AiFillStar/><AiFillStar/><AiFillStar/></option>
                </select>
                <FormControl 
               
                    value={this.state.comment}
                    onChange={(e)=>this.setState({comment:e.currentTarget.value.toLowerCase()})}
                    placeholder='comment'
                >
                </FormControl>  
                <Button variant='success' onClick={this.addComment}>Add Comment</Button>
            </div>
    )
}
    addComment = async()=>{
        const toSend = {
            comment:this.state.comment,
            rate:this.state.rate,
            elementId:this.props.imdbID
        }
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',{
            method:'POST',
            body:JSON.stringify(toSend),
            headers:{'Content-type':'application/json',"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRlZmQzZTBiYzMyYzAwMTUxZDUxNTgiLCJpYXQiOjE2MjczMTA0NDcsImV4cCI6MTYyODUyMDA0N30.2K33AKXN_oIYCcmEkHSYvPThUZK7rwxNLcVdpB19HT4"}
        })
        if(response.ok){
            this.props.onAddComment(await response.json())
        }
    }
    
}
export default CommentForm