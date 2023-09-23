import React from "react";

class MovieCard extends React.Component {
    
    addStars=()=>{

        if(this.state.stars >= 5){
            return;
        }

        //form1
        this.setState({
            stars: this.state.stars + 0.5
        });


        //form2
        // this.setState((prevState) => {
        //     return{
        //         stars: prevState.stars + 0.5
        //     }
        // });


        // this.state.stars += 0.5;
        // console.log("this.state.stars: ", this.state.stars);
    }

    subtractStars=()=>{

        //form1
        if(this.state.stars <= 0){
            return;
        }
        this.setState({
            stars: this.state.stars - 0.5
        });

    }


    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }


    handleCart = () => {
        this.setState({
            cart: !this.state.cart
        })
    }





    render() {
        console.log(this.props);
        const {movies, addStars} = this.props
        // const {movies: data} = this.props;
        // console.log(data)
        const {title, plot, poster, price, rating, stars, fav, cart} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        {/* <img alt="Poster" src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" /> */}
                        <img alt="Poster" src={poster} />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/3693/3693020.png" onClick={this.subtractStars} />

                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png" />

                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/10613/10613702.png" onClick={() => {addStars(movies)}} />
                            
                                <span className="starCount">{stars}</span>
                            </div>

                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            

                            <button className= {fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav ? "Un-favourite" : "Favourite"}</button>
                            
                            



                            {/* <button className="cart-btn">Add to cart</button> */}

                            <button className= {cart ? "unfavourite-btn" : "cart-btn"} onClick={this.handleCart}>{cart ? "Remove From Cart" : "Add to Cart"}</button>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;