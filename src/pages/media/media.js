import {  useState  } from  "react" ;
import axios from "axios" ;

export default function PaginaMedia ( ) { 
    const [ n1 ,  setN1 ]  =  useState ( 0 )
    const [ n2 ,  setN2 ]  =  useState ( 0 )
    const [ n3 ,  setN3 ]  =  useState ( 0 )
    const [ resposta ,  setResposta ]  =  useState ( 0 ) ;

        async function CalcularClick ( )  {
        const resp = await axios.post('http://localhost:5000/media',{
            n1 : n1 ,
            n2 : n2 ,
            n3 : n3
        })
        setResposta( resp.data.media)
        }
        return (
        < div >
            <div>

                <h1> Programa Media </h1>

                <div>
                    Nota 1:
                    <input type  = "text" valor = { n1 } onChange = { e => setN1 ( Number ( e . target . value ) ) } />     
                </div>
                <div>
                    Nota 2:
                    <input type = "text" valor = { n2 } onChange = { e => setN2 ( Number ( e . target . value ) ) } />     
                </div>
                <div>
                    Nota 3:
                    <input type  = "text" valor = { n3 } onChange = { e => setN3 ( Number ( e . target . value ) ) } />     
                </div>

                <div>
                    <button  onClick = { CalcularClick } > Calcular </button>
                </div>

                <div>
                    Média: { resposta }
                </div>

            </div>

        </div >
    )
}