import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Route from './component/Route';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

export function App(){
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Route /> 
      <Footer />
      </BrowserRouter>

    </div>
   
  
    
  );
}

export default App;
