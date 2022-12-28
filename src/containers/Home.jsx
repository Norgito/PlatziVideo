import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
//import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";


const Home = () => {


  return (
    <>
      <Search />
     
    </>
  );
};

export default Home;
