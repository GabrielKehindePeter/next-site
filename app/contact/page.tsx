import React from 'react'
import PageBanner from '../Components/PageBanner'

export default function Page() {
  return (
<>
    <PageBanner name="Contact Us" />
    <div className="min-h-screen ">
      

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className='mt-10 p-5 text-3xl text-gray-400'>Want to Reach Us?</h2>
          <div className="rounded-xl p-8 pt-8 pb-28 shadow-sm">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Form column */}


              <div className='bg-gray-300 rounded-br-4xl rounded-tl-4xl p-4 col-span-2'>

                <h2 className="text-2xl md:text-xl font-semibold mb-4 text-black">Send us a message</h2>

                <form className="space-y-4">
                  <label className="block">
                    <span className="text-sm text-black md:text-base">Full Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="input input-lg w-full mt-2"
                      aria-label="Full Name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm text-black md:text-base">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-lg w-full mt-2"
                      aria-label="Email"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm text-black md:text-base">Subject</span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="input input-lg w-full mt-2"
                      aria-label="Subject"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm md:text-base text-black">Message</span>
                    <textarea
                      placeholder="Message"
                      className="textarea textarea-neutral w-full mt-2"
                      rows={3}
                      aria-label="Message"
                    />
                  </label>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn btn-lg w-full rounded-lg md:w-auto bg-amber-600 hover:bg-black"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

<div>
  <img src={'/imgs/contact2.jpg'} className='rounded-tr-4xl rounded-bl-4xl' />
</div>
       
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
