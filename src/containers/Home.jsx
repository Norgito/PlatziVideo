import React from "react";
import { useSelector } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../assets/styles/App.scss";

const Home = () => {
  const { mylist, trends, originals } = useSelector(state => state);
  return (
    <>
      <Search />
      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((item, id) => 
              <CarouselItem key={id} {...item} />
            )} 
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item, id) => 
            <CarouselItem key={id} {...item} />
          )} 
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item, id) => 
            <CarouselItem key={id} {...item} />
          )} 
        </Carousel>
      </Categories>

    </>
  );
};

export default Home;

