import React from 'react';
import Card from "react-bootstrap/Card";
import Footer from '../Footer';
import Header from '../Header';
import CarouselComponent from '../Carousel';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <h2>A little bit about CyberQuest</h2>
      <CarouselComponent />
      <h2>Challenges</h2>
      <div className='card-deck'>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Web</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Forensics</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Crypto</Card.Title>
        </Card.Body>
      </Card>
      </div>
      <h2>Current CTF's</h2>
      <Card style={{width: '10rem'}}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Web</Card.Title>
        </Card.Body>
      </Card>
      <h2>Upcoming CTF's</h2>
      <Card style={{width: '10rem'}}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Web</Card.Title>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
