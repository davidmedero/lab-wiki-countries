import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import Home from './components/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/country/:potato" component={CountriesList} />
      </Switch>
    </div>
  );
}

export default App;
