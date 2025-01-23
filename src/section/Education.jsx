import { useEffect, useState } from "react";

const Education = () => {
  const [inView, setInView] = useState(false);

  // Detect when the component enters the viewport to trigger the animation
  const handleScroll = () => {
    const element = document.getElementById("education");
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="education"
      className="py-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center p-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Education Journey
        </h3>
        <div className="space-y-6">
          {[
            {
              title: "Secondary School",
              description:
                "Completed secondary school, which laid the foundation for further studies and personal growth.",
            },
            {
              title: "Certificate of Participation",
              description:
                "Earned a Certificate of Participation in various development programs.",
            },
            {
              title: "Certificate in Training and Development Department",
              description:
                "Completed specialized training in the Development Department, enhancing professional and technical skills.",
            },
            {
              title: "Certificate in Community-Based Health First Aid",
              description:
                "Received certification in Community-Based Health First Aid, focusing on critical health and safety skills.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border-l-4 border-yellow-500 pl-4 p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out transform ${
                inView
                  ? "opacity-100 translate-y-0 animate-slideInUp hover:bg-gray-800 hover:shadow-xl hover:scale-105"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">
                {item.title}
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
