import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Courses from './components/Courses'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default App
