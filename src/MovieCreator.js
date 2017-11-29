import React from 'react';
import CreateUpdateForm from './CreateUpdateForm'

class MovieCreator extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      isModalOpen: false,
    movieTitle:'',
      movieRating:0,
      movieImage:''
    }
  }
  onChangeTitle(event){
let newvalue=event.target.value
    this.setState({
      movieTitle:newvalue
})
}
  onChangeRate(event){
    let newvalue =event.target.value
    this.setState({
movieRating:newvalue
    })
  }

  onChangeSrc(event){
  let  newvalue=event.target.value
    this.setState({
      movieImage:newvalue
  })
}
  render() {
        return (
        <div className='container'>
          <button onClick={() => this.openModal()} >{this.props.value} ADD A Movie</button>
          <CreateUpdateForm isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            Title:
              <input onChange={this.onChangeTitle.bind(this)} /><br />
            rate:
              <input onChange={this.onChangeRate.bind(this)} /><br />
              Pic:
              <input onChange={this.onChangeSrc.bind(this)} /><br />
                  <input type='button' className='add-movie-btn-inside-form'  value='SAVE' onClick={ () => {
                    this.closeModal()
                    this.props.onSubmitMovie({
                      title:this.state.movieTitle,
                      src:this.state.movieImage,
                      Rate:this.state.movieRating
                    })
                  }}/>
              </CreateUpdateForm>
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
export default MovieCreator;
