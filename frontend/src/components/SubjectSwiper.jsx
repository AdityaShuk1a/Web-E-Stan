import React, { useEffect } from 'react';
import SubjectsCard from './SubjectsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { gsap } from 'gsap';

const SubjectSwiper = () => {
    useEffect(() => {
        gsap.fromTo('.Slider', {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        });
    }, []);

    const subjects = [
        { id: 1, title: "English", description: "Learn English with fun and engaging content." },
        { id: 2, title: "Science", description: "Explore the wonders of science with interactive lessons." },
        { id: 3, title: "Maths", description: "Master mathematics with step-by-step tutorials." }
    ];

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-center my-6">Our Courses</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="w-full"
            >
                {subjects.map((subject) => (
                    <SwiperSlide key={subject.id} className="flex justify-center">
                        <SubjectsCard subject={subject} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SubjectSwiper;
