import React from 'react'

import { Inject, ChartComponent, SeriesDirective, SeriesCollectionDirective, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';

import { UseStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentTheme } = UseStateContext();
  return (
    <div>
      <ChartComponent id="line-charts" height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} background={currentTheme === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[DateTime, LineSeries, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => {
            return <SeriesDirective key={index} {...item} />
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart