import Imagem from "../Imagens"

export default function Our(){
    return(
        <>


            <div className="bg-gray-50" id="Our_Founders">
                    
                <div className=" md:flex block justify-center items-center  mt-96 ">
                    <div className="flex justify-center items-center">
                        <img src="./ABOUT/Our_Founders/Rectangle.png" alt="Imagem" className="w-96  "/>
                    </div>
                    <div className="ml-20 max-md:pt-5">
                        <h1 className="text-red-600 text-2xl font-semibold">Mr. Ahmed Ismail</h1>
                        <p className="text-gray-600 pt-5">Bachelor’s degree in Mechanical Engineering from Ain Shams <br></br>University, Cairo, Egypt, 2002. With 20 years of experience in the <br></br> construction field for the main contractor of the below-listed <br></br> construction projects before founding Projex-Tec.</p>
                    </div>
                </div>

                <Imagem />


                
                <div className=" md:flex block justify-center items-center   ">
                    <div className="mr-20 max-md:pb-5">
                        <h1 className="text-red-600 text-2xl font-semibold">Mr. Shaaban Nada</h1>
                        <p className="text-gray-600 pt-5">Bachelor’s degree in Mechanical Engineering from Cairo University, Egypt, 2004.<br></br>
                        - MCIPS® Member of the Chartered Institute of Procurement & Supply (CIPS – UK) <br></br> 
                        - CPSM® (Certified Supply Management Professional) from <br></br>
                        Institute for Supply Management (ISM-USA). <br></br>
                        - CPP® (Certified Purchasing Professional) from the <br></br>
                        American Purchasing Society (APS-USA)<br></br>
                        With 17 years of experience in Engineering & Procurement for the main contractor<br></br> of the below-listed construction projects before founding Projex-Tec.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./ABOUT/Our_Founders/Rectangle_.png" alt="Imagem" className="w-96  "/>
                    </div>
                </div>

                <Imagem />

            </div> 

           
        
        </>
    )
}