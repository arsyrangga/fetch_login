import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './App.css';
import Register from './components/register/Register';
import Page_login from './components/pages/page_login/Page_login'
import Page_register from './components/pages/page_register/Page_register'
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <main className="App">
      <Switch>


      <Route path="/home">
        <Home />
        <Footer />
      </Route>

      <Route path="/register">
        <Page_register />
      </Route>

      <Route path="/login">
        <Page_login />
      </Route>     

      <Route path="/">
        <Page_login />
      </Route>

      </Switch>
    </main>
    </BrowserRouter>
    </>
  );
}

export default App;
