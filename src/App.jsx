import './App.css'
// import Header from './components/Header';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <div className="scroll-smooth transition duration-500">
       {/* <Header /> */}
       <Navbar />
       <Body />
       <Footer />
      </div>
    </>
  )
}

export default App
