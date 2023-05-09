import Header from './components/Header/Header'
import About from './components/About/About'
import './App.css'
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Header />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    </>
  )
}

export default App
