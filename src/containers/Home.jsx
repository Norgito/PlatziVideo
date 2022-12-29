import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
//import { decrement, increment, incrementByAmount } from "../store/slices/counter/counterSlice";

import "../assets/styles/App.scss";

const Home = () => {
  const { myList, trends, originals } = useSelector(state => state.item)
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {{ item }.myList.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
