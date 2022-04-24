import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import Image from 'next/image'
import { FiShoppingBag } from "@react-icons/all-files/fi/FiShoppingBag";
export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.quantity)
  })

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl px-5 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <Image src="/images/logo.jpeg" alt="logo" width={100} height={100} />
          </a>
        </Link>
        <a 
          className="text-md font-bold flex items-center cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
          >
          <FiShoppingBag className='text-[20px] mr-2' /> ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  )
}
