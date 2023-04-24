import React from 'react'
import NotFoundPage from './pages/NotFoundPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App