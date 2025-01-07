
import PropTypes from 'prop-types';

const Card = ({ skillsName, text, buttonColor ,icons}) => {
  return (
    <div className=" bg-blue-950 group  text-white flex flex-col justify-between items-center shadow w-[100%] md:w-[100%] rounded-lg p-4 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:scale-105 hover:shadow-lg">
      <div className="flex justify-center items-center gap-5 w-full mb-4">
       {icons}
        <span className="text-lg font-semibold">{skillsName}</span>
      </div>
      <button
        className={`justify-center rounded-lg hover:scale-105 border-2  text-white p-2 transition-all ease-in-out duration-300 ${buttonColor}`}
      >
        {text}
      </button>
    </div>
  );
};

Card.propTypes = {
  skillsName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  icons: PropTypes.string,
};

Card.defaultProps = {
  buttonColor: 'bg-fuchsia-500 hover:bg-pink-300', 
};

export default Card;



