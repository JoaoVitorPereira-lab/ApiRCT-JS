import {  useState  } from "react";
import axios from "axios";



export default function  PaginaSoma () { 
     const [ a ,  setA ]  =  useState ( 0 )
     const [ b ,  setB ]  =  useState ( 0 )
     const [ resposta ,  setResposta ]  =  useState ( 0 )


        async function CalcularClick ( ) {
        const  resp  =  await axios.post(`http://localhost:5000/somar`, {
            a: a,
            b: b
        })

        setResposta (resp.data.soma)
         
     }

        return(
            <div>
                <div>

                    <h1> Programa Soma </h1>
                    <div>
                    Número 1:
                    <input type = 'text'  value = { a }  onChange = { e  =>  setA ( Number( e . target . value )) }  />
                    </div>

                    <div>
                    Número 2:
                    < input  type = 'text'  value = { b }  onChange = { e  =>  setB ( Number ( e . target . value ) ) }  />
                    </div>

                    <button  onClick = { CalcularClick } > Calcular </button >

                    <div>
                        o resultado é: { resposta }
                    </div>

                </div>

            </div>
     )
 }