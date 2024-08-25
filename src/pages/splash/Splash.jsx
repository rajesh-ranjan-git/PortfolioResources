import React from 'react';
import './splash.scss';
import Loader from '../../components/Loader/Loader';


export default function Splash(props) {
    // const [redirectNow, setRedirectNow] = useState(false);
    // setTimeout(() => setRedirectNow(true), 2500);
    // return redirectNow ? (
    //   <Navigate to="/home" replace={false}/>
    // ) : (
    //   <div className="logo_wrapper">
    //   <div className="screen" >
    //     <Loader id="logo" theme={props.theme} />
    //   </div>
    // </div>
    // );

    return(
      <div className="logo_wrapper">
      <div className="screen" >
        <Loader id="logo" theme={props.theme} />
      </div>
    </div>
    );
}
