import Navbar from './components/navar/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/create/Create';
import BlogPreviw from './components/blogPreview/BlogPreview';
import NotFound from './NotFound';
import Login from "./components/login/Login";

function App() {
  return (
    <>
    
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogPreviw />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;