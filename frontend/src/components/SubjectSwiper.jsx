import React, { useEffect } from 'react'; // Added useEffect import
import SubjectsCard from './SubjectsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SubjectSwiper = () => {
    useEffect(() => { // Moved useEffect inside the component
        const tl = gsap.timeline();
        tl.fromTo('.Slider', {
            x : -100,
            duration : 1,
            ease : "power2.out",
            scrollTrigger : {
                trigger : '.Slider',
                start : "top 50%",
                end : "bottom bottom",
                scrub : 1,
                pin : true,
            },
        } , {
            x : 0,
            duration : 1,
            ease : "power2.out",
            scrollTrigger : {
                trigger : '.Slider',
                start : "top 50%",
                end : "bottom bottom",
                scrub : 1,
                pin : true,
            }
        }
    );
    }, []); // Added dependency array to useEffect

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
        },
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
        },
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
        <div className="Slider w-full flex justify-center items-center flex-nowrap overflow-x-auto">
            {subjects.map((subject) => {
                console.log(subject); // ✅ Log outside JSX
                return (
                    <div key={subject.id} className='gap-[4vh]' style={{ marginRight: "20vh" }}>
                        <SubjectsCard subject={subject} />
                    </div>
                );
            })}
        </div>
    );
};
export default SubjectSwiper;
