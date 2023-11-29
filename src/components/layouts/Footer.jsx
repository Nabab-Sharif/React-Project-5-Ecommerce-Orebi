
import { Link } from 'react-router-dom';
import Image from './../utilities/Image';
import FooterLogo from '../../../src/assets/images/logo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";



const Footer = () => {


  // for menu array crate
  let navarr = [
    {
      text: 'home',
      url: 'http://localhost:5173/'
    },
    {
      text: 'shop',
      url: 'http://localhost:5173/shop'
    },
    {
      text: 'about',
      url: 'http://localhost:5173/about'
    },
    {
      text: 'contact',
      url: 'http://localhost:5173/contact'
    },
    {
      text: 'journal',
      url: 'http://localhost:5173/journal'

    }
  ]

  // for shop array create 
  let shoparr = [
    {
      text: 'category 1'
    },
    {
      text: 'category 2'
    },
    {
      text: 'category 3'
    },
    {
      text: 'category 4'
    },
    {
      text: 'category 5'
    }
  ]

  // for help array create 
  let helparr = [
    {
      text: 'privacy policy'
    },
    {
      text: 'terms & conditions'
    },
    {
      text: 'special E-Shop'
    },
    {
      text: 'shipping'
    },
    {
      text: 'secure payments'
    }
  ]




  return (
    <>
      <footer className="bg-[#F5F5F3] py-[55px]">
        <div className="max-w-container mx-auto">

          <div className='flex gap-x-[145px]'>

            {/* Left Side */}
            <div className='flex gap-x-[140px]'>

              <div>
                <h5 className='uppercase font-dm text-base leading-[23px] text-[#262626] pb-4 font-bold'>Menu</h5>
                <ul className='flex flex-col gap-y-[6px]'>
                  {
                    navarr.map((item, index) => (
                      <li key={index}>
                        <Link to={item.url} className='capitalize font-dm text-[14px] text-[#6D6D6D] leading-[23px]'>{item.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <h5 className='uppercase font-dm text-base leading-[23px] text-[#262626] pb-4 font-bold'>Shop</h5>
                <ul className='flex flex-col gap-y-[6px]'>
                  {
                    shoparr.map((item, index) => (
                      <li key={index}>
                        <Link className='capitalize font-dm text-[14px] text-[#6D6D6D] leading-[23px]'>{item.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <h5 className='uppercase font-dm text-base leading-[23px] text-[#262626] pb-4 font-bold'>help</h5>
                <ul className='flex flex-col gap-y-[6px]'>
                  {
                    helparr.map((item, index) => (
                      <li key={index}>
                        <Link className='capitalize font-dm text-[14px] text-[#6D6D6D] leading-[23px]'>{item.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>

            </div>


            {/* Right Side */}
            <div className='flex gap-x-[256px]'>

              <div>
                <address>
                  <span className='font-dm font-bold text-base text-[#262626] leading-[27px] not-italic '>(052) 611-5711 <br /> company@domain.com</span>
                  <span className='not-italic font-dm text-[14px] text-[#6D6D6D] leading-[23px] block mt-[15px]'>575 Crescent Ave. Quakertown, PA 18951</span>
                </address>
              </div>
              <div>
                <Link to="/">
                  <Image source={FooterLogo} alt="logo.png" />
                </Link>
              </div>

            </div>

          </div>



          {/* copy right part */}
          <div className='flex justify-between mt-[65px]'>
            <div className='flex gap-x-[26px] cursor-pointer '>
              <FaFacebookF className='text-[#262626] text-[16px]' />
              <FaLinkedinIn className='text-[#262626] text-[16px]' />
              <FaInstagram className='text-[#262626] text-[16px]' />
            </div>

            <div>
              <p className='font-dm text-[#6D6D6D] text-[14px] font-normal leading-6 not-italic cursor-pointer'>2023 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
