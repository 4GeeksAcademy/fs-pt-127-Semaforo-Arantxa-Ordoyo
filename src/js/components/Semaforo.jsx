import React, { useState } from 'react';
export default function Semaforo(){
//Declaramos el useState en el cual tendremos el color y la funcion setColor para luego modificarlo 
//Inicializamos el color a null
const [ color, setColor ] = useState(null);

    return (<>
    {/* Aqui declaramos un div para empezar a darle forma de semaforo con CSS */}
    <div id="trafficTop"></div>
    <div id="container" className='py-2'>
        {/*Aqui le decimos que cuando haga click el setColor cambie el texto a red y entonces hacemos un if en la className le decimos si la variable color es igual a "red"
         entonces le pones la clase  red ligth y sino solo red  */}
        <div onClick={() => setColor("red")} className={color === "red" ? "red ligth" : "red"}></div>
        <div onClick={() => setColor("yellow")}className={color === "yellow" ? "yellow ligth" : "yellow"}></div>
        <div onClick={() => setColor("green")}className={color === "green" ? "green ligth" : "green"}></div>
    </div>
    </>
    )
    
}
