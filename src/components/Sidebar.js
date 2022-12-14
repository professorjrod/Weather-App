import { Link } from "react-router-dom";
import { MdFavorite, MdLanguage } from "react-icons/md";
import { FaHome, FaInfo, FaSistrix } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const SideBarIcon = ({ icon, text, setLanguage }) => {
  const onLanguage = (e) =>
    setLanguage((language) => (language = e.target.innerText.toLowerCase()));
  return (
    <div className="sidebar-icon group">
      {icon}

      {icon.type === MdLanguage ? (
        <div
          className="flex language-tooltip group-hover:scale-100 flex-col space-y-2 items-center justify-center"
          onClick={onLanguage}
        >
          <div className="langbutton">EN</div>

          <div className="langbutton">ES</div>

          <div className="langbutton">FR</div>
        </div>
      ) : (
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      )}
    </div>
  );
};
const Sidebar = ({ setLanguage }) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-primary backdrop-blur-xl"
    >
      <Link to="/">
        <SideBarIcon icon={<FaHome size="28" />} text={"Home"} />
      </Link>
      <Link to="/favorites">
        <SideBarIcon icon={<MdFavorite size="28" />} text={"Favorites"} />
      </Link>
      <Link to="/search">
        {" "}
        <SideBarIcon
          icon={<FaSistrix size="28" />}
          text={"Search by Zip"}
        />{" "}
      </Link>
      <Link to="/map">
        {" "}
        <SideBarIcon icon={<BsMap size="28" />} text={"Map"} />{" "}
      </Link>
      <Link to="/World Clock">
        {" "}
        <SideBarIcon
          icon={<AiOutlineClockCircle size="28" />}
          text={"World Clock"}
        />{" "}
      </Link>
      <Link to="/about">
        <SideBarIcon icon={<FaInfo size="28" />} text={"About"} />
      </Link>
      <Link to="/about">
        <SideBarIcon
          setLanguage={setLanguage}
          icon={<MdLanguage size="28" />}
          text={"Language"}
        />
      </Link>
    </div>
  );
};

export default Sidebar;
