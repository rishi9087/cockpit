import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/home'; 
import Footer from '../components/Footer/footer';
import Profile from '../pages/Profile/profile'; 
import TrainingSyllabus from '../pages/Training/TrainingSyllabus';
import Chapter from '../pages/Chapter/chapter';
import TrainingQuestion from '../pages/Training/TrainingQuestions';
import TestSyllabus from '../pages/Test/TestSyllabus';
import TestRules from '../pages/Test/TestRules';
import TestPage from '../pages/Test/TestPage';

const AppRouter = () => {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/training" element={<TrainingSyllabus />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/trainingQuestion/:syllabusName/:bookName/:chapterName" element={<TrainingQuestion />} />
        <Route path="/test" element={<TestSyllabus />} />
        <Route path="/testRules" element={<TestRules />} />
        <Route path="/testpage" element={<TestPage />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
