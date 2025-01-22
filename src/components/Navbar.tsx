import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <a href="#">
            <img 
              src="transparent file_gold copy.png"
              className="w-32" 
              alt="Tule Coffee House Logo"
            />
          </a>  
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-10">
                <li>
                  <Link 
                    className="font-serif 
                    text-xl inline-block 
                    hover:bg-secondary p-3 
                    rounded-sm ease-in duration-200" 
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    className="font-serif 
                    text-xl inline-block 
                    hover:bg-secondary p-3 
                    rounded-sm ease-in duration-200" 
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link className="font-serif 
                    text-xl inline-block 
                    hover:bg-secondary p-3 
                    rounded-sm ease-in duration-200" 
                    to="/menu"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link className="font-serif 
                    text-xl inline-block 
                    hover:bg-secondary p-3 
                    rounded-sm ease-in duration-200" 
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
