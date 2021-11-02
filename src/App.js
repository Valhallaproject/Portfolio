import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home/home";
import Groupomania from "./site/groupomania/groupomania";
import Hotreviews from './site/hotreviews/hotreviews';
import Nbphoto from './site/nbphoto/nbphoto';
import Orinoco from './site/orinoco/orinoco';
import Ohmyfood from './site/ohmyfood/ohmyfood';
import Room from './site/room/room';
import Contact from './components/mail/mail'
function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/groupomania" component={Groupomania}/>
          <Route path="/thehotreviews" component={Hotreviews}/>
          <Route path="/nbphotographie" component={Nbphoto}/>
          <Route path="/orinoco" component={Orinoco}/>
          <Route path="/ohmyfood" component={Ohmyfood}/>
          <Route path="/room" component={Room}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    
  );
}

export default App;
