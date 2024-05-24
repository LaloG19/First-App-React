import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide1 from '../../assets/img/Slide1.jpg';
import Slide2 from '../../assets/img/Slide2.jpg';
import Slide3 from '../../assets/img/Slide3.jpg';

const MySlider = () => {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      <SwiperSlide> <img src={Slide1} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide2} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide3} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide1} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide2} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide3} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide1} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide2} alt="Slide1"/> </SwiperSlide>
      <SwiperSlide> <img src={Slide3} alt="Slide1"/> </SwiperSlide>
      ...
    </Swiper>
    </>
  );
}

export default MySlider; 