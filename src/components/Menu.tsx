"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import CartIcon from '@/components/CartIcon';

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

const Menu =()=>{
    const [open, setOpen] = useState(false)
    const user = false;
    return (
        <div>

            <Image src={open ? '/close.png' : '/open.png'} alt="" width={20} height={20} onClick={() => setOpen(!open)} />

            {
                open && (
                    <div className='bg-red-500 text-white text-3xl gap-8 flex justify-center items-center flex-col w-full top-24 left-0 absolute h-[calc(100vh-6rem)] z-10'>
                        {links.map(item => (
                            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                        ))}
                        <Link
                            href={user ? "/orders" : "login"}
                            onClick={() => setOpen(false)}
                        >
                            {user ? "Orders" : "Login"}
                        </Link>
                        <CartIcon />
                    </div>
                )
            }
        </div>
    );
}

export default Menu;