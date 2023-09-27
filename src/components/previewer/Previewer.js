import React, { useState, useEffect } from 'react';
import Title1 from './title1/Title1';
import Title2 from './title2/Title2';
import Title3 from './title3/Title3';
import Ol from './ol/Ol';
import './Previewer.scss';
const Previewer = (props) => {
  // const [text] = useState(props.text);
  const [splitted, setSplitted] = useState([]);
  let ol = [];
  let flagOl = false;

  const addOl = item => {
    console.log('enter on addOl');
    // if (item === '') return;
    ol.push(item.replace('1. ',''));
    console.log('finish setOl in addOl func');
    flagOl = true;
    console.log('finish the setFlagOl in addOl func');
  };

  const addFormat = text => {
    console.log('I enter on addFormat()');
    console.log(text);
    setSplitted(text.split('\n'));
    console.log(splitted);
  };

  useEffect(() => {
    console.log('I enter on useEffect');
    // setText(props.text);
    // console.log(text.split('\n'));
    addFormat(props.text);
  },[props.text]);

  return (
    <div className="Previewer">
    {splitted.map((data) => {
      const comm = data.split(' ')[0];
      if (comm !== '1. ' && flagOl === true) {
        console.log('I enter on Ol comp creation');
        <Ol list={ol}></Ol>;
        ol = [];
      }
      switch (comm) {
        case '#':
          return <Title1 text={data} ></Title1>;
        case '##':
          return <Title2 text={data} ></Title2>;
        case '###':
          return <Title3 text={data} ></Title3>;
        case '-':
          return <ul><li key={data}>{data.replace('- ','')}</li></ul>;
        case '1.':
        console.log('entering on switch case 1.');
          addOl(data);
          break;
        default:
          return <p>{data}</p>;
      }
    })}

    </div>
  );
}

export default Previewer;
