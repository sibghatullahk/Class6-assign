import Link from "next/link";
import Navbar from "./Navbar";
import Newfoot from "./Newfoot";

export default function Forms(){
    return(
        <div>
            <Navbar></Navbar>

            <h1 className="p-4 text-5xl font-semibold text-center uppercase">
                Enter your details
            </h1>

            <div>
            <form className="p-4 mt-10 flex gap-5 justify-center items-center flex-col border">
                <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Email" />

                <input type="password" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Password" />

                <input type="text" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Car Make/Model" />

                <Link href="./thanks" className="py-3 px-7 rounded-lg bg-blue-500 text-white text-center">
                     Place your order
                </Link>

            </form>
            </div>
        <Newfoot/>
        </div>
    )
}