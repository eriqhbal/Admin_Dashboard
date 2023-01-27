import React from 'react'

import {Inject, Day, Week, Month, WorkWeek, ScheduleComponent, Resize, Agenda, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import {Header} from '../components';

import { scheduleData } from '../data/dummy';

const Calender = () => {
  return (
    <div className="m-2 mt-16 p-2 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header category={'App'} title='Calender'/>
      <ScheduleComponent eventSettings={{ dataSource: scheduleData}} height='360px' selectedDate={new Date(2021, 0, 10)}>
        <Inject services={[Day, Week, Month, WorkWeek, Resize, Agenda, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calender