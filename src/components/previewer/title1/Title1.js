import React from 'react';

import './Title1.scss';

const Title1 = props => {
  const {text} = props;
  const format = text.replace('# ','');
  return (
    <h1>{format}</h1>
  );
}

export default Title1;
