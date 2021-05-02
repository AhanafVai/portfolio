import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Blog.css";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import Blog from "../../Image/blog.jpg";
import Blog2 from "../../Image/blog2.jpg";
import Blog3 from "../../Image/blog3.jpg";
import Blog4 from "../../Image/blog4.jpg";
import Blog5 from "../../Image/blog5.jpg";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Blogs() {
  return (
    <div className="text-md-start container blog-section">
      <h1>Blogs</h1>
      <div className="pt-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="card mb-3">
              <img src={Blog} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">WHAT ARE WEB VITALS?</h5>
                <p class="card-text">
                  Web Vitals are the new standard introduced by Google – a
                  collection of metrics against which websites are now rated.
                  This standard puts more emphasis on user experience and
                  website performance. Web vitals is a much stricter rating
                  system than the previous one. We can check the website rating
                  on PageSpeed Insights, and many people may think that the
                  result we get is the actual result of the page speed. The
                  reality is a bit different. The website doesn’t have to be the
                  fastest to have the best score. It must be fast and friendly
                  enough so users can move around pleasantly and comfortably.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card mb-3">
              <img src={Blog2} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">
                  HOW TO USE REACT NATIVE OVER THE AIR (OTA) UPDATES
                </h5>
                <p class="card-text">
                  Normally when you want to update your app, you need first to
                  build it and then send it to App Store or Google Play. A major
                  drawback of this solution is the time needed for these stores
                  to approve your update. Imagine a situation where an app with
                  a critical error was published to users by mistake. In these
                  cases, every second count. And this is where Over The Air
                  (OTA) may help us. <br />
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="card mb-3">
              <img src={Blog3} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">
                  TO HIRE, OR TO OUTSOURCE, THAT IS THE QUESTION
                </h5>
                <p class="card-text">
                  The entire process of mobile development is challenging – it
                  consists of more parts than just the development part. You
                  have an idea and specified budget to realise it, and you also
                  chose React Native as a technology you want to use. The last
                  question is: how to make all these things work? Is it better
                  to outsource the work to a specialised agency or hire an
                  in-house developer to start building an internal team?
                  Hopefully, you will find the answer to this question after
                  reading the below article.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card mb-3">
              <img src={Blog4} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">WHAT ARE GOOGLE PAGESPEED INSIGHTS?</h5>
                <p class="card-text">
                  PageSpeed Insights (PSI) reports on the performance of a page
                  on both mobile and desktop devices and provides suggestions on
                  how that page may be improved.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="card mb-3">
              <img src={Blog5} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">
                  Web Development WHAT IS SALEOR ECOMMERCE PLATFORM:
                  INTRODUCTION
                </h5>
                <p class="card-text">
                  Owning an online store seems to be a challenge nowadays. The
                  progressing digital transformation and the trend of moving
                  business online accelerated as the world’s situation changed
                  dramatically in the last twelve months. Such a situation also
                  changed the way people do the shopping and raised their
                  expectations. These two things combined led to more
                  significant demand for modern solutions in the eCommerce
                  industry. Owners of online stores want their customers to have
                  a better shopping experience delivered faster than ever before
                  with many features simplifying or making the whole buying
                  process more pleasing.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
