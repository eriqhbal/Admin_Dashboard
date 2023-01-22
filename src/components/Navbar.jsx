import React from 'react'

// react-icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardDown } from 'react-icons/md';

// syncfusion
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// image
import avatar from '../data/avatar.jpg';

// Component
import { Chat, Cart, Notification, UserProfile } from '.';

// Import ContextAPI
import { UseStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative rounded-full text-xl p-3 hover:bg-light-gray">
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
        {icon}
      </span>
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const {activeMenu, setActiveMenu} = UseStateContext();
  return (
    <div className="flex relative justify-between p-2 md:mx-6">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="#7286D3" icon={<AiOutlineMenu />} />
    </div>
  )
}

export default Navbar
