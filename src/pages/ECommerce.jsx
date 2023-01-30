import React from 'react'

// react-icons
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

// Component
import { Pie, SparkLine, Stacked, Button } from '../components';

// Data Dummy
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

// import State Context
import { UseStateContext } from '../contexts/ContextProvider';
const ECommerce = () => {
  const { currentColor } = UseStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center brightness-50">
          <div className="flex justify-between items-center">
            <div className="bg-neutral-800 rounded-md px-2">
              <p className="font-bold text-neutral-100">Earnings</p>
              <p className="font-bold text-2xl text-neutral-50">$78,623,18</p>
            </div>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size='md' />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map(function (item) {
            return <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl p-4 rounded-full opacity-0.9 hover:drop-shadow-xl">{item.icon}</button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 text-${item.pcColor}`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          <div className="flex justify-between ">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex gap-2 items-center text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>expense</span>
              </p>
              <p className="flex gap-2 items-center text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-2xl font-semibold">
                    39,354
                  </span>
                  <span className="p-1.5 text-white cursor-pointer hover:drop-shadow-xl bg-green-400 rounded-full text-xs ml-3">
                    23%
                  </span>
                </p>
                <p className="text-gray-400 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-2xl font-semibold">
                    53,394
                  </span>
                </p>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>
              <div className="mt-10">
                <Button color="white" bgColor={currentColor} text="Download Report" borderRadius='10px' />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECommerce