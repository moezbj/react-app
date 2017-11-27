import React, { Component } from 'react';
import MovieCard from './MovieCard'

class MovingList extends Component{
  render(){
    return(<div className="card-deck row">
        {
          this.props.movies.map((m,i) => {
            return <MovieCard key={i}  movie={m}/>
          })
        }
        </div>)

  }
}
export default MovingList;
