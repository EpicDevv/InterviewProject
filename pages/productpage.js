import React from "react";
import { CartContext } from "../context/shopContext";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
function productpage() {
  const { add } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [img, setImg] = useState("11");
  const [item, setItem] = useState({
    id: 1,
    image: '/images/33.jpeg',
    title: 'ToGo Teeth Whitening Pen',
    variantPrice: 14.99,
    quantity: 1,


  });

  useEffect(() => {
    if (count <=0) {
      setCount(1);
    }
  }, [count]);

  return (
    <section className="mb-20">
      <div className="xl:flex xl:justify-center">

      <div className="xl:mt-20 xl:mr-10">
        <div>
          <div className="h-[400px] sm:h-[600px] lg:h-[700px] xl:w-[600px] xl:h-[500px]   mt-10 w-auto mx-auto relative">
            <Image
              src={`/images/${img}.jpeg`}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              className="" // just an example
            />
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <div
            onClick={() => {
              setImg("33");
            }}
            className="h-[100px] cursor-pointer w-[100px] relative"
          >
            <Image
              src="/images/33.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              className="" // just an example
            />
          </div>
          <div
            onClick={() => {
              setImg("11");
            }}
            className="h-[100px] cursor-pointer w-[100px] relative"
          >
            <Image
              src="/images/11.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              className="" // just an example
            />
          </div>
          <div
            onClick={() => {
              setImg("22");
            }}
            className="h-[100px] cursor-pointer w-[100px]  relative"
          >
            <Image
              src="/images/22.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              className="" // just an example
            />
          </div>
        </div>
      </div>
      <div className="xl:max-w-[500px]">
        <div>
          <h1 className="text-center text-[30px] sm:text-[40px] font-semibold opacity-70 mt-10">
            ToGo Teeth Whitening Pen
          </h1>
        </div>
        <div className="flex justify-center mt-2 sm:text-[26px] text-[20px]">
          <h1 className="mr-2 line-through text-gray-600">$19.99</h1>
          <h1 className="text-[22px] sm:text-[28px] font-semibold opacity-80">
            $14.99
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <div class="flex flex-row h-10 w-[100px] mb-5 justify-center rounded-lg relative bg-transparent mt-1">
            <button
              onClick={() => setCount(count - 1)}
              class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            
            <h1 className="flex px-4 bg-gray-200 font-semibold items-center">{count}</h1>
            <button
              onClick={() => setCount(count + 1)}
              class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <button onClick={() => {
              add({
                id: 1,
                image: '/images/33.jpeg',
                title: 'ToGo Teeth Whitening Pen',
                variantPrice: 14.99,
                quantity: count, 
              }), setCount(1)
            }} className="text-[20px] sm:text-[30px] hover:bg-blue-300 text-white bg-blue-500 rounded-lg px-6 py-2">
            Add to Cart
          </button>
        </div>
            <h1 className="text-center=">Description:</h1>
        <div className="text-center opacity-80 sm:text-[25px] xl:mx-0 xl:text-base lg:mx-20 mx-10 mt-5">
          
          <p>
            ToGo is a portable, professional grade whitening pen for on-the-go
            use. The fast acting formula effectively removes stains caused by
            coffee and wine for a bright, white smile without any trays, strips,
            or rinsing. Great for use on its own or for maintaining whiteness
            in-between treatments. The invigorating mint flavor freshens breath.
          </p>
          <p className="mt-5">
            Highly effective 9% Hydrogen Peroxide gel for quick results. Mint
            flavored for fresher breath. Easy brush-on applicator with NO trays,
            strips, or rinsing. Helps instantly dissolve stains on teeth. 3.0 ml
            of stabilized Hydrogen Peroxide. For stand-alone whitening or
            post-whitening maintenance. Store at room temperature, no
            refrigerator is needed! Hydrogen Peroxide: Powerful whitening agent
            removes deep stains quickly. Peppermint Oil: Freshens breath and
            invigorates the mouth for a clean feeling. Potassium Nitrate:
            Protects teeth from sensitivity commonly associated with bleaching.
            Polyacrylic Acid: Helps strengthen and harden tooth enamel.
          </p>
          <p className="mt-5">
            Togo pen can be used as a teeth whitening maintenance product.
          </p>

          <p className="text-left ml-2 text-[20px] mt-5">Instruction:</p>
          <p className="mt-5">
            Apply the gel directly on teeth, let the gel stay for 30 s. For
            better result, leave the whitening gel on teeth for longer time, up
            to 15 min. Gently remove any gel left on gums. (The whitening gel
            will not cause any permanent damage to gums; however temporary gum
            irritation may happen if the gel stays on gum for long time). Wash
            your teeth with water. Do not eat or drink for 30 mins.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default productpage;
