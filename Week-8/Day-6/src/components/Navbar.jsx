import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Navbar() {
    const { cart } = useContext(CartContext)
    return (
        <nav className="bg-black/70 w-full text-white fixed px-16 pt-10 pb-4">
            <div className="flex items-center justify-between">

                <div className='text-green-400 text-2xl font-bold'>
                    GreenStore
                </div>

                <div className='flex gap-16 border border-green-400 rounded-full px-20 py-4'>
                    <NavLink to='/' className={({ isActive }) => 
                        isActive ? 'text-green-400' : 'text-white hover:text-green-400'
                    } >
                        Home
                    </NavLink>

                    <NavLink to='/about' className={({ isActive }) => 
                        isActive ? 'text-green-400' : 'text-white hover:text-green-400'
                    } >
                        About
                    </NavLink>

                    <NavLink to='products' className={({ isActive }) => 
                        isActive ? 'text-green-400' : 'text-white hover:text-green-400'
                    } >
                        Products
                    </NavLink>

                    <NavLink to='cart' className={({ isActive }) => 
                        isActive ? 'text-green-400' : 'text-white hover:text-green-400'
                    } >
                        Cart({cart.length})
                    </NavLink>
                </div>

                <div className='bg-green-400 px-6 py-2.5 rounded-full hover:bg-green-600'>
                    <NavLink to='login' className={({ isActive }) => 
                        isActive ? 'text-black' : 'font-semibold text-black '
                    } >
                        Login
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Navbar