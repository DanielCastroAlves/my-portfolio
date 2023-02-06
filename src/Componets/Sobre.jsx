import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import fotoEu from '../imagens/eu.jpeg';

function Sobre() {
  return (
    <Container className="my-5">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded text-center">
        <Card.Header as="h1">Sobre</Card.Header>
        <Card.Body>
          <Row className="my-5">
            <Col xs={12} md={8} lg={6} className="mx-auto text-center">
            <Image src={fotoEu} roundedCircle className="mb-3" width={200} height={200} />

              <p>
                Olá, meu nome é Daniel Castro e sou um desenvolvedor front-end.
                Sou formado em Sistemas de Informação e tenho experiência em
                desenvolvimento de aplicações web.
              </p>
              <p>
                Atualmente, estou envolvido em projetos usando React, HTML, CSS
                e JavaScript. Adoro trabalhar com tecnologias atualizadas e
                sempre estou procurando aprender mais sobre o mundo da
                programação.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Sobre;
