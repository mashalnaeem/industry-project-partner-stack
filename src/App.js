import Navbar from './components/NavBar/NavBar';
import DetailsPage from './pages/DetailsPage/DetailsPage';
// import './App.scss';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* // <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/about-us" element={<AboutPage />} /> */}
        <Route path="/:id" element={<DetailsPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
