import axios from "axios"
import { useState } from "react"

export default function Index() {
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');   

    async function verificarCorPrimaria() {
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);
        
        if (resp.data.cor === true){
            setResposta('Sim!');
        }
        else{
            setResposta('NÃO!');
        }
    }

    return (
        <main>
            <h1> Cor Primária </h1>

            <div>
                Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarCorPrimaria}> Verificar </button>
            </div>
            <div>
                É cor primária? { resposta }
            </div>
        </main>
    )
}

/* server.get('/tabuada', (req, resp) => {
    try
    {
        const a = Number(req.query.n);

        const x = tabuada(a); 

        resp.send({
            tabuada: x
        })
    }

    catch(err)
    {
        resp.send({
            err:err.message
        })
    }
}) */