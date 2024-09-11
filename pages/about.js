import Nav from "../Components/ABOUT/Nav"
import Cont from "../Components/ABOUT/Cont"
import Footer from "../Components/Footer"
import Company from "../Components/ABOUT/Company"
import Our from "../Components/ABOUT/Our_Funders"
import Head from 'next/head'



export default function about(){
    return(
        <>
            <div>
                
                <Nav /> 
                <Cont />
                <Company />
                <Our />
                <Footer />
                <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>Site de Construção</title>
                </Head>  
              
            </div>
        </>
    )
}