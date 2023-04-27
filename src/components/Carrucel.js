import { useState, useEffect } from 'react';
import flecha from '../img/icon/flecha.png'
const Slideshow = (props) => {

  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);
  
  const slides = [
    {
      src:
        'https://assets.adidas.com/images/w_1880,f_auto,q_auto/1dae35753c24403e8e64ae8401147793_9366/HK7486_01_laydown.jpg',
      alt: 'Imagen 1',
    },
    {
      src:
        'https://assets.adidas.com/images/w_940,f_auto,q_auto/298a90bbce3b4dceb456ac360103711b_9366/GN8451_01_laydown.jpg',
      alt: 'Imagen 2',
    },
    {
      src: 'imagen3.jpg',
      alt: 'Imagen 3',
    },
  ];

  return (
    <div className="boxcontainer">
      <div className="slideshow-container">

      <a className="prev" onClick={() => setCurrentSlide(currentSlide - 1)}>
          <img src={flecha} alt="" />
        </a>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}

       

        <a className="next" onClick={() => setCurrentSlide(currentSlide + 1)}>
          <img
            src={flecha}
            alt=""
            style={{ transform: 'scaleX(-1)' }}
          />
        </a>

        <div style={{ textAlign: 'center' }}>
          {slides.map((slide, index) => (
            <span
              key={index}
              className="dot"
              style={{
                backgroundColor:
                  index === currentSlide ? 'rgba(255, 255, 255, 0.8)' : '',
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;