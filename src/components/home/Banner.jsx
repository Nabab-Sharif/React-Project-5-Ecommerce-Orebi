import Image from './../utilities/Image';
import BannerImg from '../../../src/assets/images/banner.png'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';


const Banner = () => {

  const [dotActive, setDotActive] = useState(0)

  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next)
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={

          {
            padding: "10px",
            position: 'absolute',
            left: '160px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '0',

          }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive
            ?
            {
              width: "30px",
              color: "#262626",
              borderRight: "3px solid black"
            }
            :
            {
              width: "30px",
              color: "transparent",
              borderRight: "3px solid #fff"
            }
        }
      >
        0{i + 1}
      </div>
    )
  };


  return (
    <>
      <section>
        <Slider {...settings}>

          <Link to="/" className='block no-underline'>
            <div className='h-[600] w-full'>
              <Image className="w-full h-full object-contain" source={BannerImg} alt="banner.jpg" />
            </div>
          </Link>

          <Link to="/" className='block no-underline'>
            <div className='h-[600] w-full'>
              <Image className="w-full h-full object-contain" source={BannerImg} alt="banner.jpg" />
            </div>
          </Link>

          <Link to="/" className='block no-underline'>
            <div className='h-[600] w-full'>
              <Image className="w-full h-full object-contain" source={BannerImg} alt="banner.jpg" />
            </div>
          </Link>

        </Slider>
      </section>
    </>
  )
}

export default Banner
