import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/home'; 
import Footer from '../components/Footer/footer';
import Profile from '../pages/Profile/profile'; 
import Training from '../pages/Training/training'; 
import Chapter from '../pages/Chapter/chapter';
import Question from '../pages/Question/question';
import Test from '../pages/Test/test';

const AppRouter = () => {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/training" element={<Training />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/question" element={<Question />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
