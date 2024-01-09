import { FaVideo } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      className="
          h-12 
          bg-red-600 
          flex 
          justify-left 
          items-center 
          text-white"
    >
      <FaVideo className="ml-5 text-3xl" />
      <h1 className="ml-3 text-left text-lg"> MyTube </h1>
    </header>
  );
};

export default Header;
