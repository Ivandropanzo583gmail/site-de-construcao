import Link from "next/link";

export default function Industrial(){
    return(
        <>
        
            <div className="mt-20 flex justify-center items-center " id="services">
                <h1 className="text-black text-3xl font-medium">Industrial Services</h1>
            </div>
            <div className="mt-16 flex justify-center items-center">
                <div className="bg-blue-950 w-96 h-64 ">
                   <h1 className="text-center text-white pt-16"> Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services.</h1> 
                </div>
                <div className="w-52 h-64 bg-orange-600 ml-3">
                    <h1 className="text-white text-center pt-24 text-3xl">Engineering</h1>
                </div>
            </div>
            <div className="flex justify-center items-center mt-24">
                <div>
                    <h1 className="text-black text-2xl font-medium mb-5">Mission</h1>
                    <p className="text-gray-600">We strongly believe that success is <br></br> based on pro-active and dedicated <br></br> teamwork in a professional and <br></br> ethical environment that leads <br></br> 
                    to creative solutions and fully <br></br> deserved rewards.</p>

                    <Link href="#">
                        <p className="text-red-500 mt-5">view more</p>
                    </Link>
                </div>

                <div className="ml-10">
                    <h1 className="text-black text-2xl font-medium mb-5">Vision</h1>
                    <p className="text-gray-600">We aim to be a leading contractor <br></br>
                    in Egypt by focusing on the timely <br></br> implementation of our projects,<br></br> 
                    and meeting the expectations & <br></br> requirements of our customers at <br></br> the highest possible level.</p>

                    <Link href="#">
                        <p className="text-red-500 mt-5">view more</p>
                    </Link>
                </div>

                <div className="ml-10">
                    <h1 className="text-black text-2xl font-medium mb-5">Culture</h1>
                    <p className="text-gray-600">Our work culture is embodied in <br></br> several principles and values that <br></br> guide every Projex-Tec employee <br></br> 
                    in delivering our vision.</p>

                    <Link href="#">
                        <p className="text-red-500 mt-5">view more</p>
                    </Link>
                </div>
            </div>
            
        
        </>
    )
}