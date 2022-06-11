import './App.css';
import React from 'react'
import axios from 'axios'



class App extends React.Component() {
   state = {
       movies: [],
   }

   componentDidMount(){
       this.getMovies()
   }

   getMovies() {
       axios.get('http://127.0.0.1:8000/movieapi/')
       .then(res) => {
           this.setState({ movies: res.data });
       }
       .catch(error) => {
           console.log(error)
       }
   }

    render() {
       return (
            <div className="App">
                {this.state.movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.image} />
                        <h2>{movie.name}</h2>
                        <h3>{movie.description}</h3>
                        <h4>{movie.rating}</h4>
                    </div>
                ))}
            </div>
       );
    }

}

export default App;
