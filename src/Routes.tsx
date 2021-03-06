import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Home from './pages/home';
import HowToMake from './pages/HowToMake';
import Testimony from './pages/testimony';


export default function AppRouter() {
  return (
    <main >
      <Router>
        <Menu />
        <Routes>
          <Route >
            <Route index element={<Home />} />
            <Route path='howToMake' element={<HowToMake/>} />
            <Route path='testimony' element={<Testimony/>} />
          </Route>
        </Routes>
      </Router>
    </main>

  );
}