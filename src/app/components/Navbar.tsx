import Link from "next/link"
import Image from 'next/image';

export default Navbar
function Navbar(){
    return(
        <div>
            <header>
        <nav className=" flex w-full bg-slate-500 h-20">
          <div className="flex">
            <div className="bg-green-600 w-20 h-20"><p className=" text-pretty text-slate-50 rounded-sm"><Image src="https://img.icons8.com/?size=100&id=23831&format=png&color=000000" width={100} height={50} alt="Logo"/></p>
          </div>
        </div>
        <div className="flex w-3/4 justify-end items-center">
        <div className="bg-blue-900 w-20 h-10"><p className=" text-center text-slate-50 mt-1"><Link href="/">Home</Link></p></div>
        <div className="bg-red-900 w-20 h-10"><p className=" text-center text-slate-50 mt-1"><Link href="/gallery">Gallery</Link></p></div>
        <div className="bg-yellow-900 w-20 h-10"><p className=" text-center text-slate-50 mt-1"><Link href="/contact">Contact</Link></p></div>
        <div className="bg-slate-900 w-20 h-10"><p className=" text-center text-slate-50 mt-1"><Link href="/about">About</Link></p></div>
        <div className="bg-lime-900 w-20 h-10"><p className=" text-center text-slate-50 mt-1"><Link href="/menu">Menu</Link></p></div>
        </div>
        </nav>
      </header>
    </div>
    )
}