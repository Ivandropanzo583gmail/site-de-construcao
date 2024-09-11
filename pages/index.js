import Casa from "../Components/casa"
import Navbar from "../Components/Navbar"
import Industrial from "../Components/Industrial_Service"
import Browse from "../Components/Browse"
import Founder from "../Components/Founders"
import QuoteForm from "../Components/QuoteForm"
import Footer from "../Components/Footer"
import Link from "next/dist/client/link"
import Head from 'next/head'
export default function Home() {
  return (
   <>
   
    <div>
      <Navbar />
      <Casa />
      <Industrial />
      <Browse />
      <Founder />
      <QuoteForm />
      <Footer />
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Site de Construção</title>
      </Head>
     
     
   

        
    </div>

   </>
  )
}