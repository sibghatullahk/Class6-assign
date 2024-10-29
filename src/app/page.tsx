import Navbar from "./components/Navbar";
import Newfoot from "./components/Newfoot";
import Link from "next/link";
// import Image from "next/image";
// import About from "./about/page";
// import Contact from "./contact/page";
// import Gallery from "./gallery/page";
// import menu from "./menu/page";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <div className="flex justify-center items-center w-full h-auto mt-8">
      <div className="flex flex-col items-center w-full p-4 h-[300px] backdrop-brightness-50 rounded-md"><h1 className="text-3xl">Find New and Used Cars in Pakistan</h1> <p className="text-center text-lg text-gray-200">
      Find what you’re looking for with our quick links. Use the search boxes below to filter your search. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, temporibus blanditiis corrupti a molestias tenetur autem cum iure? Dolores, incidunt! Eligendi laboriosam eum corrupti hic est obcaecati, accusantium ullam quis.
    </p>
    <div className="flex justify-between w-full space-x-2 mt-4">
      <input type="text" placeholder="Car Make/Model" className="w-1/3 p-2 border rounded-md"/>
      <input type="text" placeholder="All Cities" className="w-1/3 p-2 border rounded-md"/>
      <input type="text" placeholder="Price Range" className="w-1/3 p-2 border rounded-md"/>
    </div>
    <button className="bg-red-500 text-white mt-2 py-2 px-4 rounded-md hover:bg-red-600">
      Search
    </button>
    </div>
      </div>

      <div className="flex flex-col w-full mt-8 rounded-md bg-gray-800 text-white h-auto p-4 space-y-4">
  <h1 className="text-2xl">Sell Your Car on Pakwheel and Get a Better Price</h1>

  <div className="flex flex-row w-full space-x-4">

  <div className="flex flex-col w-1/2 rounded-md p-4 h-[300px] bg-slate-300">
  <h1>Post Your Ad on Mywheels</h1>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo, quidem cum corrupti distinctio tenetur nihil quo beatae ipsam inventore dicta aspernatur exercitationem nam possimus, alias laudantium earum, magni aliquid.
    </p>
    <br />
    ✅
    <br />
    ✅
    <br />
    ✅
  </div>
  <div className="bg-red-500 w-24 h-10 hover:bg-red-600 rounded-md">
    <p className="text-center text-white mt-1">
      <Link href="/post-ad">Post an Ad</Link>
    </p>
  </div>
</div>

<div className="flex flex-col w-1/2 rounded-md p-4 h-[300px] bg-slate-300">
  <h1>Try sell it for you</h1>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est doloribus dolor inventore repellendus molestias, culpa dolorum cum accusantium. Non consequatur odio eum harum officiis nesciunt, laboriosam reiciendis quis</p>
    <br />
    ✅
    <br />
    ✅
    <br />
    ✅
  </div>
  <div className="bg-blue-500 w-24 h-10 hover:bg-blue-600 rounded-md">
      <p className="text-center text-white mt-1">
      <Link href="/post-ad">Post an Ad</Link>
      </p>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-center w-full h-auto p-2">
        {/*background container */}
        <div className="flex flex-col justify-between w-full p-4 h-auto">
          <p>Featured New Cars</p>

          {/* Image Card 1 */}
          <div className="flex flex-row">

          <Link href="/cardet" className="w-1/4 bg-gray-600 h-400 rounded-md shadow-md p-2 m-2">
        <div>
    {/* <Image
      src="/path/to/your/image1.jpg"
      alt="Image 1"
      className="w-full h-auto object-cover"
      width={50}
      height={50}
    /> */}
    <p className="text-white mt-2">Image Card 1 Description</p>
  </div>
</Link>

          {/* Image Card 2 */}
          <div className="w-1/4 bg-blue-900 h-400 rounded-md shadow-md p-2 m-2">
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
          <div className="w-1/4 bg-gray-600 h-400 rounded-md shadow-md p-2 m-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 3"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 3 Description</p>
            </div>

          {/* Image Card 4 */}
          <div className="w-1/4 bg-blue-900 h-400 rounded-md shadow-md p-2 m-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 3"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 4 Description</p>
          </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center w-full h-auto p-2">
        {/* Background container */}
        <div className="flex justify-between w-11/12 p-4 h-[500px]">

          {/* Image Card 1 */}
          <div className="w-5/12 bg-gray-600 h-300 rounded-md shadow-md p-2 m-2">
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
          <div className="w-5/12 bg-blue-900 h-300 rounded-md shadow-md p-2">
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


      <div className="flex justify-center w-full h-auto p-2">
      <div className="flex justify-between w-full p-4 h-[300px] backdrop-brightness-75 rounded-md"><h1>Quick Links</h1></div>
      </div>
      <Newfoot/>
    </div>
  );
}