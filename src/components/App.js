import "../styles/app.scss";
import images from "../images/images";

function App() {
 return (
  <div className="app">
   <div className="main-app">
    <nav>
     <div className="logo">
      <h1>Ayush Rameja</h1>
     </div>
     <div className="nav-links">
      <h1>Smoth Scroll</h1>
     </div>
    </nav>
    <div className="all-images">
     <h1>Ocean Images</h1>
     <div className="image">
      {images.map((img) => (
       <img className="ocean-img" src={img} alt="" />
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}

export default App;
