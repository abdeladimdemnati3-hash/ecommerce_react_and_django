import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScrean';
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="py-3 flex-grow-1">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/products' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/product/:id/:slug' element={<ProductScreen />} />
            <Route path='/category/:category' element={<HomeScreen />} />
            <Route path='/cart/:id?' element={<HomeScreen />} />
            <Route path='*' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
