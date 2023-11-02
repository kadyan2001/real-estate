import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLAnding from './components/Login/login';

export const Home = ()=>{
  return(
    <>
    <div className="white-gradient"/>
 <Header/>
       <Hero/>
      <Companies/>
      <Residencies/>
      <Value/>
      {/* <Contact/> */}
      <GetStarted/>
      <Footer/>
    </>
    // </div>
  )
}
function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<AuthLAnding/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
       
      </BrowserRouter>
     
      </div>
    </div>
  );
}

export default App;
