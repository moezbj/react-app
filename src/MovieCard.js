import React, { Component } from 'react';
import RatingStars from './RatingStars'
import './MovieCard.css'
function editModehandler(){
  let neweEditeMode=!this.state.editModehandler
  this.setState({
    editMode : neweEditeMode
  })
}

class MovieCard extends Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,
      editMode:false

    }
    setInterval(() =>{

      this.setState({


        counter:this.state.counter + 1
          })
    }, 1000)
  }
  render() {
    let movie = this.props.movie
    let editModeHandler_ =editModehandler.bind(this)
    return (
                          <div className="card col-sm-3">
                           <img className="card-img-top" src={movie.src} alt="Card image cap"/>
                            <div className="card-body">
                            {
                              this.state.editMode==false &&
                  <h4 className="card-title"> {movie.title}</h4>
                }
                { this.state.editMode==true &&
                  <input value= {movie.title}/>
                }
                <RatingStars   />
                  <a href="#" className="btn btn-primary"  onClick= { editModeHandler_ } >Edit</a>
                </div>
              </div>

    )
  }
}
export default MovieCard;
