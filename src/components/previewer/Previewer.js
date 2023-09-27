import React from 'react';
import { marked } from 'marked';
import './Previewer.scss';
const Previewer = (props) => {

  return (
    <div className="Previewer">
      <div dangerouslySetInnerHTML={{__html: marked(props.text)}}></div>
    </div>
    
  );
}

export default Previewer;
