import {Link, withRouter} from 'react-router-dom'
import {IoMdMenu} from 'react-icons/io'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/about" className="nav-link-about">
            Learn<span style={{color: '#ffffff'}}>TECH</span>
          </Link>

          <li className="nav-menu-item-mobile-home">
            <IoMdMenu className="nav-bar-home-menu" />
          </li>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/about" className="nav-link-about">
            Learn<span style={{color: '#ffffff'}}>TECH</span>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/home" className="nav-link">
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
    </nav>
  </>
)

export default withRouter(Header)
