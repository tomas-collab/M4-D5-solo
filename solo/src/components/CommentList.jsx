import { Component } from "react";
import CommentForm from "./CommentForm";
import {AiFillStar} from 'react-icons/ai'


class CommentList extends Component{
    state={
        comment:[]
    }
    onAddComment=(addComment)=>{
        this.setState({comment:[...this.state.comment,addComment]})
    }
    componentDidMount= async()=>{
        console.log(this.props)
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+this.props.imdbID,{
            headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRlZmQzZTBiYzMyYzAwMTUxZDUxNTgiLCJpYXQiOjE2MjczMTA0NDcsImV4cCI6MTYyODUyMDA0N30.2K33AKXN_oIYCcmEkHSYvPThUZK7rwxNLcVdpB19HT4"}
        })
        if(response.ok){
            const data= await response.json()
            console.log('data',data)
            this.setState({comment:data})
        }else{
            console.log('error')
        }
    }
    render(){
        return(
            <>
            <ul>
                {
               this.state.comment.map(comm=> 
                    <p className='comment-text'>
                       
                   {<a className='d-block' href="">{comm.comment}</a> } 
                   {<a href=""><AiFillStar/>{comm.rate}</a> }            
                   </p>
                )
                }
            </ul>
            <p className='text-white'>Add Comment Below</p>
            <CommentForm onAddComment={this.onAddComment} imdbID={this.props.imdbID}/>
            </>
            
        )
    }
}
export default CommentList 