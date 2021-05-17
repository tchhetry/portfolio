import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/portfolio" component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
