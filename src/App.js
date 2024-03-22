import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HomePage from './pages/HomePage/HomePage';
// import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about-us" element={<AboutPage />} /> */}
        <Route path="/:id" element={<DetailsPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
