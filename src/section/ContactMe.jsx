import AbbasImage from "../assets/Abbas.jpeg";

const ContactMe = () => {
  return (
    <div id="contact" className="relative h-screen justify-center flex ">
      <img 
        src={AbbasImage} 
        alt="Abbas" 
        className="absolute  w-full h-full object-cover " 
      />

      <div className="relative z-10 flex flex-col space-y-5 w-[70%]  justify-center p-20 rounded-lg ">
        <h1 className="text-center text-white font-extrabold">Contact Me</h1>
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 border-[1px] border-gray-200 bg-white/5 text-white placeholder-gray-100"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 border-[1px] border-gray-200 bg-white/5 text-white placeholder-gray-100"
        />
        <textarea 
          placeholder="Message" 
          className="p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 border-[1px] border-gray-200 bg-white/5 text-white placeholder-gray-100"
        ></textarea>
        <button className="bg-blue-900 text-white w-[100%] p-2 hover:bg-blue-700 rounded-lg focus:ring-green-700">Submit</button>
      </div>
    </div>
  );
}

export default ContactMe;
