import React from 'react';
import BackgroundParallax from './components/layout/BackgroundParallax';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import AnimeDetails from './components/anime/AnimeDetails'
import Footer from './components/layout/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './context'
import Error from './components/layout/Error'
import './App.css';


function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <BackgroundParallax />
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/homepage/anime/:mal_id" component={AnimeDetails} />
              <Route path="*" component={Error}/>
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
