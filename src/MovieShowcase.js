import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />)
      //let title// = movie.title
      //let rating// = movie.IMDBRating
      //let genres// = movie.genres
      //let poster// = movie.poster
      // <MovieCard title={title} rating={rating} genres={genres} poster={poster} />
      // <MovieCard key={idx} {...data} />
      
    // })
    // )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
