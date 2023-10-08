import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImMenu, ImCross } from 'react-icons/im';
import './header.css'


import logo from '../../assets/Untitled_design-removebg-preview.png'
import { AuthContext } from '../../Provider/AuthProvider';


const Header = () => {
    const [open, setOpen] = useState(true);

    const { user, logOut } = useContext(AuthContext)

    console.log(user?.photoURL)



    return (
        <section className='sticky top-0 z-10 bg-pink-500 '>
            <nav className='flex container mx-auto  px-5 top-0 lg:flex-row justify-between items-center'>

                <img className='h-8 text-white md:h-16' src={logo} alt="" />

                <div className='-order-1 lg:order-none'>
                    <div>
                        <button onClick={() => setOpen(!open)} className='text-xl lg:hidden'>{
                            open === true ? <ImMenu></ImMenu> : <ImCross></ImCross>
                        }
                        </button>
                    </div>
                    <ul className={`absolute bg-pink-500 lg:gap-12 text-lg font-bold p-5 lg:flex lg:justify-center rounded-lg lg:static duration-300 ${open ? "-left-60" : "left-2"} lg:flex lg:justify-center`}>

                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/" >Home</NavLink></li>
                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to='/service'  >Services</NavLink></li>
                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/contact"  >Contact Us</NavLink></li>

                    </ul>
                </div>

                <div>

                    {
                        user ?
                            <div className="flex gap-2 p-1">
                                <div className="w-10 md:w-11 mask mask-circle">
                                    <img src={user.photoURL} />
                                </div><button onClick={logOut} className='px-2 md:px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-1 md:py-2'><NavLink to="/login"  >Log Out</NavLink></button>
                            </div>
                            :
                            <button className=''><NavLink className='px-4 hover:bg-white hover:text-black text-white font-semibold hover:duration-500 border-2 rounded-full py-2' to="/login"  >Log in</NavLink></button>
                    }

                </div>

            </nav>
        </section>
    );
};

export default Header;