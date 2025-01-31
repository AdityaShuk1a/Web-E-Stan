import React, { useEffect } from 'react';
import SubjectsCard from './SubjectsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const SubjectSwiper = () => {
    
    const subjects = [
        {
            id: 1,
            title: "English",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar"
        },
        {
            id: 2,
            title: "Science", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar"
        },
        {
            id: 3,
            title: "Mathematics",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar"
        }

    ];

    return (
        // <div className="w-full ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 25 }
                }}
                className="mySwiper py-8"
            >
                {subjects.map((subject) => {
                    console.log(subject); // ✅ Log outside JSX
                    return (
                        <div className='gap-[4vh]  ' style={{
                            marginRight: "20vh",
                        }} >
                            <SwiperSlide className='SubjectCard '  key={subject.id} style={{
                                margin : "7vh"
                            }}>
                            <SubjectsCard subject={subject} />
                        </SwiperSlide>
                        </div>
                        
                    );
                })}
            </Swiper>
        // </div>
    );
};

export default SubjectSwiper;
