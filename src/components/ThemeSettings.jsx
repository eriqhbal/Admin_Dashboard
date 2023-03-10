import React from 'react'

import { MdOutlineCancel } from 'react-icons/md';

import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';

import { UseStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {

  const { setColor, setMode, setThemeSelect, currentColor, currentTheme, setThemeSettings } = UseStateContext();
  return (
    <div className="bg-half-transparent top-0 right-0 nav-item fixed w-screen">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4 dark:text-black">
          <p className="font-semibold text-xl">Settings</p>
          <button type="button" onClick={() => setThemeSettings(false)} style={{ color: 'rgb(153, 171, 180', borderRadius: '50%' }} className="hover:drop-shadow-xl text-2xl p-3 hover:bg-light-gray  ">
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 dark:text-black">
          <p className="font-bold text-lg">Theme Options</p>
          <div className="mt-4">
            <input type="radio" name="theme" value="Light" id='light' className="cursor-pointer" onChange={setMode} checked={currentTheme === 'Light'} />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
          </div>
          <div className="mt-4">
            <input type="radio" name="theme" value="Dark" id='dark' className="cursor-pointer" onChange={setMode} checked={currentTheme === 'Dark'} />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 dark:text-black">
          <p className="font-bold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => {
              return <TooltipComponent key={index} content={item.name} position='top-center'>
                <div className="flex relative mt-2 cursor-pointer gap-5 items-center rounded-full" >
                  <button className="w-10 rounded-full h-10 cursor-pointer" style={{ backgroundColor: item.color }} onClick={() =>
                    setColor(item.color)
                  }>
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings