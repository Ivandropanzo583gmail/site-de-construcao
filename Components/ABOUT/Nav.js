import { useState } from "react";
import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";


export default function Nav(){
    
        
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

        return (

            <>

                

                <nav className="bg-white shadow-md fixed w-full z-10">
                            <div className="container mx-auto flex justify-between items-center p-4">
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="bg-red-600 p-2 rounded-full  mr-4">
                                <span className="text-white font-bold text-xl">P</span>
                                </div>
                                <div>
                                <h1 className="text-xl font-bold tracking-wider">PROJEX TEC</h1>
                                </div>
                            </div>

                            {/* Links Desktop */}
                            <div className="hidden md:flex space-x-8">
                                <ul className="flex space-x-24 text-sm font-semibold">
                                <li className="hover:text-gray-400"><Link href="/">Home</Link></li>
                                <li className='hover:text-gray-400'><Link href="#Copmpany" >Copmpany</Link></li>
                                <li className='text-red-600'><Link href="/about" ><a>About</a></Link></li>
                                <li className='hover:text-gray-400'><Link href="#Our_Founders" >Our Founders</Link></li>
                                </ul>
                            </div>

                            {/* Botão "Get A Quote" */}
                            <button className="hidden md:block">
                                <a href="#" className="bg-red-600 text-white px-4 py-2 rounded">Get A Quote</a>
                            </button>

                            {/* Menu Mobile */}
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleMenu}>
                                {isOpen ? (
                                    <FiX className="text-3xl text-gray-800" />
                                ) : (
                                    <FiMenu className="text-3xl text-gray-800" />
                                )}
                                </button>
                            </div>
                            </div>

                            {/* Mobile Menu */}
                            {isOpen && (
                            <div className="md:hidden bg-white shadow-md">
                                <ul className=" text-sm font-semibold text-center">
                                <li className="hover:text-gray-400 block py-2 px-4"><Link href="/" >Home</Link></li>
                                <li className='hover:text-gray-400 block py-2 px-4'><Link href="#Copmpany" >Copmpany</Link></li>
                                <li className='text-red-600 block py-2 px-4'><Link href="/about" >About</Link></li>
                                <li className='hover:text-gray-400 block py-2 px-4'><Link href="#Our_Founders" >Our Founders</Link></li>
                                </ul>
                                <a href="#" className="block bg-red-600 text-white py-2 px-4 rounded m-2 text-center">
                                Get A Quote
                                </a>
                            </div>
                        )}
                </nav>

               
            
            </>

    )
}