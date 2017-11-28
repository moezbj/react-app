import React, { Component } from 'react';
import MovieCard from './MovieCard'

class MovingList extends Component{
  render(){
    return(<div className="card-deck row">
        {
          this.props.movies.map((m,i) => {
            return <div className="col-md-4" key={i}>
              <MovieCard movie={m} />
            </div>
          })
        }
        </div>)

  }
}
export default MovingList;
