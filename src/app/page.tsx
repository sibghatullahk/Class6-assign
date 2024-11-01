import Navbar from "./components/Navbar";
import Newfoot from "./components/Newfoot";
import Link from "next/link";
import Image from "next/image";
// import About from "./about/page";
// import Contact from "./contact/page";
// import Gallery from "./gallery/page";
// import menu from "./menu/page";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <div className="flex justify-center items-center w-full h-auto mt-8 relative">
            
            <div className="absolute inset-0 -z-10">
                <Image 
                    src="https://static.wikia.nocookie.net/topgear/images/6/60/Top_Gear_Logo.jpg/revision/latest/scale-to-width-down/1000?cb=20190928235435" 
                    layout="fill" 
                    objectFit="cover" 
                    alt="Cover Background" 
                    className="opacity-50" 
                />
            </div>

            
            <div className="flex flex-col items-center w-full p-8 h-[400px] bg-zinc-500/70 rounded-md">
                <h1 className="text-3xl text-center text-blue-900">Find New and Used Cars in Pakistan</h1>
                <p className="text-center text-lg text-black mt-2">
                    Find what you are looking for with our quick links. Use the search boxes below to filter your search.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, temporibus blanditiis corrupti a molestias tenetur autem cum iure? Dolores, incidunt! Eligendi laboriosam eum corrupti hic est obcaecati, accusantium ullam quis.
                </p>

                
                <div className="flex justify-between w-full space-x-2 mt-4">
                    <input type="text" placeholder="Car Make/Model" className="w-1/3 p-2 border rounded-md"/>
                    <input type="text" placeholder="All Cities" className="w-1/3 p-2 border rounded-md"/>
                    <input type="text" placeholder="Price Range" className="w-1/3 p-2 border rounded-md"/>
                </div>

                <button className="bg-red-500 text-white mt-4 py-2 px-4 rounded-md hover:bg-red-600">
                    Search
                </button>
            </div>
        </div>

      <div className="flex flex-col w-full mt-8 rounded-md text-black h-auto p-4 space-y-4">
  <h1 className="text-2xl">Sell Your Car on Pakwheel and Get a Better Price</h1>

  <div className="flex flex-row w-full space-x-4">

  <div className="flex flex-col w-1/2 rounded-md p-4 h-[300px] bg-slate-300">
  <h1 className="text-2xl">Post Your Ad on Mywheels</h1>
  <div>
    <ul>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
    </ul>
  </div>
  <div className="bg-red-500 w-24 h-10 hover:bg-red-600 rounded-md">
    <p className="text-center text-white mt-1">
      <Link href="/post-ad">Post an Ad</Link>
    </p>
  </div>
</div>

<div className="flex flex-col w-1/2 rounded-md p-4 h-[300px] bg-slate-300">
  <h1 className="text-2xl">Try sell it for you</h1>
  <div>
  <ul>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
      <li>Lorem ipsum, dolor sit</li>
    </ul>
  </div>
  <div className="bg-blue-500 w-24 h-10 hover:bg-blue-600 rounded-md">
      <p className="text-center text-white mt-1">
      <Link href="/post-ad">Sell it 4 me</Link>
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
    <Image
     src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
     alt="Image 1"
     className="w-full h-auto object-cover"
     width={500}
     height={500}
    />
    <p className="text-white mt-2">Toyota Corolla <br /> PKR 25-30 Lakh</p>
  </div>
</Link>

          {/* Image Card 2 */}
          <div className="w-1/4 bg-blue-900 h-400 rounded-md shadow-md p-2 m-2">
            <Image
              src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={500}
              height={500}
            />
            <p className="text-white mt-2">Suzuki Alto <br /> PKR 35-40 Lakh</p>
          </div>

          {/* Image Card 3 */}
          <div className="w-1/4 bg-gray-600 h-400 rounded-md shadow-md p-2 m-2">
            <Image
              src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945"
              alt="Image 3"
              className="w-full h-auto object-cover"
              width={500}
              height={500}
            />
            <p className="text-white mt-2">Honda City <br /> PKR 125-130 Lakh</p>
            </div>

          {/* Image Card 4 */}
          <div className="w-1/4 bg-blue-900 h-400 rounded-md shadow-md p-2 m-2">
            <Image
              src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254"
              alt="Image 3"
              className="w-full h-auto object-cover"
              width={500}
              height={500}
            />
            <p className="text-white mt-2">Honda Civic <br />PKR 225-230 Lakh</p>
          </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center w-full h-auto p-2">
        {/* Background container */}
        <div className="flex justify-between w-11/12 p-4 h-[500px]">

          {/* Image Card 1 */}
          <div className="w-5/12 bg-gray-600 h-300 rounded-md shadow-md p-2 m-2">
            <Image
              src="https://cache1.pakwheels.com/system/bike_model_pictures/1329/medium/1.jpg?1665554161"
              alt="Image 1"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            />
            <p className="text-white mt-2">Suzuki 125 <br /> PKR 2-3 Lakh</p>
          </div>

          {/* Image Card 2 */}
          <div className="w-5/12 bg-blue-900 h-300 rounded-md shadow-md p-2">
            <Image
              src="https://cache1.pakwheels.com/system/bike_model_pictures/1403/medium/1.jpg?1666261928"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            />
            <p className="text-white mt-2">Suzuki 150<br /> PKR 5-36 Lakh</p>
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