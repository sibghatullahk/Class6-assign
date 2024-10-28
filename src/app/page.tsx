import Navbar from "./components/Navbar";
import Newfoot from "./components/Newfoot";
// import Image from "next/image";
// import About from "./about/page";
// import Contact from "./contact/page";
// import Gallery from "./gallery/page";
// import menu from "./menu/page";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <div className="flex justify-center w-full h-auto p-2">
        {/* Background container */}
        <div className="flex justify-between w-11/12 p-4 h-[500px]">

          {/* Image Card 1 */}
          <div className="w-5/12 bg-indigo-600 h-300 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 1"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 1 Description</p>
          </div>

          {/* Image Card 2 */}
          <div className="w-5/12 bg-fuchsia-500 h-300 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image2.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 2 Description</p>
          </div>
        </div>
      </div>

      {/* the next 3 components */}

      <div className="flex justify-center w-full h-auto p-2">
        {/* Cyan background container */}
        <div className="flex justify-between w-11/12 p-4 h-[500px]">
          {/* Image Card 1 */}
          <div className="w-1/4 bg-indigo-600 h-300 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 1"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 1 Description</p>
          </div>

          {/* Image Card 2 */}
          <div className="w-1/4 bg-fuchsia-500 h-400 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image2.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 2 Description</p>
          </div>

          {/* Image Card 3 */}
          <div className="w-1/4 bg-indigo-600 h-400 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 3"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 3 Description</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-auto p-2">
      <div className="flex justify-between w-11/12 p-4 h-[300px] backdrop-brightness-75 rounded-md"><h1>Quick Links</h1></div>
      </div>
      <Newfoot/>
    </div>
  );
}