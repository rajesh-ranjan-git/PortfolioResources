import React from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from '../../pages/home/Home';
import Splash from '../../pages/splash/Splash';
import Detail  from '../../pages/detail/Detail';
import Error from '../../pages/error/Error';
import Art from '../../pages/art/Art';

export default function Main(props) {
  const theme = props.theme;
  return (
    <div>
        <HashRouter basename="">
            <Routes>
                {/* <Route path="/" exact element={<Splash {...props} />}/> */}
                <Route path='/project:project' exact element={<Detail/>}/> 
                <Route path="/" exact element={<Home props/>} />
                <Route path="/artwork" exact element={<Art props/>} />                
                <Route path="*"  element={<Error/>} />
            </Routes>
        </HashRouter>
    </div>
  )
}
