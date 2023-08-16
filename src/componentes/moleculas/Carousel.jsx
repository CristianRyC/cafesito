import Carousel from 'react-bootstrap/Carousel';
import "../../assets/styles/Carousel.css"
import slide1 from "../../assets/images/Latte.jpg";
import slide2 from "../../assets/images/expresso.jpg";
import slide3 from "../../assets/images/Doppio.jpg";
import slide4 from "../../assets/images/cafe-r.jpg";
import slide5 from "../../assets/images/cafe-e.jpg";


function Carrusel() {
  return (
 <>   
{/*  <div className='carru-cont'>
 <div className="slider container mb-3">
   <Carousel>
     <Carousel.Item className='slide'>
       <img
         className="d-block"
         src={slide1}
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item className='slide'>
       <img
         className="d-block"
         src={slide2}
         alt="Second slide"
       />
     </Carousel.Item>
     <Carousel.Item className='slide'>
       <img
         className="d-block"
         src={slide3}
         alt="Third slide"
       />
     </Carousel.Item>
   </Carousel>
 </div>
</div> */}


<div class="container-carusel">
<div class="card"><img className="d-block" src={slide5} alt="Second slide"/></div>
  <div class="card"><img className="d-block" src={slide1} alt="Second slide"/></div>
  <div class="card"><img className="d-block" src={slide2} alt="Second slide"/></div>
  <div class="card"><img className="d-block" src={slide3} alt="Second slide"/></div>
  <div class="card"><img className="d-block" src={slide4} alt="Second slide"/></div>
</div>
</>
  );
}



export default Carrusel;