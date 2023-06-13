import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

        <SwiperSlide><img src='https://assets.adidas.com/images/w_1880,f_auto,q_auto/1dae35753c24403e8e64ae8401147793_9366/HK7486_01_laydown.jpg' style={{ height: '300px' }} /></SwiperSlide>
        <SwiperSlide><img src=
          'https://assets.adidas.com/images/w_940,f_auto,q_auto/298a90bbce3b4dceb456ac360103711b_9366/GN8451_01_laydown.jpg' style={{ height: '300px' }}
          alt='Imagen 2' /></SwiperSlide>

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