import React from 'react'
import bgimage from "../../assets/images/banner.jpg"
import "./heropage.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Heropage = () => {
  var settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className='slider w-full h-[550px] overflow-hidden'>

        <h1 className='text-7xl text-white text-right pt-52 '> 
          <span className='text-amber-500 text-8xl font-semibold tablet:text-xl'>Smart EDU</span>Education college</h1>

          <p className='text-white text-right text-3xl '>With Landigoo responsive landing page template, you can promote your all hosting, domain and email services</p>

          <button className='btn h-16 w-52 bg-amber-500 font-semibold text-2xl border-white border-x-5 border-y-5  '>
            CONTACT US
          </button>
          <button className='btn1 h-16 w-52 bg-amber-500 font-semibold text-2xl border-white border-x-5 border-y-5  '>
            READ MORE
          </button>
        </div>
      </div>
      <div>
        <div className='slider2 w-full h-[550px] overflow-hidden'></div>
      </div>
      <div>
      <div className='slider3 w-full h-[550px] overflow-hidden'></div>
      </div>
    </Slider>
  );
}
export default Heropage
