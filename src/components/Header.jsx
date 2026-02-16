import { Link } from 'react-router-dom'
import { FaNewspaper } from 'react-icons/fa'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <FaNewspaper />
          <span>NewsFeed</span>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
