import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSunny, TiWeatherNight , TiWeatherPartlySunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherWindyCloudy, TiWeatherWindy} from 'react-icons/ti';
import { TiHome, TiInfoLarge, TiZoom } from 'react-icons/ti';
import React from 'react'
const Sidebar = () => {
    return (
      <div className="fixed top-0 right-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-sm">
        <i><SideBarIcon icon={<TiHome size="30"/>} text="Home" /> </i>
        <i><SideBarIcon icon={<TiInfoLarge size="30" />}text="Info" /></i>
        <i><SideBarIcon icon={<TiZoom size="30"/>} text="Search"/> </i>
      </div>
    )
  }

  const SideBarIcon = ({ icon, text }) => {
    return(
    <div className="sidebar-icon">
        {icon}
        <span className="sidebar-tooltip">
            {text}
        </span>
    </div>
    
    )
  }
  
  export default Sidebar