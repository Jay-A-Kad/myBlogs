import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Create from './Create';
import Blogdetails from './BlogDetails';
import Footer from './Footer';

function App() {
 return (
    <Router>
        <div className="App">
          <NavBar></NavBar>
          <Footer></Footer>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/create">
                <Create />
              </Route>

              <Route path="/blogs/:id">
                <Blogdetails></Blogdetails>
              </Route>
            </Switch> 
          </div>
        </div>
    </Router>
  );
}

export default App;
