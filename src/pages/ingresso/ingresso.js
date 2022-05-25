import axios from "axios";
import { useState } from "react";

export default function Index() {
    const [inteira, setInteira] = useState(0);
    const [meia, setMeia] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');  
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function calcularIngresso() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', {
            inteira: inteira,
            meia: meia,
            diaSemana: diaSemana,
            nacionalidade: nacionalidade
        })

        setTotal(resp.data.total);
    }

    return (
        <main>
            <h1> Calcular Ingresso </h1>

            <div>
                Quantidade de Inteiras: <input type='text' value={inteira} onChange={e => setInteira(Number(e.target.value))}/>
            </div>
            <div>
                Quantidade de Meias: <input type='text' value={meia} onChange={e => setMeia(Number(e.target.value))}/>
            </div>
            <div>
                Dia da Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)}/>
            </div>
            <div>
                Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)}/>
            </div>

            <div>
                <button onClick={calcularIngresso}> Valor do Ingresso </button>
            </div>

            <div>
                O total é R$ {total}
            </div>
        </main>
    )
}