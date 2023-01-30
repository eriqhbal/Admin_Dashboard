import React from 'react'

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import {Header} from '../components'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className="m-2 mt-16 p-2 md:m-10 md:p-10 rounded-3xl bg-white">
      <Header category="App" title='Color Picker'/>
      <div className="text-center">
        <div id="preview"></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div className="">
            <p className="text-2xl font-bold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent id='inline-pallete' mode="Palette" modeSwitcher={false} inline showButtons={false} change={change}/>
          </div>
          <div className="">
            <p className="text-2xl font-bold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent id='inline-picker' mode="Picker" modeSwitcher={false} inline showButtons={false} change={change}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker