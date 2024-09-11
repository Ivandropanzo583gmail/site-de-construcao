import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { WrenchIcon } from '@heroicons/react/24/outline';

export default function Browse(){
   
    return(
        <>
        
            <div className="bg-[url('/Browse/image.png')] h-full bg-cover mt-20">
                <div className=" pt-24 flex justify-center items-center">
                    <h1 className="text-white text-3xl text-center">Browse Our Systems</h1>
                </div>


                <div className="mt-10 md:flex block justify-center items-center">
                    <div className="bg-white w-40 h-40 ml-5 max-sm:ml-32 max-md:ml-44 ">
                        <div className='flex justify-center items-center'>
                            <Cog6ToothIcon className="h-12 w-12 text-neutral-700 " />
                        </div>
                        <h1 className="text-center pt-5">HVACSystems</h1>
                    </div>

                    <div className="bg-white w-40 h-40 ml-5 max-sm:ml-32 max-md:ml-44 max-md:mt-5">
                        <div className='flex justify-center items-center'>
                            <PencilSquareIcon className="h-12 w-12 text-black" />
                        </div>
                        <h1 className="text-center pt-5">Plumbing & Drainage Systems</h1>
                    </div>


                    <div className="bg-white w-40 h-40 ml-5 max-sm:ml-32 max-md:ml-44 max-md:mt-5">
                        <div className='flex justify-center items-center'>
                            <AcademicCapIcon className="h-12 w-12 text-black" />
                        </div>
                        <h1 className="text-center pt-5">Fire protection Systems</h1>
                    </div>


                    <div className="bg-white w-40 h-40 ml-5 max-sm:ml-32 max-md:ml-44 max-md:mt-5">
                        <div className='flex justify-center items-center'>
                            <WrenchScrewdriverIcon className="h-12 w-12 text-black" />
                        </div>
                        <h1 className="text-center pt-5">electrical Systems</h1>
                    </div>


                    <div className="bg-white w-40 h-40 ml-5 max-sm:ml-32 max-md:ml-44 max-md:mt-5">
                        <div className='flex justify-center items-center'>
                            <WrenchIcon className="h-12 w-12 text-black mr-2" />
                        </div>
                        <h1 className="text-center pt-5">infrastructure Systems </h1>
                    </div>


                </div>






            </div>
           
        
        </>
    )
}