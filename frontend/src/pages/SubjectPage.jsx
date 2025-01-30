import React from "react";

const topics = [
  "Algebra", "Geometry", "Trigonometry", "Calculus", "Probability",
  "Statistics", "Linear Algebra", "Differential Equations", "Combinatorics",
  "Set Theory"
];

const SubjectPage = () => {
  return (
    <div className="MainContainer h-[100vh] bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="HeaderSection h-[20vh] bg-blue-50 flex justify-between items-center px-8 py-6 shadow-md m-4 rounded-xl">
        <h1 className="SubjectTitle text-6xl font-bold text-blue-800">Subject Name</h1>
        <button className="AccessButton px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg">
          Access Knowledge
        </button>
      </div>

      {/* Content Section */}
      <div className="ContentSection flex flex-col sm:flex-row gap-8 p-8 flex-grow">
        {/* Left Side - Topics Section */}
        <div className="LeftSide w-full sm:w-1/2 flex flex-col">
          {/* Class Dropdown */}
          <div className="ClassDropdown h-[15%] min-h-[100px]">
            <div className="DropdownButton h-full p-6 bg-purple-50 rounded-xl shadow-md cursor-pointer border-2 border-purple-200">
              <h2 className="DropdownTitle text-xl font-semibold text-purple-800">Select Class</h2>
            </div>
          </div>

          {/* Topics Grid (Uniform Tile Size) */}
          <div className="flex-grow overflow-y-auto min-h-0 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="TopicItem bg-green-50 flex items-center justify-center rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-green-200 p-6"
                  style={{
                    height: "18vh", // Fixed uniform height
                  }}
                >
                  <h3 className="TopicTitle text-lg font-medium text-green-800">{topic}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Chatbot */}
        <div className="RightSide w-full sm:w-1/2 bg-amber-50 rounded-xl shadow-lg p-8 flex flex-col border-2 border-amber-200">
          <div className="ChatArea flex-grow flex flex-col">
            <div className="MessagesArea flex-grow overflow-y-auto p-4 bg-white rounded-lg shadow-inner">
              <div className="MessageItem mb-4 p-3 bg-blue-50 rounded-lg">Hello! How can I help you?</div>
            </div>
          </div>
          <div className="ChatInput mt-8 flex">
            <input type="text" placeholder="Ask your question..." className="flex-grow p-4 border-2 rounded-lg" />
            <button className="SendButton px-8 py-4 bg-amber-500 text-white rounded-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
