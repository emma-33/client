import Card from "react-bootstrap/Card";

function CardComponent () {
    return (
        <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Web</Card.Title>
        </Card.Body>
      </Card>
    );
}

export default CardComponent;
