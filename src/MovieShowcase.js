import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 

    const listItems = movieData.map(md => 
      
        <MovieCard key={md.title}
                  title = {md.title} 
                  IMDBRating = {md.IMDBRating} 
                  genres = {md.genres}
                  poster = {md.poster} />
                 
       
      );
    return (<div> {listItems} </div>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


