import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideoSource } from "../actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import "../assets/styles/containers/Player.scss";

const Player = () => {
  const { trends, originals, playing } = useSelector(state => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoSource(id));
  }, [trends, originals]);

  return playing ? (
    <div className="Player">
      {playing && (
        <video controls autoPlay>
          <source src={playing.source} type="video/mp4" />
        </video>
      )}
      <div className="Player-back">
        <Link to='/'>
          <button type="button">Regresar</button>
        </Link>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default Player;
