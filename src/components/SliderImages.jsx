import Slider from "react-slick";
import { useLocation } from "react-router";
import Item from "./Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderImages({ suggestions }) {
  const location = useLocation();
  console.log(suggestions)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  const settingsTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

 
  
  // useEffect(() => {
    

  // }, [])


  if (location.pathname !== '/cart') {
    return (
      <div className="slider-container">
        <Slider {...settings}>
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
  };



  return (
    <div className="slider-container">
      <Slider {...settingsTwo}>
        {suggestions.map(card => {
          return (<div className="div-products-cart" key={card.id}>
            <Item card={card} key={card.id} />
          </div>)
        }
        )}
      </Slider >
    </div >
  );
}


export default SliderImages;
