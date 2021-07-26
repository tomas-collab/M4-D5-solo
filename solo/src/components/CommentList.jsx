import { Component } from "react";


class CommentList extends Component{
    state={
        comment:[]
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
            
            this.state.comment.map(comm=> 
                <p>
               { comm.comment}
               </p>
               
           
            )
            
        )
    }
}
export default CommentList 