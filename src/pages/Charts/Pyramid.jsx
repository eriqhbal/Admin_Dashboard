import React from 'react'

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts'

import { ChartsHeader } from '../../components'

import { PyramidData } from '../../data/dummy'
import { UseStateContext } from '../../contexts/ContextProvider'


const Pyramid = () => {
  const { currentTheme } = UseStateContext();
  return (
    <div className="m-4 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category={'Pyramid'} title="Food Comparison Chart"/>
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{background: 'white'}}
          tooltip={{enable: true}}
          background={currentTheme === 'Dark' ? '#33373E' : '#fff'}>
          
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]}/>

          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
             name="Food"
             dataSource={PyramidData}
             xName="x"
             yName="y"
             type="Pyramid"
             width="45%"
             height="80%"
             neckWidth="15%"
             gapRation={0.03}
             explode
             emptyPointSettings={{mode: 'Drop', fill: 'red'}}
             dataLabel={{
              visible: true,
              position: "Inside",
              name: 'text',
             }}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid