import React, { Component } from 'react';
import MovieCard from './MovieCard'

class Rating extends Component {
  render(){
    let Movies=this.props.movies
       return(
          <form className="search">
            <h4>Min rating</h4>
              <input type="text" className="form-control" id="usr"  onChange={this.props.UpdateSearch}></input>
              <button type="button" className="btn btn-info" onClick={this.RateTest}>Search</button>
          </form>
        )
  }
}
export default Rating;
