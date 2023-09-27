import React, { useState } from 'react';
import './App.scss';
import Editor from './components/editor/Editor';
import Previewer from './components/previewer/Previewer';

const App = (props) => {
  const [text, setText] = useState('');
  const callback = (text) => {
    setText(text);
  };

  return (
    <div className="container">
      <div className='row justify-content-center'>
        <h1 className='text-center'>Markdown previewer</h1>
      </div>
      <div className='row'>
        <Editor parentCallback={callback}/>
      </div>
      <div className='row mt-5'>
        <Previewer text={text} />
      </div>
    </div>
  );
}

export default App;
