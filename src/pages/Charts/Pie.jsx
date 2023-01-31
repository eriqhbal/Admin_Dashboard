import React from 'react'

// Header
import { Header, ChartsHeader, Doughnut} from '../../components'

// Data
import { pieChartData } from '../../data/dummy'


const Pie = () => {
  return (
    <div className="m-4 p-10 mt-24 md:m-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
      <ChartsHeader category={'Chart'} title="Pie"/>
      <div className="w-full">
        <Doughnut id="chart-pie" data={pieChartData} legendVisibility="full" />
      </div>
    </div>
  )
}

export default Pie