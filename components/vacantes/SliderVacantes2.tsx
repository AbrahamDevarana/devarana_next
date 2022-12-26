
import { CardVacantes } from './CardVacantes';
import { VacanteModalProps } from '../../interfaces';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderVacantes2 = ({setShowModal, setModalContent}:VacanteModalProps) => {

    const settings = {
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        speed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],

    }


  return (
    <>
        <Slider {...settings}>
            <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                 
            <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                 
            <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                 
            <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                 
            <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                 
        </Slider>
    </>

    // <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />
  )
}
