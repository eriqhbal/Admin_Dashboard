import React from 'react'

// syncfuncion
import {SparklineComponent, SparklineTooltip, Inject} from '@syncfusion/ej2-react-charts';

const SparkLine = ({color, currentColor, width, height, data, type, id}) => {
  return (
    
      <SparklineComponent
        id={id} 
        width={width} 
        height={height} 
        lineWidth={1} 
        valueType="Numeric" 
        fill={color} 
        border={{ color: currentColor, width: 2 }} 
        dataSource={data} 
        xName="x" 
        yName="y" 
        type={type}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${y}',
          trackLineSettings: {
            visible: true
          }
        }}>
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    

  )
}

export default SparkLine