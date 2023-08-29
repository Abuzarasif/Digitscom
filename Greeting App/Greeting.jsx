import React from 'react'
let greeting='';
let cssStyle={};

function Greeting(){
    let curtime = new Date().getHours();
 
    if(curtime>=1 && curtime<12) {
        greeting='Good Morning ';
        cssStyle.color="green";
    }
    else if(curtime>=12 && curtime<19) {
        greeting='Good AfterNoon ';
        cssStyle.color="red";
    }
    if(curtime>=19 && curtime<=24) {
        greeting='Good Night ';
        cssStyle.color="Purple";
    }
    return (
        <div className='greet'>
        <h1  >Hellow sir,<span style={cssStyle} >{greeting}</span></h1>
        </div>)
}
export default Greeting


// import React from 'react';

// let greeting = '';
// let cssStyle = {};

// function Greeting() {
//   let curtime = new Date().getHours();

//   if (curtime >= 1 && curtime < 12) {
//     greeting = 'Good Morning';
//     cssStyle.color = 'green';
//   } else if (curtime >= 12 && curtime < 19) {
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'red';
//   } else if (curtime >= 19 && curtime <= 24) {
//     greeting = 'Good Night';
//     cssStyle.color = 'purple';
//   }

//   return (
//     <>    <h1>
//       Hello sir,<span style={cssStyle}>{greeting}</span>
//     </h1>
//     </>

//   );
// }

// export default Greeting;
