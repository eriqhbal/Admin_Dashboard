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
            <Button color="white" bgColor="#567189" text="Download" borderRadius="10px" size='md' />
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
    </div>
  )
}

export default ECommerce