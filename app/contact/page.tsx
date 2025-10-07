import React from 'react'
import PageBanner from '../Components/PageBanner'

export default function Page() {
  return (
<>
    <PageBanner />
    <div className="min-h-screen bg-gray-100">
      

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 rounded-xl p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-amber-500">Send us a message</h2>

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
                      rows={6}
                      aria-label="Message"
                    />
                  </label>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg w-full rounded-lg md:w-auto hover:bg-amber-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact info column */}
              <aside className="flex flex-col justify-center">
                <h1 className="text-2xl md:text-4xl text-amber-500 font-bold mb-4">Locate Us</h1>

                <div className="space-y-4 text-sm md:text-lg text-black">
                  <p className="leading-relaxed">
                    <strong className='text-amber-500'>Phone:</strong> <a href="tel:08130146023">08130146023</a>
                  </p>

                  <p className="leading-relaxed">
                    <strong className='text-amber-500'>Email:</strong>{' '}
                    <a href="mailto:kenp.code@gmail.com">kenp.code@gmail.com</a>
                  </p>

                  <p className="leading-relaxed">
                    <strong className='text-amber-500'>Address:</strong>{' '}
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti,
                      numquam at aspernatur dolor optio laudantium laborum?
                    </span>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
