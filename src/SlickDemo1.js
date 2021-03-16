import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  

import './slickdemo.css';  
import Figure from 'react-bootstrap/Figure'
export class SlickDemo1 extends Component {  
    render() {  
       
    
  return (  
    <div className="App">  
         
<Figure>
  <Figure.Image
     width={80}
     height={30}
     alt="100x20"
    src="/p1.jpeg"
    
  />
  <Figure.Caption>
  Healthy Foods & Snacks
  <br></br><a href="index.html"> Upto 45% +Extra 10% off</a>
  </Figure.Caption>
</Figure>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Figure>
  <Figure.Image
     width={80}
     height={30}
     alt="100x20"
    src="/p2.jpg"
    
  />
  <Figure.Caption>
  Work From Home Accessories
  <br></br><a href="index.html"> Upto 80% +Extra 10% off</a>
  </Figure.Caption>
</Figure>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<Figure>
  <Figure.Image
     width={80}
     height={40}
     alt="100x20"
    src="/p3.jpeg"
    
  />
  <Figure.Caption>
  Addidas, Puma, Asian 
  <br></br><a href="index.html"> Upto 45% off</a>
  </Figure.Caption>
</Figure>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<Figure>
  <Figure.Image
     width={80}
     height={40}
     alt="100x20"
    src="/p4.jpeg"
    
  />
  <Figure.Caption>
  Sparx, Asian 
  <br></br><a href="index.html"> Upto 45% off</a>
  </Figure.Caption>
</Figure>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Figure>
  <Figure.Image
     width={80}
     height={40}
     alt="100x20"
    src="/p5.jpeg"
    
  />
  <Figure.Caption>
  Sparx, Asian 
  <br></br><a href="index.html"> Upto 45% off</a>
  </Figure.Caption>
</Figure>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Figure>
  <Figure.Image
     width={80}
     height={40}
     alt="100x20"
    src="/p6.jpeg"
    
  />
  <Figure.Caption>
  Top Selling Bags
  <br></br><a href="index.html"> Upto 25% off</a>
  </Figure.Caption>
</Figure>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
    
  );  
}  
}  
export default SlickDemo1 