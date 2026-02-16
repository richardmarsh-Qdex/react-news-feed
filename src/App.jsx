import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NewsFeed from './pages/NewsFeed'
import ArticleDetail from './pages/ArticleDetail'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
