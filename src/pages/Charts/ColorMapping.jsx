import React from 'react';

import { ChartsHeader } from '../../components';

import { ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, colorMappingData } from '../../data/dummy';

import { UseStateContext } from '../../contexts/ContextProvider';
import { ColumnSeries, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, RangeColorSettingsDirective, RangeColorSetting, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

const ColorMapping = () => {
  const { currentTheme } = UseStateContext();
  return (
    <div className="m-4 mt-24 p-10 md:m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category={'Chart'} title="Color Mapping" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{mode: 'Range', background: 'white'}}
          tooltip={{enable: true}}
          background={currentTheme === 'Dark' ? '#33373E' : '#fff'}>
          <Inject services={[ColumnSeries, Legend, Category, Tooltip]}/>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10
              }}/>
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {colorMappingData.map((item, index) => {
              return <RangeColorSettingDirective key={index} {...item}/>
            })}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping