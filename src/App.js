import React, { useState } from 'react';
import './App.scss';
import Editor from './components/editor/Editor';
import Previewer from './components/previewer/Previewer';

const App = (props) => {
  const [text, setText] = useState('');
  const callback = (text) => {
    console.log('Im in app comp');
    console.log(text);
    setText(text);
  };

  return (
    <div className="App my-auto">
      <div className='row'>
        <h1>Markdown previewer</h1>
      </div>
      <div className='row'>
        <Editor parentCallback={callback}/>
      </div>
      <div className='row'>
        <div className='result'>
          <Previewer text={text} />
        </div>
      </div>
    </div>
  );
}

export default App;
