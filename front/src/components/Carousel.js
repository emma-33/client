import { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
  
function CarouselComponent() { 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return ( 
    <div style={{ display: 'block', width: 700, padding: 30 }}> 
      <Carousel fade activeIndex={index} onSelect={handleSelect}> 
        <Carousel.Item> 
          <img 
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="One"
          /> 
          <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item> 
          <img 
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Two"
          /> 
          <Carousel.Caption> 
            <h3>Label for second slide</h3> 
            <p>Sample Text for Image Two</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  ); 
}

export default CarouselComponent;
