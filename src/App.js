import './App.css';
import React from 'react';
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import * as ReactBootStrap from "react-bootstrap";
import Figure from 'react-bootstrap/Figure'
//import SimpleImageSlider from "react-simple-image-slider";
import SlickDemo from './SlickDemo' 
import SlickDemo1 from './SlickDemo1' 
import Footer from './Footer'
function App() {
  return (
     <div className="App" >
      
      <ReactBootStrap.Navbar style={{paddingBottom:"1%"}} class="navbar" bg="primary" variant="lg">
  
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl  style={{marginLeft:"55%",paddingRight:"150px",paddingTop:"1%",paddingBottom:"1%",fontSize:"15px"}}   placeholder="Search for products,brands and more"  />
      
    </ReactBootStrap.Form>
    <ReactBootStrap.Button style={{marginLeft:"400px",height:35,color:"blue",paddingLeft:"4%",paddingRight:"4%",fontSize:"15px",fontStyle:"bold"}} variant="light" size="lg"> Login </ReactBootStrap.Button>
    
      <ReactBootStrap.NavDropdown bg="light" style={{marginLeft:"0px",color:"white",fontSize:"20px",fontStyle:"Bold",fontcolor:"white"}}  varient="dark" title="More" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Button style={{marginLeft:"50px",color:"white",paddingLeft:"3%",paddingRight:"3%",fontSize:"20px",fontStyle:"bold"}} variant="primary" size="lg"> Cart </ReactBootStrap.Button>
      
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
          <Figure>
  <Figure.Image
    width={50}
    height={20}
    alt="100x20"
    src="8.png"
    padding={20}
    marginLeft={20}
  />
    <Figure.Caption>
   Top Offers 
  </Figure.Caption>
</Figure>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Figure>
  <Figure.Image
    width={50}
    height={20}
    alt="100x20"
    src="2.png"
  />
  <Figure.Caption>
    Mobile
  </Figure.Caption>
</Figure>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<Figure>
  <Figure.Image
   width={50}
   height={20}
   alt="100x20"
    src="1.png"
  />
  <Figure.Caption>
   Appliances 
  </Figure.Caption>
</Figure>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<Figure>
  <Figure.Image
    width={50}
    height={20}
    alt="100x20"
    src="4.png"
  />
  <Figure.Caption>
    Groccery
  </Figure.Caption>
</Figure>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Figure>
  <Figure.Image
     width={50}
     height={20}
     alt="100x20"
    src="5.png"
  />
  <Figure.Caption>
   Travel 
  </Figure.Caption>
</Figure>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Figure>
  <Figure.Image
     width={50}
     height={20}
     alt="100x20"
    src="6.png"
    
  />
  <Figure.Caption>
   Beauty, Toys & More
  </Figure.Caption>
</Figure>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Figure>
  <Figure.Image
     width={50}
     height={20}
     alt="100x20"
    src="7.png"
  />
  <Figure.Caption>
   Home 
  </Figure.Caption>
</Figure>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Figure>
  <Figure.Image
    width={50}
    height={20}
     alt="100x20"
    src="3.png"
  />
  <Figure.Caption>
  Electronics 
  </Figure.Caption>
</Figure>
       <main>
      <div>
        <SlickDemo/> 
    </div>
    <div >
    <SlickDemo1/> 
    </div>
    <div className="App-div2">
    <h1 style={{alin:'left'}}><br></br>Deals of the Day</h1>
    </div>
          </main>
          <footer className="App-footer"> <Footer/>
          </footer>
             </div>
      );
}
export default App;
