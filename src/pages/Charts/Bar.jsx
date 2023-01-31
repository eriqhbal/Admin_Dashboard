import React from 'react'

import { Header } from '../../components'

import { Inject, ChartComponent, SeriesDirective, SeriesCollectionDirective, DataLabel, ColumnSeries, Category, Tooltip,  Legend} from '@syncfusion/ej2-react-charts';

import { UseStateContext } from '../../contexts/ContextProvider';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

const Bar = () => {
  const {currentTheme} = UseStateContext();
  return (
    <div className="m-4 mt-24 p-10  md:m-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category={'Chart'} title="Bar"/>
      <ChartComponent id="charts" PrimaryYAxis={barPrimaryYAxis} primaryXAxis={barPrimaryXAxis} chartArea={{ border: { width: 0 } }} legendSettings={{background: 'white'}} tooltip={{ enable: true }} background={ currentTheme === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[Legend, DataLabel, ColumnSeries, Category, Tooltip]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar