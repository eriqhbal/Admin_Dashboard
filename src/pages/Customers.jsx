import React from 'react'

import { Header } from '../components'

import { ColumnsDirective, ColumnDirective, Inject, GridComponent, Page, Selection, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className="m-2 mt-16 p-2 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header category={'Pages'} title='Customers'/>
      
      <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} editSettings={{allowDeleting: true, allowEditing: true}} width='auto'>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (<ColumnDirective key={index} {...item} />))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Toolbar, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers