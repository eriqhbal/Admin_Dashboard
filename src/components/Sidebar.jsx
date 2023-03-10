import React from 'react'

// Import Router
import { Link, NavLink } from 'react-router-dom';

// import React-icons
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';

// Syncfunctions
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Import Data
import { links } from '../data/dummy';

// Import Context
import { UseStateContext } from '../contexts/ContextProvider';


const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize, currentColor} = UseStateContext();
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md m-2"

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => handleCloseSidebar()} className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 ">
            <SiShopware /> <span>Admin</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => setActiveMenu((prevState => !prevState))} className="p-3 text-xl rounded-full hover:bg-light-gray md:hidden mt-4 block">
              <MdOutlineCancel />
            </button>

          </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map(item => {
            return <div key={item.title}>
              <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
              {item.links.map(link => (
                <NavLink style={({isActive}) => ({backgroundColor: isActive ? currentColor : ""})} to={`/${link.name}`} key={link.name} onClick={() => handleCloseSidebar()}
                  className={({ isActive }) => { return isActive ? activeLink : normalLink }}>
                  {link.icon}
                  <p className="capitalize">{link.name}</p>
                </NavLink>
              ))}
            </div>
          })}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar