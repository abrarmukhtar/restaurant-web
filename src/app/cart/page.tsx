import Image from "next/image";


function Cart() {
    return (
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
            {/* PRODUCTS CONTAINER */}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 ">
                {/* SING ITEM */}
                <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
            </div>
            {/* PAYMENT CONTAINER */}
            <div className="bg-fuchsia-50 h-1/2 p-4 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
                   
            <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
                    
                    <button className="w-1/2 bg-red-500 p-3  text-white rounded-md self-end ">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;