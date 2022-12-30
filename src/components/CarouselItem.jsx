import React from "react";
import "../assets/styles/components/CarouselItem.scss";

//icons
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";

//Data validation
import PropTypes from "prop-types";

//Redux
import { useDispatch } from 'react-redux';
import { setFavorite, deleteFavorite } from "../actions";
//import { Link } from "react-router-dom";

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props;
  const dispatch = useDispatch();

  const handleSetFavorite = () => {
    const payload = { id, cover, title, year, contentRating, duration }
    dispatch(setFavorite(payload))
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          <img 
            className="carousel-item__details--img" 
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  )
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

export default CarouselItem;
