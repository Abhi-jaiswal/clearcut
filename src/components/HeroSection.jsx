import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-white w-full rounded-3xl'>
      {/* background */}
      <div className='absolute'>
        <img src="./background.svg"/>
      </div>

      {/* section 1 */}
      <div className='flex flex-col mx-[181.63px] px-[48px] justify-items-end py-[128px]'>
        <div className='w-[528px] ml-[50%]'>
          <div className='mb-[24px] text-[77.66px] tracking-tighter leading-none text-bold'>
          Strategic UX Design & Brand Studio.
          </div>

          <div className='mb-[24px] text-[25.88px]'>
          We help entrepreneurs and businesses achieve ambitious dreams by building design centric products and brands.
          </div>
        </div>
      </div>

      {/* section 2 */}

      {/* section 3 */}
      <div className='py-[96px]'>
        <div className='flex items-center px-[48px] mx-[181.632px]'>
          <div className='text-[29px] w-[350px] text-bold px-[16px] mb-[4px] tracking-tighter leading-none'>Featured Work.</div>
          <div className='w-full h-[1px] bg-[#9496A9] ml-[48px]'></div>
        </div>

        <div className='flex justify-between px-[48px] mx-[133.6px]'>
          <div className='px-[16px] group'>
              <div className=' py-[24px] group-hover:scale-95 transition-all duration-500 hover:cursor-pointer'>
                <img src="https://images.ctfassets.net/b62jgkkofmz2/6JGmTe13I2f9bNnXptsos0/c6c78158d3395686edbbeb2566abe7e5/zyppysCaseStudyCardBanner_2x.png?w=600&h=813&q=100&fm=webp" className='w-[400px] h-[545px] rounded-3xl'/>
              </div>
              <div className='w-[304px]'>
                <img src="https://images.ctfassets.net/b62jgkkofmz2/53QqxmKvGdR14P2C8z3q2X/805effeb1876ec61214663bd80684fde/logo-with-text.svg" className='w-[131px] h-[48px] pl-[8px]'/>
                <div className='py-[24px] pl-[16px]'>
                Building India's first ever rental car marketplace.
                </div>
              </div>
          </div>
          <div className='group my-[64px] px-[16px]'>
            <div className='group-hover:scale-95 transition-all duration-500 py-[24px] hover:cursor-pointer myVideo'>
              <video src="https://videos.ctfassets.net/b62jgkkofmz2/6Jtrf2ZLxdzj4iKvU7mFcg/b69a6ff8af4f0fd176d48c37a0e69b43/Intro_Movie_for_AHL_Product_Design.mp4" 
                loop muted className='w-[640px] h-[360px] rounded-xl' onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => e.target.pause()}/>
            </div>

            <div className='w-[512px]'>
              <img src="https://images.ctfassets.net/b62jgkkofmz2/4taqxDkC14IjVNKhbVkYE8/aa3814a58b3a976dd293b4b581b08a6c/black.svg" className='h-[48px] ml-[8px]'/>

              <div className='my-[24px] ml-[16px]'>
                A decade old news channel's makeover
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className='bg-[#F7F8FB] py-[128px]'>
        <div className='mx-[181.63px] px-[48px] tracking-tighter leading-none '>
          <div className='text-[44.32px] text-bold w-[403px]'>
          Pick Our Brains
          </div>
          <div className='text-[29.54px] text-[#8E91AB] mt-[16px] w-[403px]'>
          News, Blogs, Good Intentions etc.
          </div>
        </div>

        <div>
          <div className='overflow-scroll'>


            <div className='w-[1692px] py-[160px] pl-[177px] pr-[267px] flex '>
              <div className='relative w-4/12'>
                <div className='group w-[288px] h-[352px] cursor-pointer'>
                  <div className='overflow-hidden rounded-xl'>
                    <img src="https://images.ctfassets.net/b62jgkkofmz2/5bemkj3ZoX5BVB5UVVrHk1/303b1b9499997bc3f0126dc854eae589/why_does_the_world_need_another_design_agency_by_praneeth_pike_2x.png?w=1200&h=479&q=100&fm=webp" className='w-[288px] h-[352px] object-cover rounded-xl shadow-xl group-hover:scale-105 transition-all duration-500'/>
                  </div>
                  <div className='absolute w-[289.93px] p-[24px] rounded-xl border-s bg-[#FFFFFF] top-[245px] left-[-1px] h-[192px] group-hover:translate-y-[-10px] transition-all duration-200'>
                    <div className='my-[24px] text-[19.2px]'>
                    Why does the world need another design agency?
                    </div>
                    <div className='text-[14px]'>
                      Praneet pike
                    </div>
                  </div>
                </div>
                </div>
              <div className='relative w-4/12'>
                <div className='group w-[288px] h-[352px] cursor-pointer'>
                  <div className='overflow-hidden rounded-xl'>
                    <img src="https://images.ctfassets.net/b62jgkkofmz2/3vqmAu6CHwYEIrBpPFR45/2683e3dd64de4de5c36adea9bc3c6e0e/logo-construction-blog-thumbnails.png?w=1000&h=1000&q=100&fm=webp" className='w-[288px] h-[352px] object-cover rounded-xl group-hover:scale-105 transition-all duration-500'/>
                  </div>
                  <div className='absolute w-[289.93px] p-[24px] rounded-xl border-s bg-[#FFFFFF] top-[245px] left-0 h-[216px] group-hover:translate-y-[-10px] transition-all duration-200'>
                    <div className='my-[24px] text-[19.2px]'>
                    Our New Brand Identity reflects its heart — literally | Part II
                    </div>
                    <div  className='text-[14px]'>
                    Praneet pike
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative w-4/12'>
                <div className='group w-[288px] h-[352px] cursor-pointer'>
                  <div className='overflow-hidden rounded-xl'>
                    <img src="https://images.ctfassets.net/b62jgkkofmz2/3EEniwFhvVivYOBi7xMS9B/1c57f3d06d6383f690400c034d264bf0/why-the-rebrand-5-whys-blog-thumbnails.png?w=1000&h=1000&q=100&fm=webp" className='w-[288px] h-[352px] object-cover rounded-xl group-hover:scale-105 transition-all duration-500'/>
                  </div>
                  <div className='absolute w-[289.93px] p-[24px] rounded-xl border-s bg-[#FFFFFF] top-[245px] left-0 h-[216px] group-hover:translate-y-[-10px] transition-all duration-200'>
                    <div className='my-[24px] text-[19.2px]'>
                    Our New Brand Identity reflects our heart — literally | Part I
                    </div>
                    <div  className='text-[14px]'>
                      Praneet pike
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className='mx-[144px] mt-[96px] h-full px-[48px] py-[72px] pb-[168px]'>
        <div className='w-[403.39px]'>
          <div>
            <img src="./logo2.svg" className='w-[71.73px] h-[60.96px]'/>
          </div>


          <div className='text-[29.54px] text-[#60637B] my-[24px] ml-[4px]'>
          Lesser bullshit leads to larger impact.
          </div>

          <div className='animation1 flex items-center h-[31px] w-full hover:cursor-pointer'>
            <div className='w-[8px] h-[31px] bg-[#E8E9ED]'></div>
            <div className='px-[24px] py-[4px] text-sm text-bold text-[#60637B] '>
            Know More About Us
            </div>
            
          </div>

        </div>      
      </div>
    </div>
  )
}

export default HeroSection
