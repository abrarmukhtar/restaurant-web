import Image from "next/image";
import {featuredProducts} from "@/data"

const Featured = () => {
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            {/* Wrapper */}
            <div className="w-max flex">
                {/* Single Item */}
                
             {featuredProducts.map((item)=>(
             <div key={item.id} className="w-screen h-[60vh] flex-col flex justify-around items-center p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
                    {/* Image */}
                   {item.img && (<div className="flex-1 w-full relative hover:rotate-[60deg] transition-all duration-500">
                        <Image src={item.img} alt="" fill className="object-contain" />
                    </div>)}
                    {/* Text Container */}
                    <div className="flex-1 flex flex-col justify-between items-center text-center gap-4">
                        <h1 className="text-xl font-bold uppercase">{item.title}</h1>
                        <p className="p-4 2xl:p-8">{item.desc}</p>
                        <span className="text-xl font-bold">${item.price}</span>
                        <button className="bg-red-500 text-white p-2 rounded-md"> Add to Cart</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Featured;