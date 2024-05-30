import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
  <BrowserRouter>
      <Header />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  )
}

export default Router