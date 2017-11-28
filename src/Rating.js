import React, { Component } from 'react';

class Rating extends Component {
  render(){
       return(
          <form className="search">
            <h4>Min rating</h4>
              <input type="text" className="form-control" id="usr"  onChange={this.props.UpdateSearch}></input>
          </form>
        )
  }
}
export default Rating;
