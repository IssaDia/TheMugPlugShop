import '../css/app.css';
import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Default from './components/Default';
import Cart from './components/Cart';
import Homepage from './pages/Homepage';
import { Provider } from 'react-redux';
import store from './store';
import ProductPage from './pages/ProductPage';
import Connexion from './pages/Connexion';

const App = () => {

    return (
      <HashRouter>
        <Provider store={store}>   
          <NavigationBar />
              <Switch>  
                  <Route path="/cart" component={Cart}/>
                  <Route path="/contact"/>
                  <Route path="/products" component={ProductPage}/>
                  <Route path="/connexion" component={Connexion}/>
                  <Route path="/" component={Homepage}/>
                  <Route component={Default} /> 
              </Switch>
          <Footer />
        </Provider>          
    </HashRouter> 

    );
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
