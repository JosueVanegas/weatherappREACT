import Profile from "./Profile"
import { Link } from "react-router-dom"
const options = [
    {name:'weather',url:'/'},
    {name:'about',url:'/about'}
]


const NavBar = () => {
    return (
      <nav className="bg-slate-900 flex flex-col sm:flex-row lg:flex-row items-center lg:justify-between sm:justify-between">
        <div className="flex items-center cursor-pointer p-5">
          <Link to={'/'}>
          <h1 className="text-white text-7xl transition-colors hover:text-yellow-500 duration-500 ease-linea">
            REACT <span className="bg-yellow-500 text-blue-200 text-xl">weather</span>{" "}
          </h1>
          </Link>
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
  