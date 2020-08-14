import React from "react";
import StarRatingComponent from "react-star-rating-component";

function movieCard(props) {
  return (
    <div className="moviecontainer">
      {props.movieList.map((movie) => (
        <div className='movie-card'>
          <img
            className="images"
            width="200px"
            height="250px"
            src={movie.img}
          />
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={movie.rating}
          />
          <div className="details">
            <h3>{movie.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
export default movieCard;
