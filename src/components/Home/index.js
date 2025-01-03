import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-main-div">
      <div>
        <img
          src="https://img.freepik.com/premium-vector/lashmaker-online-service-platform-eyelash-extension-eyelashes-volume-correction-character-puting-fake-eyelashes-online-course-flat-vector-illustration_277904-16946.jpg"
          alt="course"
          className="mb-img"
        />
      </div>

      <div>
        <p className="home-p">
          Learn<span style={{color: '#0f1635'}}>TECH</span>
        </p>
        <h1 className="home-h1">
          Courses To Grow Your Income, Wealth, & Finance Confidence
        </h1>
        <p className="home-p desc">
          Our beginner friendly courses will help you become a financial expert
          in no time.
        </p>
        <Link to="/courses" className="link">
          <button type="button" className="course-btn">
            View All Courses
          </button>
        </Link>
      </div>

      <div>
        <img
          src="https://img.freepik.com/premium-vector/lashmaker-online-service-platform-eyelash-extension-eyelashes-volume-correction-character-puting-fake-eyelashes-online-course-flat-vector-illustration_277904-16946.jpg"
          alt="course"
          className="course-img"
        />
      </div>
    </div>
  </>
)

export default Home
