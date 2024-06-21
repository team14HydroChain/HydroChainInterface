import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Producers from './components/Producers';
import Storage from './components/Storage';
import Delivery from './components/Delivery';
import Footer1 from './components/Footer1';


function App() {
  return (
    <div className="App">
      <Home/>
      <br/>
      <Producers/>
      <br/>
      <Storage/>
      <br/>
      <Delivery/>
      <Contact/>
      <Footer1/> 
    </div>
  );
}

export default App;
