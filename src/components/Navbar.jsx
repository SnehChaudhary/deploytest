import { NavLink } from "react-router-dom"
const Navbar = () => {
    return(
        <header className='header'>
            <NavLink to='/' className="w-10 h-10 rounded-lg bg-grey items-center justify-center flex font-bold shadow-md">
            <p className="purple-gradient_text">LG</p>
            </NavLink>
            <nav className="flex-text-lg gap-12 font medium">
                <NavLink to='/about' className={({isActive}) =>isActive ? 'text-purple-500 mx-6' : 'text-black-500 mx-6'}>About </NavLink>
                
                <NavLink to='/projects' className={({isActive}) =>isActive ? 'text-purple-500 mx-6' : 'text-black-500 mx-6'}>Projects</NavLink>
            </nav>

        </header>
    )
}

export default Navbar