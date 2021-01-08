import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Router,Switch,Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Style/Data/Data';
import Footer from './components/Footer/Footer'
const Home=()=>{
  return(
    <>
    <Homepage {...homeObjOne} />
    <Homepage {...homeObjTwo} />
    <Homepage {...homeObjThree} />
    <Homepage {...homeObjFour} />
    <Footer />
    </>
  )
}
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/signin" />
        <Route exact path="/about" />
        <Route exact path="/services" />
      </Switch>
      </>
  );
}

export default App;
