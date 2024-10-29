import Navbar from "../components/Navbar";
import Newfoot from "../components/Newfoot";
import Link from "next/link";

export default function Cardet () {
    return (
        <div>
            <Navbar />
            
            <div className="flex flex-col w-full h-60 bg-gray-600 p-4 m-4 items-center">
                {/* Title */}
                <h1 className="text-white text-center mb-4">Toyota Corolla 2024 Prices in Pakistan, Images, Reviews & Specs</h1>

                {/* Centered Flex Box */}
                <div className="flex w-1/4 justify-center items-center bg-blue-900 h-64 mx-auto mb-4">
                    
                </div>

                {/* Link Buttons */}
                <div className="flex space-x-2 mb-4">
                    <Link href="/details" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Details</Link>
                    <Link href="/reviews" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Reviews</Link>
                    <Link href="/specs" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Specs</Link>
                    <Link href="/gallery" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Gallery</Link>
                </div>
                <div>
                    <h1 text-white text-center mb-4>Vehicle Description</h1>
                </div>
                
                {/*Payment Button */}
                <div className="w-full flex justify-center">
                    <Link href="./payment" className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 text-center">
                         Make Payment
                    </Link>
            </div>

            </div>

            <Newfoot />
        </div>
    );
}
