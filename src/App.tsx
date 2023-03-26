import '@/index.css';
import NotFound from '@components/NotFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Walkingdog from './pages/Walkingdog';
import Header from '@components/Header';
import MungWiki from '@components/mungWiki/MungWiki';
import WikiDetail from '@components/mungWiki/WikiDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<MungWiki />} />
        <Route path="/wikiDetail/:id" element={<WikiDetail />} />
        <Route path="/walking" element={<Walkingdog />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
