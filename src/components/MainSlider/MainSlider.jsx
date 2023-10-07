import style from  './MainSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Error from "../Error/Error";
import logo1 from '../../assets/images/slider-image-1.jpeg'
import logo2 from '../../assets/images/slider-image-2.jpeg'
import logo3 from '../../assets/images/slider-image-3.jpeg'
import logo4 from '../../assets/images/images.jpeg'
import logo5 from '../../assets/images/grocery-banner-2.jpeg'

export default function MainSlider() {
  return  <>

    <div className="row mb-5 g-0">
    <div  className="w-75">
    <Swiper
    pagination={{ clickable: true }}
    spaceBetween={30}
    slidesPerView={1}
>

    <SwiperSlide >
      <div className="cursor-pointer" style={{ height: '300px', objectFit: 'cover', objectPosition: 'center' }}>
        <img className="w-100 h-100" src={logo1} alt="" />
      </div>
    </SwiperSlide>
    <SwiperSlide >
      <div className="cursor-pointer" style={{ height: '300px', objectFit: 'cover', objectPosition: 'center' }}>
        <img className="w-100 h-100" src={logo2} alt="" />
      </div>
    </SwiperSlide>
    <SwiperSlide >
      <div className="cursor-pointer" style={{ height: '300px', objectFit: 'cover', objectPosition: 'center' }}>
        <img className="w-100 h-100" src={logo3} alt="" />
      </div>
    </SwiperSlide>

</Swiper>



    </div>
    <div className="w-25">
    <div className="cursor-pointer" style={{ height: '150px', objectFit: 'cover', objectPosition: 'center' }}>
        <img className="w-100 h-100" src={logo4} alt="" />
      </div>
    <div className="cursor-pointer" style={{ height: '150px', objectFit: 'cover', objectPosition: 'center' }}>
        <img className="w-100 h-100" src={logo5} alt="" />
      </div>



    </div>
    </div>
    </>

}