import {useState} from 'react'

import {Link, withRouter} from 'react-router-dom'
import {IoMdMenu} from 'react-icons/io'

import './index.css'

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const onClickNavMenu = () => {
    setToggleNav(!toggleNav)
  }

  const navMbMenu = toggleNav
    ? 'nav-menu-list-mobile-dis'
    : 'nav-menu-list-mobile'

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <Link to="/" className="nav-link-about">
              Learn<span style={{color: '#0f1635'}}>TECH</span>
            </Link>

            <button
              className="navbar-mobile-menu-btn"
              type="button"
              onClick={onClickNavMenu}
            >
              <IoMdMenu className="nav-bar-home-menu" />
            </button>
          </div>

          <div className="nav-bar-large-container">
            <Link to="/" className="nav-link-about">
              Learn<span style={{color: '#0f1635'}}>TECH</span>
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/courses" className="nav-link">
                  Courses
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={navMbMenu}>
          <Link to="/" className="nav-link mb">
            Home
          </Link>
          <Link to="/about" className="nav-link mb">
            About
          </Link>
          <Link to="/courses" className="nav-link mb">
            Courses
          </Link>
          <Link to="/blog" className="nav-link mb">
            Blog
          </Link>
          <Link to="/contact" className="nav-link mb">
            Contact
          </Link>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
