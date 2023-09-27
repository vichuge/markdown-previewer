import React from 'react';

import './Title3.scss';

const Title3 = props => {
  const {text} = props;
  const format = text.replace('### ','');
  return (
    <h2>{format}</h2>
  );
}

export default Title3;
