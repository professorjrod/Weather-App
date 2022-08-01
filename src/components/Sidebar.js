import {MdFavorite} from 'react-icons/md'
import {FaRandom,FaInfo} from 'react-icons/fa'
import {US, CN, GB, RU, JP} from 'country-flag-icons/react/3x2'

const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-primary text-secondary">
            <SideBarIcon icon={<MdFavorite size="28" />} text={"Favorites"}/>
            <SideBarIcon icon={<FaRandom size="28" />} text={"Random"}/>
            <SideBarIcon icon={<FaInfo size="28" />} text={"About"}/>
            <SideBarIcon icon={<US size="28"/>} text={"United States"} />
            <SideBarIcon icon={<CN size="28"/>} text={"China"}/>
            <SideBarIcon icon={<GB size="28"/>} text={"Great Britain"}/>
            <SideBarIcon icon={<RU size="28"/>} text={"Russia"}/>
            <SideBarIcon icon={<JP size="28"/>} text={"Japan"}/>
        </div>
    )

};

export default Sidebar