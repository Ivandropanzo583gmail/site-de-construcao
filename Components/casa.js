import Link from "next/dist/client/link"

export default function Casa(){
    return(
        <>

            <div className="bg-[url('/Home/bg-home.jpg')] bg-cover w-screen h-svh  bg-center bg-gray-950 backdrop-blur-sm">
               <div className="flex justify-center items-center">
                    <h1 className=" pt-96 text-5xl text-white z-10 font-bold">We’re Always Ready <br></br> For A Challenge</h1>
               </div>
            <div className=" flex justify-center items-center">
                <Link href="/">
                    <button className="bg-red-600 text-white px-6 py-2 absolute bottom-40 hover:bg-red-500">Discover</button>
                </Link>
            </div>
            </div>

        </>
    )
}