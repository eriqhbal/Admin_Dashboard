import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, Tooltip, Inject, Category, StackingColumnSeries } from '@syncfusion/ej2-react-charts';

import { UseStateContext } from '../../contexts/ContextProvider';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({width, height}) => {
  const {currentTheme} = UseStateContext();
  return (
    <ChartComponent width={width} height={height} id='charts' chartArea={{border: {width: 0}}} tooltip={{ enable: true}} legendSettings={{background: currentTheme === 'Dark' ? '#33373E' : '#fff'}} primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis}>
      <Inject services={[Legend, Category, Tooltip, StackingColumnSeries]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => {
          return <SeriesDirective key={index} {...item}/>
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked