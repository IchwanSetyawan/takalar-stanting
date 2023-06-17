import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from "../../assets/image/banner1.png";
import BannerImage2 from "../../assets/image/banner2.png";

const Carrousel = () => {
  const settings = {
    dots: true, // Tampilkan titik navigasi
    infinite: true, // Aktifkan looping slide
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow: 1, // Jumlah slide yang ditampilkan pada satu waktu
    slidesToScroll: 1, // Jumlah slide yang digulirkan ketika tombol navigasi diklik
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div className="h-[448px] rounded-lg">
        <img src={BannerImage} className="w-full " />
      </div>
      <div className="h-[448px]rounded-md">
        <img src={BannerImage2} className="w-full" />
      </div>
    </Slider>
  );
};

export default Carrousel;
