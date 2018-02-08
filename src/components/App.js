// Step 1: Import React, and Component from react.
import React, { Component } from 'react';
// Step 2: Import render from react-dom
import ReactDOM from 'react-dom';
// Step 3: Import MoviesList from MoviesList
import MovieList from './MoviesList';

// Step 4: Write a class called App, extending Component.
class App extends Component {
  // Step 5: Write a constructor function without passing anything into it.
  constructor () {
      // Step 6: Inside the constructor function, call super without passing anything into it.
    super();
      // Step 7: Inside the constructor function, create a state on this, and set it to an object.
      // Step 8: Inside the object, set a key to movies, and the value to an array of movies
      this.state = { movies: [// {
          //   id: 1,
          //   title: 'Avengers',
          // },
          // {
          //   id: 2,
          //   title: 'Star Trek',
          // },
          // {
          //   id: 3,
          //   title: 'Gifted',
          // }
          "movie1", "movie2"] };
  }
  // Step 9: Write a render function.
  render () {
  // Step 10: Inside the render function, write a return statement.
    return (
  // Step 11: Inside the return statement, write a selfclosing tag called MoviesList
  // Step 12: Inside the selfclosing tag, give it an attribute called movies, and pass it this.state.movies inside a set of curly bracket.
      <MovieList movies = {this.state.movies} />
    );
  }
}
// Step 13: Outside the class, export the App class as a default.

export default App;