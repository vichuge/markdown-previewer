import React from 'react';

import './Title2.scss';

const Title2 = props => {
  const {text} = props;
  const format = text.replace('## ','');
  return (
    <h2>{format}</h2>
  );
}

export default Title2;
