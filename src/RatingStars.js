import React, { Component } from 'react';


class RatingStars extends Component{
  render () {
     let rating = this.props.Rate
     if (rating < 0) {
       rating = 0
     } else if (rating > 5) {
       rating = 5
     }
     let stars = []
     for (let i = 0; i <= 4; i++) {
       if (i < rating) {
         stars.push(<span key={i}>&#9733;</span>)
       } else {
         stars.push(<span key={i}>&#9734;</span>)
       }
     }
     return (
       <div>
         {stars}
       </div>
     )
   }
}
export default RatingStars
