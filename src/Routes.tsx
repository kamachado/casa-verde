import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Home from './pages/home';


export default function AppRouter() {
  return (
    <main >
      <Router>
        <Menu />
        <Routes>
          <Route >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </main>

  );
}