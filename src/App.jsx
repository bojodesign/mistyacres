import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileCirclePlus, faFileCircleXmark, faMinus, faPlus, faReceipt, faSeedling, faX } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './CartContext';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavComponent from './components/Navbar';
import Store from './components/Store';

library.add(faFileCirclePlus, faFileCircleXmark, faMinus, faPlus, faReceipt, faSeedling, faX)

// Site Variables
export const SiteVariables = {
  title: "Misty Acres",
  subtitle: "Taupo Nursery",
  tagline: "Native New Zealand Plants",
  footerCopyright: "Bojo Design Ltd",
  footerAddress: <>Misty Acres Nursery<br />Central Plateau<br />New Zealand</>
}

// Render Site
function App() {
  return (
    <CartProvider>
        <NavComponent></NavComponent>
        <Header></Header>
        <About></About>
        <Store></Store>
        <Contact></Contact>
        <Footer></Footer>
    </CartProvider>
  );
}

export default App;