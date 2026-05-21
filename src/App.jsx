import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DynamicPage } from './pages/DynamicPage';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Platforms } from './pages/Platforms';
import { Blogs } from './pages/Blogs';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:"#060a10", color:"#fff" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:category/:slug" element={<DynamicPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
