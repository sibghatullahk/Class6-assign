import Navbar from "../components/Navbar";
import Newfoot from "../components/Newfoot";

export default function thanks (){
    return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center w-full h-screen p-2">
            
            <div className="flex flex-col justify-center items-center text-center w-full p-10 h-[300px] backdrop-brightness-75 rounded-md">
                
                <h1 className="text-5xl text-blue-900 mb-4">Thank You For Shopping</h1>
                
                <p className="text-xl">Your order will be delivered in three business days.</p>
            </div>
        </div>
        <Newfoot/>
    </div>
    );
}