import React from 'react'


const PageBanner = ({pagename}: { pagename: string }) => {
  return (
    <div>
     <div
      className="h-80 bg-cover bg-center flex text-left pt-20 text-white"
      style={{ backgroundImage: "url('/imgs/bg.jpg')" }} >
         <div className="breadcrumbs max-w-xs text-sm pt-20 pl-6">
      <ul className="text-2xl">
        <li>Home</li>
        <li className='text-amber-400 font-bold'>{pagename}</li>
      </ul>
</div>
</div>
    </div>
  )
}

export default PageBanner