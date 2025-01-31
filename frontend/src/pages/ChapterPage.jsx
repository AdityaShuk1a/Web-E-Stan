import React from 'react';

const ChapterPage = () => {
    const topics = ['Topic1', 'Topic2', 'Topic3'];
    const exams = ['Exam1', 'Exam2', 'Exam3'];

    return (
        <div className="h-screen bg-transparent text-white flex justify-center items-center ">
            <div className="p-12 bg-[#252227] rounded-lg shadow-lg w-full max-w-4xl h-[70vh] flex flex-col justify-start items-center mt-12 border-[#333]">
                <h1 className="text-4xl font-semibold text-center mb-12" style={{ padding: '40px'  }}>Chapters & Exams</h1>
                {topics.map((topic, index) => (
                    <div key={index} className="flex justify-center items-center mb-8 w-full">
                        <a 
                            href={`#${topic}`} 
                            className="text-3xl font-bold text-blue-400 hover:text-blue-600 transition duration-300 block text-center"
                            style={{ flex: 1, padding: '10px 20px' }}
                        >
                            {topic}
                        </a>
                        <a 
                            href={`#${exams[index]}`} 
                            className="text-2xl font-bold text-green-400 hover:text-green-600 transition duration-300 block text-center"
                            style={{ flex: 1, padding: '10px 20px' }}
                        >
                            {exams[index]}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChapterPage;
