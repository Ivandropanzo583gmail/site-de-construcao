export default function Company(){
    return(
        <>

            <div className="md:flex block justify-center items-center" id="Copmpany">
                <div className="flex justify-center items-center mt-20">
                    <img src="./ABOUT/Company/Rectangle.png" alt="Imagem" className="w-96"/>
                </div>
                <div className="ml-20">
                    <h2 className="text-red-600 mt-5">Company mission</h2>

                    <h1 className="text-3xl text-black">“Success is based on <br></br> pro-active and dedicated <br></br> teamwork in a professional <br>
                    </br>and ethical environment...”</h1>
                    <p className="pt-5">We strongly believe that success is based on pro-active and <br></br> dedicated teamwork in a professional and ethical environment that <br></br> leads to creative solutions and fully deserved rewards.<br></br> 
                    This said, we always focus on safety, quality, a detailed approach, <br></br> and above all, diligent handling of budgetary means to maintain <br></br> high standards at all levels of our activities, especially in dealings <br></br> with employees, suppliers, subcontractors, and customers.<br></br></p>
                </div>
            </div>

            <div className="md:flex block justify-center items-center">
                <div className="max-w-4xl mx-auto py-8 px-4">
                    <h2 className="text-red-500 font-bold text-xl mb-4 ">COMPANY CULTURE</h2>
                    <ul className="space-y-6">
                        {[
                        "Foster a professional and ethical work environment.",
                        "Set safety and quality as our top priorities.",
                        "Encourage creativity and innovation in every aspect of our work.",
                        "Recognize the value of a continuous improvement.",
                        "Be open, listen to our customers, and adapt to change."
                        ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="w-2.5 h-2.5 bg-red-500 rounded-full mt-2 mr-4"></span>
                            <p className="text-gray-800 text-base">{item}</p>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className=" max-md:hidden  flex justify-center items-center mr-96">
                    <img src="./ABOUT/Company/Rectangle_.png" alt="Imagem" className="w-96 "/>
                </div>
                
            </div>
        
        </>
    )
}

{/* <h2>Company mission</h2>

<h1>“Success is based on pro-active and dedicated teamwork in a professional and ethical environment...”</h1>*/}