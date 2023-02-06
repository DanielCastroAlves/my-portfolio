import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Experiencias = () => (
  <Container className="my-5">
    <h1 className="text-center">Experiências</h1>
    <Row>
      <Col md={4}>
        <Card className="mb-3">
          <Card.Header as="h5">Mang Maq</Card.Header>
          <Card.Body>
            <Card.Title>Operador de CNC</Card.Title>
            <Card.Text>
              Principal conhecimento adquirido: Fabricação de Produtos e Gestão
              de Serviços. Empresa atuante do segmento de Maquinário.
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Período: Março de 2012 a Julho de 2013
              </ListGroup.Item>
             
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="mb-3">
          <Card.Header as="h5">Correios</Card.Header>
          <Card.Body>
            <Card.Title>Operador de Triagem e Transbordo</Card.Title>
            <Card.Text>
              Principal conhecimento adquirido: Métodos avançados de Triagem.
              Empresa atuante do segmento de Setor operacional.
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Período: Maio de 2013 a Março de 2018
              </ListGroup.Item>
            
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="mb-3">
          <Card.Header as="h5">Seno TI</Card.Header>
          <Card.Body>
            <Card.Title>
              Principal conhecimento adquirido: React - Frameworks. Empresa
              atuante do segmento de Desenvolvimento de programas.
            </Card.Title>
            <Card.Text>
              Principal conhecimento adquirido: Métodos avançados de Triagem.
              Empresa atuante do segmento de Setor operacional.
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Período: Janeiro de 2019 a Dezembro de 2019
              </ListGroup.Item>
            
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Experiencias;
