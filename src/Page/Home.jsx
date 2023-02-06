import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import Sobre from "../Componets/Sobre";
import Projetos from "../Componets/Projetos";
import Experiencias from "../Componets/Experiencias";
import "../Css/home.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Container className="my-5">
      <Carousel
        interval={5000}
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Sobre />
        </Carousel.Item>
        <Carousel.Item>
          <Projetos />
        </Carousel.Item>
        <Carousel.Item>
          <Experiencias />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
