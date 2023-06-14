import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Producto from '../Producto';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

function ProductCard(props) {
  const { name, path } = props;
  const [products, setProducts] = useState([]);

  const [slidesPerView, setSlidesPerView] = useState(4);

  SwiperCore.use([Navigation, Pagination]);

  useEffect(() => {
    axios.get(path)
      .then(response => {
        setProducts(response.data);
       
      })
      .catch(error => {
        console.error(error);
      });
  }, [path]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h2>{name}</h2>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        navigation
        pagination={false} // Deshabilita la paginación
        loop
        loopFillGroupWithBlank={true}
        loopAdditionalSlides={slidesPerView}
      >
        {/* Tarjetas de producto */}
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Producto product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductCard;
