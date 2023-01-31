import React, {useEffect} from 'react'

// react-icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

// syncfusion
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// image
import avatar from '../data/vatar5.png';

// Component
import { Chat, Cart, Notification, UserProfile } from '.';

// Import ContextAPI
import { UseStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative rounded-full text-xl p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = UseStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  },[])

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true)
    }
  },[screenSize]);

  return (
    <div className="flex relative justify-between p-2 md:mx-6">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prev) => !prev)} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" customFunc={() => handleClick('chat')} color={currentColor} dotColor="#5B8FB9" icon={<BsChatLeft />} />
        <NavButton title="Notification" customFunc={() => handleClick('notification')} color={currentColor} dotColor="#5B8FB9" icon={<RiNotification3Line />} />
        <TooltipComponent content='Profile' position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img src={avatar} className="rounded-full w-8 h-8 "/>
            <p><span className="text-gray-400 text-14">Hi,</span> {' '} <span className="text-14 text-gray-400 font-bold">Eriqh</span></p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar;
