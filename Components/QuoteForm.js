import Link from 'next/dist/client/link';
import { useState } from 'react';


export default function QuoteForm() {

    const [open, setOpen] = useState(''); 

    const toggleOpen = (section) => {
      setOpen(open === section ? '' : section);
    };

    return (
        <>
        
            <div className='md:flex block justify-center items-center' id='contact'>
                <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md mt-20">
                    {/* Título */}
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Request A Quote</h2>
            
                    {/* Formulário */}
                    <form className="space-y-4">
                    {/* Nome Completo */}
                    <div>
                        <label className="block text-gray-700">Full Name</label>
                        <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your full name"
                        />
                    </div>
            
                    {/* Celular */}
                    <div>
                        <label className="block text-gray-700">Mobile</label>
                        <input
                        type="tel"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your mobile number"
                        />
                    </div>
            
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                        type="email"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your email" required
                        />
                    </div>
            
                    {/* Serviço */}
                    <div>
                        <label className="block text-gray-700">Service</label>
                        <select
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                        <option value="">Select a service</option>
                        <option value="consulting">Consulting</option>
                        <option value="design">Design</option>
                        <option value="development">Development</option>
                        </select>
                    </div>
            
                    {/* Mensagem */}
                    <div>
                        <label className="block text-gray-700">Message</label>
                        <textarea
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your message"
                        rows="4"
                        />
                    </div>
            
                    {/* Botão de Envio */}
                    <div className="text-center">
                        <Link href="#">
                            <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                            >
                            Submit
                            </button>
                        </Link>
                    </div>
                    </form>




        
                </div>


                    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Our Promises</h2>

                    {/* Safety Section */}
                    <div>
                        <div
                        className="flex justify-between items-center cursor-pointer py-4 border-b border-gray-300"
                        onClick={() => toggleOpen('safety')}
                        >
                        <h3 className="text-lg font-semibold text-gray-800">Safety</h3>
                        <span className="text-xl">{open === 'safety' ? '-' : '+'}</span>
                        </div>
                        {open === 'safety' && (
                        <div className="mt-4 text-gray-600">
                            <p>
                            Safety is a priority for our company. We ensure all projects are executed in the safest manner possible.
                            </p>
                        </div>
                        )}
                    </div>

                    {/* Quality Section */}
                    <div>
                        <div
                        className="flex justify-between items-center cursor-pointer py-4 border-b border-gray-300"
                        onClick={() => toggleOpen('quality')}
                        >
                        <h3 className="text-lg font-semibold text-red-500">Quality</h3>
                        <span className="text-xl">{open === 'quality' ? '-' : '+'}</span>
                        </div>
                        {open === 'quality' && (
                        <div className="mt-4 text-gray-600">
                            <p>
                            Projex-Tec Co. is dedicated to satisfying our customers by providing quality products & services on time
                            and striving towards continual improvement. Our management is committed to ensuring the highest standards
                            are met.
                            </p>
                            {/* O conteúdo pode ser expandido aqui */}
                        </div>
                        )}
                    </div>

                    {/* Additional Sections - Adicione outras seções conforme necessário */}
                    {/* Example: */}
                    {/* <div>
                        <div
                        className="flex justify-between items-center cursor-pointer py-4 border-b border-gray-300"
                        onClick={() => toggleOpen('otherSection')}
                        >
                        <h3 className="text-lg font-semibold text-gray-800">Other Section</h3>
                        <span className="text-xl">{open === 'otherSection' ? '-' : '+'}</span>
                        </div>
                        {open === 'otherSection' && (
                        <div className="mt-4 text-gray-600">
                            <p>
                            Additional information can be displayed here.
                            </p>
                        </div>
                        )}
                    </div> */}
                </div>
            </div>

        
        </>
    );
  }
  