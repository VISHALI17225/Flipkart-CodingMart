import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slickdemo.css';  
export class SlickDemo extends Component {  
    render() {  
        var images = [    
            { img: '/slide_1.jpg' },    
            { img: '/slide_2.jpg' },    
            { img: '/slide_3.jpg' },    
            
          ];   
    var imgSlides = () =>  
    images.map(num => (  
      <div className="imgpad">  
          <img className="imgdetails" src= {num.img} width="100%" alt=""/>    
      </div>  
    ));  
  return (  
    <div className="App">  
         <div class='container-fluid'>        
            <div className="row title" style={{marginBottom: "20px"}} >        
                   
            </div>    
            </div>  
      <Slider  
    dots={true}  
        slidesToShow={1}  
        slidesToScroll={1}  
        autoplay={false}  
        arrows={true}  
        autoplaySpeed={3000}>{imgSlides()}</Slider>  
    </div>  
  );  
}  
}  
export default SlickDemo