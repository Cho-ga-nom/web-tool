import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DataManagerPage from './pages/DataManagerPage';
import PatchPage from './pages/PatchPage';
import DevApiPage from './pages/DevApiPage';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <aside className="left-sidebar">
          <div className="sidebar-links">
            <Link to="/">Dashboard</Link>
            <Link to="/data">Game Data</Link>
            <Link to="/patch">Server Patch</Link>
            <Link to="/api">API Document</Link>
          </div>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/data" element={<DataManagerPage />} />
            <Route path="/patch" element={<PatchPage />} />
            <Route path="/api" element={<DevApiPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
