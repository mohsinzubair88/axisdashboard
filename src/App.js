import './App.css';
import Navbar from './Components/Navbar';
import TopNavigation from './Components/TopNavigation';
import logo from './images.png';
function App() {
  return (
    <div className="App">
     <header>
        <h1>Axis Now</h1>
        <img src={logo} alt="image of AxisNow"/>
    </header>
    <TopNavigation/>
    <Navbar/>
    </div>
  );
}

export default App;
