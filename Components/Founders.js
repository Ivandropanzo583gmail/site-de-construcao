import Imagem from "./Imagens"

export default function Founder(){
    return(
        <>
        
            <div className="bg-blue-950 h-full w-screen ">
                <div className="flex justify-center items-center pt-10">
                    <h1 className="text-white text-3xl text-center max-sm:mb-20 ">Founders</h1>
                </div>
                <div className="md:flex block justify-center items-center mt-5 ">
                    <div className="flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-lg  w-72 md:ml-20 max-md:mt-20 max-md:ml-10 ">
                       <div className="pt-0">
                            <img src="./Founders/img.png" alt="Imagem" className="w-28  "/>
                       </div>

                        <div>
                            <h1 className="mt-4 text-xl font-semibold text-gray-800">Mr. Ahmed Ismail</h1>
                            <p className="text-gray-600">Operations Manager</p>
                        </div>
                        <div className="mt-6 space-y-4">
                            {/* Botão de Contato */}
                            <button className="flex items-center justify-center w-full py-2 px-4 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                            <span>Contact</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12H8m0 0l4-4m-4 4l4 4"
                                />
                            </svg>
                            </button>

                            {/* Botão de Ver Projetos */}
                            <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">
                            View Projects
                            </button>
                        </div>

                    </div>
                    
                    


                    <div className="flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-lg  w-72 md:ml-20 max-md:mt-20 max-md:ml-10">
                       <div className="pt-0">
                            <img src="./Founders/img_.png" alt="Imagem" className="w-28  "/>
                       </div>

                        <div>
                            <h1 className="mt-4 text-xl font-semibold text-gray-800">Mr. Shaaban Nada </h1>
                            <p className="text-gray-600">Engineering & Procurement Managerr</p>
                        </div>
                        <div className="mt-6 space-y-4">
                            {/* Botão de Contato */}
                            <button className="flex items-center justify-center w-full py-2 px-4 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                            <span>Contact</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12H8m0 0l4-4m-4 4l4 4"
                                />
                            </svg>
                            </button>

                            {/* Botão de Ver Projetos */}
                            <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">
                            View Projects
                            </button>
                        </div>

                    </div>


                </div>
                <div className="mt-20">
                        <h1 className="text-white text-3xl font-semibold text-center  max-sm:mb-20 ">Clients</h1>
                </div>

                <Imagem />
                    
            </div>
        
        </>
    )
}