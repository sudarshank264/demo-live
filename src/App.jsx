import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DynamicPage } from './pages/DynamicPage';

function App() {
  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:"#060a10", color:"#fff" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:category/:slug" element={<DynamicPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
