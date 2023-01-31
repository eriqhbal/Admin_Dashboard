import React from 'react'

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

import { UseStateContext } from '../../contexts/ContextProvider';

import { ChartComponent, SeriesCollectionDirective, Inject, SeriesDirective, HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom, SeriesBase } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const {currentTheme} = UseStateContext();
  return (
    <div className="m-4 mt-24 p-10 md:m-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <ChartsHeader category={'Chart'} title="Financial" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentTheme === 'Dark' ? '#33373E' : '#fff'}>
          <Inject services={[DateTime, HiloSeries, Tooltip, Logarithmic, Crosshair, Zoom]}/>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="y"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial