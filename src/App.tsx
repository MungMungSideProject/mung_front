import '@/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Walkingdog from './pages/Walkingdog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/walking" element={<Walkingdog />} />
    </Routes>
  );
}

export default App;
