import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Certificate of Participation',
    description: 'Awarded for active participation in various development programs aimed at enhancing professional and technical skills.',
  },
  {
    title: 'Certificate in Training and Development Department',
    description: 'Focused on developing training programs to enhance both professional and technical abilities in various fields.',
  },
  {
    title: 'Certificate in Community-Based Health First Aid',
    description: 'Emphasizes critical health and safety skills, particularly in community settings, enabling prompt and effective first aid.',
  },
];

const Certifications = () => {
  return (
    <div id='education' className="flex items-center justify-center h-screen bg-gray-700">
      <div className="certifications py-6 px-4 w-full max-w-xl bg-gray-800 text-white rounded-lg shadow-lg shadow-gray-900/70 transition-shadow duration-300 hover:shadow-2xl hover:shadow-yellow-400/50">
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">Education</h2>
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              className="p-4 bg-gray-900 rounded-md shadow-md shadow-gray-900/70 hover:shadow-lg hover:shadow-yellow-300/50 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-1 text-yellow-300">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
