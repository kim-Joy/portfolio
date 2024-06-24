import React from 'react';

import Header from 'notion/components/Header';
import Info from 'notion/components/Info';
import Career from 'notion/components/Career';
import Outputs from 'notion/components/Outputs';
import Technology from 'notion/components/Technology';


function Resume() { 
   
  return(
     <div className="resume list">
         <Header />
        <Info />
         <Career />
         <div className="hr full"></div>
         
         <Outputs />
         <Technology />
     </div>
  )
}


export default Resume;