import React from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

class MovieSingle extends React.Component {

    state = {
        selected: false
    }

    render() {
        const { Poster, Title, imdbID } = this.props.movie
        return (
            <>
                <Card
                    onClick={() => this.setState({ selected: !this.state.selected })}
                    style={{ border: this.state.selected ? '3px solid red' : 'none' }}
                >
                    <Card.Img variant="top" src={ Poster } />
                    <Card.Body>
                        <Card.Title >{ Title }</Card.Title>
                    </Card.Body>
                </Card>
                {
                    this.state.selected && <CommentArea imdbID={ imdbID } />
                }
            </>
        )
    }

}

export default MovieSingle