import '@/index.css';
import NotFound from '@components/NotFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Walkingdog from './pages/Walkingdog';
import MungWiki from '@components/mungWiki/MungWiki';
import WikiDetail from '@components/mungWiki/WikiDetail';
import Header from '@components/Header';
import IndexWalking from './pages/walking/IndexWalking';
import NewPost from './pages/walking/NewPost';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<MungWiki />} />
        <Route path="/wikiDetail/:id" element={<WikiDetail />} />
        <Route path="/walking" element={<Walkingdog />} />
        <Route path="/walking" element={<IndexWalking />} />
        <Route path="/walking/newpost" element={<NewPost />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
