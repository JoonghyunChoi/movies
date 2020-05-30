import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({title, poster, genres, year}){
    return (
        <div className = "Movie">
            <div className = "Movie_Section1">
                <MoviePoster poster = {poster} alt = {title}/>
            </div>
            <div className = "Movie_Section2">
                <h1>{title}</h1>
                <div className = "Movie_Year" >
                    {year}
                </div>
                <div className = "Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre = {genre} key = {index}/>)}
                </div>
            </div>
        </div>  
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src = {poster} alt = {alt} title = {alt} className = "Movie_Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className = "Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired
}

MoviePoster.propType = {
    alt: PropTypes.string.isRequired
}

MovieGenre.propType = {
    genre: PropTypes.string.isRequired
}

export default Movie