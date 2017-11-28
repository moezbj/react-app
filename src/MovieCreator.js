import React from 'react';


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
        return(
        <div className='container'>
      <button type='button' className='add-movie-btn-outside' data-toggle='modal' data-target='#myModal' >
  {this.props.value}
ADD</button>
      <div className='modal fade' id='myModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h3>Create or Update a movie</h3>
              <button type='button' className='close' data-dismiss='modal'>&times;</button>
            </div>
            <div className='modal-body'>
              <div className='movie-updater-creator-container'>
                <form>
                  <div className='form-group'>
                    <label className='label-name' >Movie title:</label>
                    <input type='text' className='form-control' id='movie-title-input' placeholder='Add the movie title here' name={this.state.name} onChange={this.onChangeTitle.bind(this)}/>
                  </div>
                  <div className='form-group'>
                    <label className='label-name'>Movie Rating:</label>
                    <input type='text' className='form-control' id='movie-rating-input' placeholder='between 0 and 5' name={this.state.name} onChange={this.onChangeRate.bind(this)}/>
                  </div>
                  <div className='form-group'>
                    <label className='label-name'>Movie Image:</label>
                    <input type='text' className='form-control' id='movie-image-input' placeholder='Add the movie image url here' name={this.state.name} onChange={this.onChangeSrc.bind(this)} />
                  </div>
                  <input type='button' className='add-movie-btn-inside-form' data-dismiss='modal' value='SAVE' onClick={ () => {
                    this.props.onSubmitMovie({
                      title:this.state.movieTitle,
                      src:this.state.movieImage,
                      Rate:this.state.movieRating
                    })}}/>
                </form>
              </div>
            </div>
            <div className='modal-footer'>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    }
  }
export default MovieCreator;
