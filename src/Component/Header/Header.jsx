import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImMenu, ImCross } from 'react-icons/im';


import logo from '../../assets/Untitled_design-removebg-preview.png'


const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <section className='container mx-auto px-10 bg-pink-500'>
            <nav className='flex  lg:flex-row justify-between items-center'>

                <img className='h-8 md:h-16' src={logo} alt="" />

                <div className='-order-1 lg:order-none'>
                    <div>
                        <button onClick={() => setOpen(!open)} className='text-xl lg:hidden'>{
                            open === true ? <ImMenu></ImMenu> : <ImCross></ImCross>
                        }
                        </button>
                    </div>
                    <ul className={`absolute bg-pink-500 lg:gap-12 text-lg font-bold p-5 absolute lg:flex lg:justify-center rounded-lg lg:static duration-300 ${open ? "-left-60" : "left-2"} lg:flex lg:justify-center`}>

                        < li><NavLink to="/" >Home</NavLink></li>

                        <li><NavLink   >Services</NavLink></li>

                        <li><NavLink   >Contact Us</NavLink></li>

                    </ul>
                </div>

                <div className="">
                    <button className='btn bg-slate-800 text-purple-300'><NavLink to="/login"  >Log in</NavLink></button>
                    {/* <img className="h-8 lg:h-16 rounded-full" src={logo} /> */}
                </div>

            </nav>
        </section>
    );
};

export default Header;