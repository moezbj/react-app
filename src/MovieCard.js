import React, { Component } from 'react';
import RatingStars from './RatingStars'
import './MovieCard.css'
 import MovieCreator from './MovieCreator'
class MovieCard extends Component{
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }
  render() {
    let movie = this.props.movie
    return (
          <div className="card col-sm-3">
                <img className="card-img-top" src={movie.src} alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title"> {movie.title}</h4>
                      <RatingStars  Rate={this.props.movie.Rate} />

                      <button onClick={() => this.openModal()}>Edit</button>
                        <MovieCreator isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                          Title:
                          <input />
                          rate:
                          <input />

                              <p><button onClick={() => this.closeModal()}>Close</button></p>
                          </MovieCreator>

                    </div>
          </div>
    )
  }
  openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
}
export default MovieCard;
