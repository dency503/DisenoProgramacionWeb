
import './App.css';
import './styles/style.css';
import ProductList from './components/products/ProductDetail.js';
import Header from './components/Pagina/header';
import Footer from './components/Pagina/Footer';
import Inicio from "./components/Pagina/Inicio";
import Login from './components/Pagina/login';
import Register from './components/Pagina/register';
import Search from './components/Pagina/search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <div>

        <header >
          <Header />
        </header>
        <div className="container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Inicio/>} />
              <Route exact path="/product/:id" element={<ProductList />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/search/:query" element={< Search/>} />


            </Routes>
          </Router>

        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;
