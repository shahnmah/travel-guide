import 'bootstrap/dist/css/bootstrap.min.css';import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
