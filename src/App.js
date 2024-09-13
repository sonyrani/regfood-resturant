import { Navbar } from './components/Navbar.js';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Pages from './components/Pages.js';
import Chefs from './components/Chefs.js';
import BlogMain from './components/BlogMain.js';
import Contact from './components/Contacts/Contact.js';
import Order from './components/Order/OrderDetails.js';


function App() {
  return (
    <>
    
    <Navbar/>

      <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/about"  element={<About />}/>
      <Route path="/menu"  element={<Menu/>}/>
      <Route path="/chefs"  element={<Chefs/>}/>
      {/* <Route path="pages" element={<Pages />}/> */}
      <Route path="/blog" element={<BlogMain/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="order" element={<Order />} />

     
       
    </Routes>
   
    </>
  );
}

export default App;
