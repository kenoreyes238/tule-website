// import {useEffect} from "react"
// import AOS from "aos"
import Navbar from "./components/Navbar/Navbar"
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
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Menu /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default App
