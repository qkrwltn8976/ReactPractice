import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [{
            title: "강동원",
            poster: "https://www.slist.kr/news/photo/201807/40538_104436_3545.jpg"
          },
          {
            title: "현빈",
            poster: "https://pbs.twimg.com/profile_images/1224596345933066240/px-77DwV_400x400.jpg"
          }, 
          {
            title: "이민기",
            poster:  "https://lh3.googleusercontent.com/proxy/eMo-D1R-fPi9Z9wQIAh5bRQx56VR5-z7UHXY2jN9NY_t4UaSjtSl52msh3K7VQWiAFJ_dlUP3xn14mVhDpSRQyN6uUGwUhadrBs0dzjfK8qMRQG3RxfjfxIu4ebmI8wZHfmOKjHxRxZJbMKcYA"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    });

    return movies;

    // 함수명에 _(언더스코어)를 붙이는 이유? 리액트 자체 기능과 내가 만든 기능에 차이를 두기 위해서
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
