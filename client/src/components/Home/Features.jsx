import { Zap } from "lucide-react";
import React from "react";
import Title from "./Title";

const Features = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
const colorClasses = {
  violet: "bg-violet-100 border-violet-300",
  green: "bg-green-100 border-green-300",
  orange: "bg-orange-100 border-orange-300",
};

const iconColors = {
  violet: "stroke-violet-600",
  green: "stroke-green-600",
  orange: "stroke-orange-600",
};

  const features = [
    {
      title: "AI-Powered Resume Generation",
      desc: "Generate professional resumes instantly using AI tailored to your role.",
      color: "violet",
      icon: (
        <>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </>
      ),
    },
    {
      title: "ATS-Optimized Templates",
      desc: "Beat applicant tracking systems with keyword-optimized resume formats.",
      color: "green",
      icon: (
        <>
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </>
      ),
    },
    {
      title: "Smart Editing & Suggestions",
      desc: "Get real-time AI suggestions to improve wording, impact, and clarity.",
      color: "orange",
      icon: (
        <>
          <path d="M12 2v20" />
          <path d="M5 12h14" />
        </>
      ),
    },
  ];

  return (
    <div id="features" className="flex flex-col items-center my-10 scroll-mt-12">

      {/* Badge */}
      <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 rounded-full px-6 py-1.5">
        <Zap width={14} />
        <span>Simple Process</span>
      </div>

      {/* Title */}
      <Title
        title={"Build your resume"}
        description={
          "Create a professional resume in minutes with intelligent AI-powered tools and features"
        }
      />

      <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10">

        {/* Image */}
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="AI Resume Builder Preview"
        />

        {/* Features */}
        <div className="px-4 md:px-0">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="flex items-center justify-center gap-6 max-w-md cursor-pointer mt-4"
              >
                <div
                  className={`
                    p-6 flex gap-4 rounded-xl transition-all duration-300 border
                    ${
                      isActive
                        ? `bg-${feature.color}-100 border-${feature.color}-300 shadow-md`
                        : "bg-white border-transparent hover:border-gray-200 hover:shadow-sm"
                    }
                  `}
                >
                  {/* Icon */}
                  <svg
                    className={`size-6 stroke-${feature.color}-600`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {feature.icon}
                  </svg>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-700">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xs">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Features;