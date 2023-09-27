import React, {useState, useEffect} from 'react';
import textTemplate from './textTemplate';
import './Editor.scss';

const Editor = ({ parentCallback }) => {
  const [text, setText] = useState(textTemplate);

  const textChange = (e) => {
    console.log('I enter on textChange');
    console.log(e.target.value);
    setText(e.target.value);
    parentCallback(e.target.value);
  };

  useEffect(() => {
    parentCallback(textTemplate);
  },[]);

  return (
    <div className="Editor">
      <h2 className='text-center'>Editor</h2>
      <div className='row justify-content-center'>
        <textarea className='mb-5' id='editor' rows={10} cols={50} onChange={textChange} value={text} />
      </div>
    </div>
  );
}

export default Editor;
