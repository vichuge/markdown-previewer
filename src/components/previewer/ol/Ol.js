import React from 'react';

import './Ol.scss';

const Ol = props => {
  console.log('I enter on Ol comp');
  const {text} = props;
  const format = text.replace('### ','');
  return (
    <ol>{format}</ol>
  );
}

export default Ol;
