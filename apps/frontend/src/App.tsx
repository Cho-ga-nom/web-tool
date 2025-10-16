import './styles/App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DataManagerPage from './pages/DataManagerPage'
import LoginPage from './pages/LoginPage'
import DevApiPage from './pages/DevApiPage'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ position: 'absolute', top: 8, right: 12 }}>
        <Link to="/">데이터</Link> | <Link to="/login">로그인</Link> |{' '}
        <Link to="/dev-api">Dev API</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DataManagerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dev-api" element={<DevApiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
