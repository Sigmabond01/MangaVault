import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import { VaultSection } from '../Pages/VaultSection';

function App() {
  return (
    // Wrap your application or the part that needs routing with <Router>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Panels" element={<VaultSection />} />
      </Routes>
    </Router>
  );
}

export default App;