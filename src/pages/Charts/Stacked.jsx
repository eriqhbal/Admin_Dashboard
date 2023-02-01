import React from 'react'

import { ChartsHeader, Stacked as StackedChart } from '../../components'

const Stacked = () => {
  return (
    <div className="m-4 mt-24 p-10 md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <ChartsHeader category={'Stacked'} title="Stacked" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  )
}

export default Stacked