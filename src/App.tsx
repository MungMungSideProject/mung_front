import '@/index.css';
import NotFound from '@components/NotFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Walkingdog from './pages/Walkingdog';
import Header from '@components/Header';
import MungWiki from '@components/MungWiki';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/walking" element={<Walkingdog />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/wiki" element={<MungWiki />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
