import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderImages() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="slider-container fotos" >
      <Slider {...settings} >
        <div>
          <img className="img-slider" src="/imagen1.jpg" alt="CyberMonday" />
        </div>
        <div>
          <img className="img-slider" src="/imagen2.jpg" alt="Promociones" />
        </div>
        <div>
          <img className="img-slider" src="/imagen3.jpg" alt="CyberMonday" />
        </div>
        <div>
          <img className="img-slider" src="/imagen4.jpg" alt="Compras" />
        </div>
      </Slider>
    </div>
  );

}


export default SliderImages;
