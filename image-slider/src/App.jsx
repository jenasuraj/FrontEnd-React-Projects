import './App.css';
import Slider from './Components/Slider';
function App() {
  const slides = [
    { url: process.env.PUBLIC_URL + "/pexels-david-besh-884788.jpg", title: "moon" },
    { url: process.env.PUBLIC_URL + "/pexels-designecologist-1287561.jpg", title: "flower" },
    { url: process.env.PUBLIC_URL + "/pexels-francesco-ungaro-464321.jpg", title: "mountain" },
    { url: process.env.PUBLIC_URL + "/pexels-matthew-montrone-230847-1324803.jpg", title: "mountainTrees" },
    { url: process.env.PUBLIC_URL + "/pexels-quang-nguyen-vinh-222549-2166711.jpg", title: "mountainLakes" },
    { url: process.env.PUBLIC_URL + "/pexels-rgr-g-365324-1033716.jpg", title: "tractor" }
  ];

  const mainDivStyle = 
  {
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    display: "flex", // Flexbox for centering
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    
  };

  return (
    <>
      <div style={mainDivStyle}>
        <Slider slides={slides}/>
      </div>
    </>
  );
}

export default App;
