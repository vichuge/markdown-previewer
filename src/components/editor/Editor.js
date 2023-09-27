import React from 'react';

import './Editor.scss';

const Editor = ({ parentCallback }) => {

  const textChange = (e) => {
    console.log('Im in editor');
    const updatedText = e.target.value;
    parentCallback(updatedText);
  };

  return (
    <div className="Editor">
      <h2>Editor</h2>
      <textarea id='editor' onChange={textChange} />
    </div>
  );
}

export default Editor;
