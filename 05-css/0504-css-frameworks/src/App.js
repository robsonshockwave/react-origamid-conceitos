import React from 'react';
import Card from 'react-bootstrap/Card';

const Teste = () => {
  return (
    <div className="card bg-dark text-white m-5">
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </p>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>
            Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
          </Card.Text>
        </Card.Body>
      </Card>

      <br />
      <br />

      <Teste />
    </>
  );
};

export default App;
