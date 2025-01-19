const Education = () => {
  return (
    <section id="education" className="py-10 bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center p-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
          My Education Journey
        </h3>
        <div className="space-y-4">
          {[
            {
              title: 'Secondary School',
              description: 'Completed secondary school, which laid the foundation for further studies and personal growth.',
            },
            {
              title: 'Certificate of Participation',
              description: 'Earned a Certificate of Participation in various development programs.',
            },
            {
              title: 'Certificate in Training and Development Department',
              description: 'Completed specialized training in the Development Department, enhancing professional and technical skills.',
            },
            {
              title: 'Certificate in Community-Based Health First Aid',
              description: 'Received certification in Community-Based Health First Aid, focusing on critical health and safety skills.',
            },
            
          ].map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg"
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
