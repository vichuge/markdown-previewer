import React from 'react';
import { marked } from 'marked';
import './Previewer.scss';
const Previewer = (props) => {

  marked.options({
    breaks: true
  });

  return (
    <div className="Previewer">
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.text)}}></div>
    </div>
    
  );
}

export default Previewer;
