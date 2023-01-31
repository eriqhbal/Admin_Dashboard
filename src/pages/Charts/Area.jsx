import React from 'react'

import { Inject, ChartComponent, SeriesDirective, SeriesCollectionDirective, DateTime, Legend, SplineAreaSeries} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';

import { Header } from '../../components';
import { UseStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentTheme } = UseStateContext();
  return (
    <div className="m-4 mt-24 p-10 md:m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={'Area'} title="Inflation Rate In Percentage"/>
      <ChartComponent id="area-charts" height="420px" primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} background={currentTheme === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => {
            return <SeriesDirective key={index} {...item} />
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area;