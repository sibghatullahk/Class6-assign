import Link from "next/link"
import Image from 'next/image';

export default Navbar
function Navbar(){
    return(
        <div>
            <header>
        <nav className=" flex w-full rounded-md bg-sky-900 h-28">
          <div className="flex w-auto">
            <div className="w-20 h-28"><p className=" text-pretty text-slate-50 rounded-sm"><Image src="/pakwheels.jpeg" width={100} height={50} alt="Logo"/></p>
          </div>
        </div>
        <div className="flex w-11/12 justify-end items-center">
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/">Home</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/">Used cars</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/">New Cars</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/">Bikes</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/">Auto Store</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/">Forums</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/gallery">Gallery</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/contact">Contact</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/about">About</Link></p></div>
        <div className="bg-blue-900 w-20 h-10 hover:bg-black"><p className=" text-center text-slate-50 mt-1"><Link href="/blog">Blogs</Link></p></div>
        
        <div className="flex w-auto items-center space-x-2 ml-4">"
        <div className="bg-gray-700 w-24 h-12 hover:bg-gray-800 rounded-md"><p className="text-center text-white mt-1"><Link href="/signin">Sign In / Sign Up</Link></p></div>

        <div className="bg-red-500 w-24 h-10 hover:bg-red-600 rounded-md"><p className="text-center text-white mt-1"><Link href="/post-ad">Post an Ad</Link></p></div>
        </div>
        </div>
        </nav>
      </header>
    </div>
    )
}