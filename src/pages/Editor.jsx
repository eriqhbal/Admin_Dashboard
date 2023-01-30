import React from 'react'

import {HtmlEditor, Image, Link, Inject, QuickToolbar, RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';

import { EditorData } from '../data/dummy';

const Editor = () => {
  return (
    <div className="m-2 mt-16 p-2 md:m-10 md:p-10 rounded">
      <Header category={'App'} title='Editor'/>
      <RichTextEditorComponent>   
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor