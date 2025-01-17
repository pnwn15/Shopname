import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import SlickBar from './Component/SlickBar';
import GridComponent from './Component/GridComponent';
import Product from './Component/Product';
import Promote from './Component/Promote';
import Card from './Component/Card';
import FooterWithForm from './Component/FooterWithForm';

function App() {
  return (
    <>
    <div className='w-full h-full overflow-hidden'>
    <Navbar />
    <SlickBar />
    <GridComponent />
    <Product />
    <Promote />
    <Card />
    <FooterWithForm />
    </div>
    </>
  );
}

export default App;
