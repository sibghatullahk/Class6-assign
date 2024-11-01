import Navbar from "../components/Navbar";
import Newfoot from "../components/Newfoot";
import Link from "next/link";
import Image from "next/image";

export default function Cardet () {
    return (
        <div>
            <Navbar />
            
            <div className="flex flex-col w-full h-screen p-4 m-4 items-center">
                {/* Title */}
                <h1 className="text-blue-950 text-center mb-4 text-4xl">Toyota Corolla 2024 Prices in Pakistan, Images, Reviews & Specs</h1>

                {/* Centered Flex Box */}
                <div className="flex w-1/4 justify-center items-center h-72 m-4 shadow-md hover:brightness-110">
                <Image
                src="https://www.carpixel.net/w/1ae4763a6cbfc419d2090b95c67ff401/toyota-corolla-wallpaper-hd-8796.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={500}
              height={500}
              />
                </div>

                {/* Link Buttons */}
                <div className="flex space-x-2 mb-4">
                    <Link href="/details" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Details</Link>
                    <Link href="/reviews" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Reviews</Link>
                    <Link href="/specs" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Specs</Link>
                    <Link href="/gallery" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Gallery</Link>
                </div>
                <div>
                    <h1 className="text-slate-900 text-center mb-4 font-bold font-serif">Vehicle Description</h1>
                    <p><ul>
                        <li>Transmission: Automatic</li>
                        <li>Energy Dependency: Hybrid</li>
                        <li>High Ground Clearance</li>
                        <li>Fuel Average: 10-17 KM/LIter</li>
                        </ul>
                        </p>
                </div>
                
                {/*Payment Button */}
                <div className="w-full flex justify-center">
                    <Link href="./payment" className="mt-2 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 text-center">
                         Make Payment
                    </Link>
            </div>

            </div>

            <Newfoot />
        </div>
    );
}
