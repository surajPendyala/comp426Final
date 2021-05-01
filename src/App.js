import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About,Proverb, Bored, Music} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/proverb" exact component={() => <Proverb />} />
          <Route path="/bored" exact component={() => <Bored />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/music" exact component={() => <Music />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
