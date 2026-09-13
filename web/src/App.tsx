import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Quests } from './pages/Quests';
import { Character } from './pages/Character';
import { Shop } from './pages/Shop';
import { Progress } from './pages/Progress';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/character" element={<Character />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
