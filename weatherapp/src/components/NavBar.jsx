import Profile from "./Profile"
import { Link } from "react-router-dom"
const options = [
    {name:'weather',url:'/'},
    {name:'about',url:'/about'}
]


const NavBar = () => {
    return (
      <nav className="bg-slate-700 flex flex-col sm:flex-row lg:flex-row items-center lg:justify-between sm:justify-between">
        <div className="flex items-center cursor-pointer">
          <h1 className="text-white text-7xl p-5 transition-transform hover:translate-x-1">
            REACT <span className="bg-yellow-500 text-blue-200 text-xl p-2">weather</span>{" "}
          </h1>
        </div>
        <div className="flex justify-center content-center sm:pt-0 pt-5">
          <ul className="flex gap-2 justify-items-center">
            {options.map((option) => (
              <Link
                to={option.url}
                className="text-slate-400 p-10 transition-colors text-xl hover:text-white hover:cursor-pointer hover:"
                key={option.name}
              >
                {option.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="pt-5">
          <Profile />
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  