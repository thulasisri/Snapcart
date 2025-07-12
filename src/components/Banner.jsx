// components/BannerCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Banner.css';
import { Autoplay } from 'swiper/modules';

const banners = [
  { id: 1, img: 'https://t3.ftcdn.net/jpg/04/45/16/96/360_F_445169635_V92LnhJXoMapMXuR4k9bVIu3lHZhDnWc.jpg', text: 'Summer Sale – Up to 50% Off' },
  { id: 2, img: 'https://media.istockphoto.com/id/1330049174/vector/all-new-arrival-banner-offer-product-retail-discount-promotion.jpg?s=612x612&w=0&k=20&c=Pd33JZZlGWaPYymOrFYc6U9mUT_bf96PP-vVgbqBAH0=', text: 'New Arrivals Just Dropped' },
  { id: 3, img: 'https://t3.ftcdn.net/jpg/05/22/23/04/240_F_522230479_FVVvpmHmG6KxXWKZjL8C9xq6CKOeZ8cf.jpg', text: 'Flash Sale Ends Tonight!' },
   { id: 4, img: 'https://as2.ftcdn.net/jpg/04/72/13/29/1000_F_472132913_AtxIUUwXVaNDlXRmGVa1dcFD92DRG9No.jpg', text: '"Hurry! Prices Drop. Time’s Ticking."' },
];

export default function BannerCarousel() {
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      modules={[Autoplay]} // ✅ register autoplay module here
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="carousel"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="carousel-slide">
            <img src={banner.img} alt={banner.text} className="carousel-img" />
            <div className="carousel-overlay">
              <h2 className="carousel-text">{banner.text}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
