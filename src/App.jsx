import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './components/pages/authentication/AuthPage';
import Home from './components/pages/home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}