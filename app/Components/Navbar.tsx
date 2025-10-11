import Link from 'next/link';
import React from 'react'
import Themeswitcher from './Themeswitcher';

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><Link href={'/'} className='text-xl text-amber-400 hover:text-amber-600'>Home</Link></li>
            <li><a href='#about' className='text-xl text-amber-400 hover:text-amber-600'>About</a></li>
            <li><a href='#info' className='text-xl text-amber-400 hover:text-amber-600'>Business</a></li>
            <li><Link href={'/contact'} className='text-xl text-amber-400 hover:text-amber-600'>Contact Us</Link></li>
            <li>
            <Link href={'/blog'} className='text-xl text-amber-400 hover:text-amber-600'>Blog</Link>
            </li>
          <li><Link href={'/faq'} className='text-xl text-amber-400 hover:text-amber-600'>FAQ</Link></li>
          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl text-amber-500">KenpSite</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href={'/'} className='text-xl text-amber-400 hover:text-amber-600'>Home</Link></li>
          <li><a href='#about' className='text-xl text-amber-400 hover:text-amber-600'>About</a></li>
          <li><a href='#info' className='text-xl text-amber-400 hover:text-amber-600'>Business</a></li>
           <li><Link href={'/contact'} className='text-xl text-amber-400 hover:text-amber-600'>Contact Us</Link></li>
          <li>
            <Link href={'/blog'} className='text-xl text-amber-400 hover:text-amber-600'>Blog</Link>
          </li>
          <li><Link href={'/faq'} className='text-xl text-amber-400 hover:text-amber-600'>FAQ</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <Themeswitcher/>
        <a className="btn bg-amber-500 hover:bg-amber-600 rounded-lg">Get Started</a>
      </div>
    </div>
  );
}

export default Navbar
