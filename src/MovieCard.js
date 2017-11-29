import React, { Component } from 'react';
import RatingStars from './RatingStars'
import './MovieCard.css'
 import CreateUpdateForm from './CreateUpdateForm'
class MovieCard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      titleInput:this.props.movie.title,
      rateInput:this.props.movie.Rate,
      srcInput:this.props.movie.src,
      movieList:{
        inputTitle:'',
        inputRate:0,
        inputsrc:''
      }
    }
  }
  onChangeTitle(event){
    let newValue =event.target.value
    this.setState({
      inputTitle: newValue
    })
    console.log(this.state.inputTitle)
  }
  onChangeRate(event){
    let newValue =event.target.value
    this.setState({
      inputRate: newValue
    })
      console.log(this.state.inputRate)
  }
  onChangeSRc(event){
    let newValue =event.target.value
    this.setState({
      inputsrc: newValue
    })
      console.log(this.state.inputsrc)
  }
  // onUpdate(event){
  //   this.setState({
  //     movieList:{
  //       title:this.state.inputTitle,
  //       src:this.state.inputRate,
  //       Rate:this.state.inputsrc
  //     }
  //   })
  //   console.log(this.state.srcInput)
  // }
  render() {
    let movie = this.props.movie
    return (
          <div >
                <img className="card-img-top" src={movie.src} alt="pic"/>
                    <div className="card-body">
                      <h4 className="card-title"> {movie.title}</h4>
                      <RatingStars  Rate={this.props.movie.Rate} />

                      <button onClick={() => this.openModal()}>Edit</button>
                        <CreateUpdateForm isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                          Title:
                            <input onChange={this.onChangeTitle.bind(this)} placeholder={this.props.movie.title} /><br />
                          rate:
                            <input onChange={this.onChangeRate.bind(this)}  placeholder={this.props.movie.Rate} /><br />
                            Pic:
                            <input onChange={this.onChangeSRc.bind(this)} placeholder={this.props.movie.src}/><br />
                            <p><button onClick={ () => {
                              this.props.onUpdateMovie({
                                title:this.state.inputTitle,
                                src:this.state.inputRate,
                                Rate:this.state.inputsrc
                              })}}>Edit</button></p>


                              <p><button onClick={() => this.closeModal()}>Close</button></p>

                          </CreateUpdateForm>
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
