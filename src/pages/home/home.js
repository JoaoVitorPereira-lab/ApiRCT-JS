import { Link } from 'react-router-dom';

export default function Index(){
    return(
        <main>
            <h1> Home </h1>

            <ul>
                <li> <Link to='/corprimaria'> Cor Primária </Link> </li>
                <li> <Link to='/frequencia'> Frequência </Link> </li>
                <li> <Link to='/ingresso'> Ingresso </Link> </li>
                <li> <Link to='/mn'> Maior Número </Link> </li>
                <li> <Link to='/tabuada'> Tabuada </Link> </li>
            </ul>
        </main>
    )
}