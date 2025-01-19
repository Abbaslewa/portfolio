import PropTypes from 'prop-types';

const Card = ({ skillsName, text, buttonColor, icons }) => {
  return (
    <div
      className="bg-blue-950 group text-white flex flex-col justify-between items-center shadow-md w-full md:w-full rounded-lg p-6 transition-all ease-in-out duration-300 transform hover:bg-blue-900 hover:scale-105 hover:shadow-lg hover:opacity-90 animation-backgroundChange"
    >
      <div className="flex justify-center items-center gap-4 w-full mb-4">
        {icons}
        <span className="text-xl font-semibold">{skillsName}</span>
      </div>
      <button
        className={`rounded-lg text-white p-3 transition-all ease-in-out duration-300 border-2 ${buttonColor} hover:scale-105 hover:opacity-80`}
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
  icons: PropTypes.node,
};

Card.defaultProps = {
  buttonColor: 'bg-fuchsia-500 hover:bg-pink-300',
};

export default Card;
