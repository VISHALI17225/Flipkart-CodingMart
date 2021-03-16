import './App.css';
import SearchField from "react-search-field";

function App() {
  return (
     
    <div className="App" >
      <header className="App-header">
        <img src="/logo512.png" className="App-logo" alt="logo" />
        
        <SearchField
  placeholder="Search for Products, bands and more"
    classNames="test-class"
  />      
        
        <a
          className="App-link"
          href="index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
        </header>
        <main>
          <p> flipkart Main Content</p>
        </main>
       
      
    </div>
    
  );
}

export default App;
