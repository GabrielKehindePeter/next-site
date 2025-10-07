import React from 'react'

const FooterMsg = () => {
  return (
    <div className='bg-amber-500 p-12'>
      <div className='bg-amber-400 p-6 text-black rounded-xl'>
        <h2 className="text-2xl font-bold mb-2">Contact us today</h2>
        <p>
          Email: <a href="mailto:kenp.code@gmail.com" className="underline">kenp.code@gmail.com</a>, call <strong>0201-2787000</strong>, <br />
          <strong>0700KENP</strong> or visit any of our branch closest to you.
        </p>
      </div>
    </div>
  )
}

export default FooterMsg
