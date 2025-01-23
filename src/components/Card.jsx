const SkillCard = ({ name, icon, progress }) => {
  return (
    <div id="skills" className="border p-5 rounded-lg shadow-md bg-gray-900 max-w-lg transition duration-300 hover:shadow-lg">
      <div className="flex items-center mb-2">
        <div className="w-12 h-12 mr-4 transform transition-transform duration-300 hover:scale-125 hover:text-yellow-500">
          {icon} 
        </div>
        <h2 className="text-xl font-bold text-white">{name}</h2>
      </div>

      <div>
        <p className="text-gray-200 mb-1">Progress: {progress}%</p>
        <div className="bg-gray-300 h-2 w-full rounded">
          <div
            className="bg-yellow-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
