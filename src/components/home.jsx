import { useParams } from "react-router-dom"
import { useState } from "react"
// import {  FeaturedImageGallery } from "./Gallery"
// import {Mempkl} from "./Mempelai"
import { IoIosArrowDropup } from "react-icons/io";

function Home(){

    const [tombol, setTombol] = useState(false)

    let toogleClassCheck = tombol ? 'hidden' : ''

    let toogleClassCheck2 = tombol ? '' : 'hidden'

    const {nameTo} = useParams()

    return(
        
    <>
        <section className={`   ${toogleClassCheck} h-screen bg-center bg-no-repeat bg-gradient-to-tr from-black to-transparent relative`}>
            <div className="bg-cover w-full h-screen absolute mix-blend-overlay"></div>
            <div className=" px-20 mx-auto pt-48 text-center relative text-white font-montserat">
                <h2 className=" text-2xl font-normal pb-6">Pernikahan</h2>
                <h1 className=" font-dcScript text-[40px] font-bold pb-6">Melly Lara &  Sianu</h1>
                <h3 className="text-[20px] font-normal pb-6">{nameTo} & Patner</h3>
                <p className="text-[20px] font-normal pb-6">innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex  flex-row justify-center space-y-0  pb-48">
                    <button onClick={() => setTombol(true)} href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base f   ont-normal text-center  rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Buka Undangan
                    </button>
                </div>
            </div>
        </section>
            
        <section className={`   ${toogleClassCheck2} h-screen bg-center bg-no-repeat bg-gradient-to-tr from-black to-transparent relative`}>
        <div className="bg-cover w-full h-screen absolute mix-blend-overlay"></div>
            <div className=" mx-[58px] pt-[400px] text-center text-white font-montserat">
                <h2 className=" font-normal text-2xl pb-5">Pernikahan</h2>
                <h1 className=" font-dcScript font-bold text-[40px] pb-5">Melly Lara & Sianu</h1>
                <h2 className=" font-normal text-2xl pb-5">11 November 2024</h2>
                <div className="flex justify-center ">
                    <IoIosArrowDropup  className="w-[81px] h-[71px]"/>
                </div>
            </div>
        </section>

        {/* Mempelai */}
            {/* <div className={toogleClassCheck2}>
                <div className="bg-white h-screen mx-auto">
                 <Mempkl ></Mempkl>
                    </div>
            <div className="container mx-auto p-15">
                <div className="pt-20">
                <FeaturedImageGallery />
                </div>
            </div>
        </div> */}
    </>

        

    )
}

export default Home