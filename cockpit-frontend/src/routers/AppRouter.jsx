import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/home'; 
import Footer from '../components/Footer/footer';
import Profile from '../pages/Profile/profile'; 
import TrainingSyllabus from '../pages/Training/TrainingSyllabus';
import Chapter from '../pages/Chapter/chapter';
import Question from '../pages/Question/question';
import TestSyllabus from '../pages/Test/TestSyllabus';

const AppRouter = () => {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/training" element={<TrainingSyllabus />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/question" element={<Question />} />
        <Route path="/test" element={<TestSyllabus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
