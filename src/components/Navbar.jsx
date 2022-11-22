import { Link, NavLink } from "react-router-dom";
import Logo from "../images/Logotype.png";
const Navbar = () => {
  return (
    <div className=" bg-primary ">
        <nav className="flex px-40 py-5 justify-between items-center">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>

            {/* links */}
            <ul className="flex items-center  space-x-9">
                <li>
                    <NavLink 
                        to="/" 
                        className="text-white border-b-2 border-transparent hover:border-white transition duration-500 scale-75"
                    >
                        <span>Beranda</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="text-white border-b-2 border-transparent hover:border-white transition duration-500 scale-75"
                    >
                        <span>Tentang Kami</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/faq"
                        className="text-white border-b-2 border-transparent hover:border-white transition duration-500 scale-75"
                    >
                        <span>FAQ</span>
                    </NavLink>
                </li>
            </ul>

            {/* register button */}
            <div className="flex">
                <Link to="/register">
                    <button className="bg-gradient-to-r from-[#5334B1] to-[#401881] px-5 py-3 text-white rounded-lg drop-shadow-[0_5px_15px_#ffffff3f] hover:drop-shadow-[0_35px_35px_#ffffff3f] transition duration-500">
                        Daftar Peserta
                    </button>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar