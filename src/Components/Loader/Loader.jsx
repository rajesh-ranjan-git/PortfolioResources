import './loader.scss';
import React from 'react';

export default function Loader(props) {
  // const theme = props.theme;
  return (
    <>
    <div className="fly">
    <div className="body">
      <span>
        <span/>
        <span/>
        <span/>
        <span/>
      </span>
      <div className="base">
        <span></span>
        <div className="face"></div>
      </div>
      </div>
    </div>
      <div className="longfazers">
        <span/>
        <span/>
        <span/>
        <span/>
      </div>
      <h1 id='loading'>Loading</h1>
    </>

  );
}
