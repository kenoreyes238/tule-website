// import {useEffect} from "react"
// import AOS from "aos"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import "aos/dist/aos.css"

const App = () => {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 700,
  //     easing: "ease-in",
  //     delay: 100,
  //   })
  // })
  return (
    <div className="overflow-x-hidden">
      <Router>
       <Navbar />
       <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/> 
       </Routes>  
      </Router>  
    </div>
  )
}

export default App
