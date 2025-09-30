import Header from './component/Header';
import Footer from './component/Footer';
import  HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScrean';
import { Routes, Route } from "react-router";

  
function App() {
  return (
    <div>
     <Header />
     <main>
         <Routes>
           <Route path='/' element={<HomeScreen />} />
           <Route path='/product/:id' element={<ProductScreen />} />

         </Routes>
     
     </main>

     <Footer />
    </div>
  );
}

export default App;
