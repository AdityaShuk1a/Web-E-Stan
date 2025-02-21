import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const SubjectsCard = ({ subject }) => {
    useEffect(() => {
        gsap.fromTo(
            `.Card-${subject.id}`,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: `.Card-${subject.id}`,
                    start: 'top 80%',
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, [subject.id]);

    return (
        <div className={`Card-${subject.id} bg-white shadow-lg rounded-lg border border-black`} style={{padding: "1rem", margin: "1rem 1rem"}}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-paper-plane text-3xl text-gray-800"></i>
                        <h1 className="text-3xl font-bold text-blue-600">{subject.title}</h1>
                    </div>
                    <p className="text-gray-500">{subject.description}</p>
                </div>
                <div className="relative w-32 h-32">
                    <div className="absolute  rounded-full m-4 border border-black" style={{
                        width : "15vh",
                        marginTop: "5vh"
                    }}>
                        <img src="/src/assets/full-moon.png" style={{
                            
                        }}alt="Full Moon" className="rounded-full"/>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <i className="fas fa-globe text-blue-600"></i>
                <p className="ml-2 text-gray-600">www.yourwebsite.com</p>
            </div>
            <div className="" style={{
                margin: "1vh"
            }}>
                <Link to='/SubjectPage' className="text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition" style={{padding : "0.6vh"}}>Start Learning</Link>
            </div>
        </div>
    );
};

export default SubjectsCard;
