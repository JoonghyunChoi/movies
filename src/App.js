import React, { Component } from 'react'
import './App.css'
import Movie from './Movie'

class App extends Component {
  
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?quality=3D&limit=30")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          title = {movie.title_english}
          poster = {movie.large_cover_image}
          genres = {movie.genres}
          key = {movie.id}
          year = {movie.year}
        />
      )
    })
    return movies
  }

  render() {
    const  {movies}  = this.state
    return (
      <div className = {movies ? "App" : "App_Loading"}>
        {movies ? this._renderMovies() : "3D Moives List"}
      </div>
    )
  }
}

export default App