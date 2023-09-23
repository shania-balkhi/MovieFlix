import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                {
                    title: "The Avengers",
                    plot: "Supernatural powers shown in the movie.",
                    poster: 'https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    cart: false
                },

                {
                    title: "Iron Man",
                    plot: "Supernatural powers shown in the movie.",
                    poster: 'https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg',
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    cart: false
                },

                {
                    title: "The Dark Knight",
                    plot: "Supernatural powers shown in the movie.",
                    poster: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    cart: false
                }
            ]
        }
    }


    //EventHandlers -

    handleIncreaseStar = (movie) => {
        const {movies} = this.state;

        const mId = movies.indexOf(movie);

        if(movies[mId].stars >= 5){
            return;
        }

        movies[mId].stars += 0.5;

        this.setState({
            movies: movies
        })

    }




    render() {
        //const { title, plot, price, rating, stars, fav, cart, poster } = this.state.movies;
        const {movies} = this.state;

        return (
            <>

                {movies.map((movie) => <MovieCard movies = {movie} addStars= {this.handleIncreaseStar} />)}

                

            </>
        )
    }
}

export default MovieList;