import React, { useState, useEffect } from 'react';
export default function Semaforo(){
const [ color, setColor ] = useState(null);


    return (<>
    <div id="trafficTop"></div>
    <div id="container" className='py-2'>
<div onClick={() => setColor("red")} className={color === "red" ? "red ligth" : "red"}></div>
<div onClick={() => setColor("yellow")}className={color === "yellow" ? "yellow ligth" : "yellow"}></div>
<div onClick={() => setColor("green")}className={color === "green" ? "green ligth" : "green"}></div>
    </div>
    </>
    )
    
}
