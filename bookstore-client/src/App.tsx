import { Routes, Route} from 'react-router-dom'
import CheckOut from './pages/CheckOut'
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'
import NavBar from './pages/NavBar'
import Register from './pages/Register'

const App = () => {
  return (
    <div className='relative text-white'>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element= {<HomePage/>}/>
          <Route path='login' element={<LogIn/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
          <Route path='register' element={<Register/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App