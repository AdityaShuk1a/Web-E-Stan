import React, { useState } from "react";
import Navbar from "../components/Navbar";

const topics = [
  "Algebra", "Geometry", "Trigonometry", "Calculus", "Probability",
  "Statistics", "Linear Algebra", "Differential Equations", "Combinatorics",
  "Set Theory"
];

const templates = [
  { title: "Lead Magnet", description: "Offer a high-value item for an opt-in", bgColor: "#fde68a" },
  { title: "FAQ Bot", description: "Answer visitors' frequently asked questions", bgColor: "#bbf7d0" },
  { title: "Lead Qualification Chatbot", description: "Provide a form with qualifying questions", bgColor: "#bfdbfe" },
  { title: "AI Responder", description: "Prompt visitor to ask a question", bgColor: "#fecaca" },
  { title: "Customer Support Bot", description: "Provide answers to customer questions", bgColor: "#bfdbfe" },
  { title: "Live Chat", description: "Prompt a live chat with an agent", bgColor: "#e9d5ff" }
];

const SubjectPage = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <>
      <Navbar />
      <div style={{ height: "100vh", width: "100vw", backgroundColor: "white",zIndex: 9,top: 0, position: "absolute", fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ flex: 1, width: "100%", maxWidth: "1400px", padding: "2rem", display: "flex", flexDirection: "column" }}>
          {/* Title Section */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937" }}>Chat Widget Platform</h1>
            <p style={{ color: "#6b7280", fontSize: "1.2rem" }}>Choose a template that suits you best. Modify or change it anytime.</p>
          </div>
          {/* Main Content Section */}
          <div style={{ display: "flex", flex: 1, gap: "2rem" }}>
            {/* Sidebar */}
            <div style={{ width: "20%", padding: "1.5rem", backgroundColor: "#f3f4f6", borderRadius: "1rem", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", height: "100%" }}>
              <h2 style={{ color: "#374151", fontWeight: "600", marginBottom: "1.5rem" }}>Filters</h2>
              <div>
                <label style={{ display: "block", marginBottom: "1rem", color: "#374151" }}>
                  <input type="checkbox" style={{ marginRight: "0.5rem" }} /> Lead Generation
                </label>
                <label style={{ display: "block", marginBottom: "1rem", color: "#374151" }}>
                  <input type="checkbox" style={{ marginRight: "0.5rem" }} /> Customer Support
                </label>
                <label style={{ display: "block", marginBottom: "1rem", color: "#374151" }}>
                  <input type="checkbox" style={{ marginRight: "0.5rem" }} /> Conversational Marketing
                </label>
              </div>
            </div>
            {/* Templates Section */}
            <div style={{ width: "80%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {templates.map((template, index) => (
                <div key={index} style={{ backgroundColor: template.bgColor, borderRadius: "1rem", padding: "2rem", textAlign: "center", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#374151" }}>{template.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectPage;
