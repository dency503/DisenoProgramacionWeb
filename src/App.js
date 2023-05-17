import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import './styles/style.css';
import ProductDetail from './components/products/ProductDetail.js';
import Header from './components/Pagina/header';
import Footer from './components/Pagina/Footer';
import Inicio from "./components/Pagina/Inicio";
import Login from './components/Pagina/login';
import Register from './components/Pagina/register';
import Search from './components/Pagina/search';


import ContactForm from './components/contactForm';
import { NotFoundPage } from './components/Pagina/NotFoundPage';
import Carrucel from './components/Carrucel';
function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/c" element={<Carrucel />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;


