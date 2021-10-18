import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services';
import ServiceDetials from './components/ServiceDetails/ServiceDetials';
import ContextProvider from './components/ContextProvider/ContextProvider';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div >
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/:serviceId">
              <ServiceDetials></ServiceDetials>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
