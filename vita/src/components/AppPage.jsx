import { Link, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Blog } from './Blog'

export const AppPage = () => {
  return (
    <>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <div className="main-route-place">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:valeur" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  )
} 