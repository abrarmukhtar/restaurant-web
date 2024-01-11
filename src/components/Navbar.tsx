import Menu from '@/components/Menu'
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './CartIcon';


const Navbar =()=>{
    const user = false;
    return (
        <div className='flex justify-between px-5 border-b-red-500 items-center h-12 uppercase border-b-2 text-red-500 md:h-24 lg:px-40'>
            {/* left side medium */}
            <div className='hidden md:flex gap-4 flex-1 '>
                <Link href='/'>HomePage</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/'>Contact</Link>
            </div>


            {/* Logo */}
            <div className='text-xl md:font-bold md:text-center flex-1'>
                <Link href='/'>MASSIMO</Link>
            </div>
            {/* Mobile menue */}
            <div className='md:hidden'>
                <Menu />
            </div>
            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>123 456 78</span>
                </div>
                {!user ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <Link href="/orders">Orders</Link>
                )}
                <CartIcon />
            </div>
        </div>
    );
}

export default Navbar;