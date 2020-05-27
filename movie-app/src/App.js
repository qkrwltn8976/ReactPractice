import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
    // fetch('https://yts.mx/api/v2/list_movies.json?sort_by=like_count')
    // .then(response => response.json())
    // .then(json => {
    //   this.setState({
    //     movies: json
    //   })
    // })
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    });

    return movies;

    // 함수명에 _(언더스코어)를 붙이는 이유? 리액트 자체 기능과 내가 만든 기능에 차이를 두기 위해서
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies 
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

}

export default App;
