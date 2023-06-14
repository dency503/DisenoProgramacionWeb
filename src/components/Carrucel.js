import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from'../img/img3.jpg';
import img4 from'../img/img4.jpg';
import CustomPrevIcon from './CustomPrevIcon'


export default () => {


  return (

    <div className='slideshow-container'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000, // Specify the delay between transitions in milliseconds
          disableOnInteraction: false, // Allow autoplay to continue even when user interacts with slides
        }}
        onSwiper={(swiper) => console.log(swiper)}
       
      >

        <SwiperSlide><img src={img1} style={{ height: '650px' }} alt='imagen 2' /></SwiperSlide>
        <SwiperSlide><img src={img2} style={{ height: '650px' }} alt='imagen 2' /></SwiperSlide>
        <SwiperSlide><img src={img3} style={{ height: '650px' }} alt='imagen 3' /></SwiperSlide>
        <SwiperSlide><img src={img2} style={{ height: '650px' }} alt='imagen 4' /></SwiperSlide>


        <div className="swiper-button-prev1 prev" style={{ color: 'black' }}>
          <CustomPrevIcon />
        </div>
        <div className="swiper-button-next1" style={{ transform: 'rotate(180deg)' }}>
          <CustomPrevIcon />
        </div>




        ...
      </Swiper>
    </div>

  );
};