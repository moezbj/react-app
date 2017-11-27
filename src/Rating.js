import React, { Component } from 'react';
import MovieCard from './MovieCard'

class Rating extends Component {
  constructor (props) {
    super(props)
    this.state={
    }
  }


//   RateTest (event) {
//     let filterMovie = this.props.movies.map((m)=>{
//       if(this.state.value == this.props.movies.rate){
//         return (
//           <MovieCard movie={this.props.movies} />
//         )
//       }
//     })
// }
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
