import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.js'
import CorPrimaria from './pages/corprimaria/corprimaria.js'
import Frequencia from './pages/frequencia/freq.js'
import Ingresso from './pages/ingresso/ingresso.js'
import MaiorNumero from './pages/maiornumero/mn.js'
import Dobro from './pages/dobro/dobro.js'
import Media from './pages/media/media.js'
import Soma from './pages/soma/soma.js'
import Tabuada from './pages/tabuada/tabuada.js'
import Temperatura from './pages/temperatura/temperatura.js'

export default function SiteRoutes(){
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={ <Home /> }/>
                <Route path='/corprimaria' element={ <CorPrimaria /> }/>
                <Route path='/frequencia' element={ <Frequencia /> }/>
                <Route path='/ingresso' element={ <Ingresso /> }/>
                <Route path='/mn' element={ <MaiorNumero /> }/>
                <Route path='/dobro' element={ <Dobro /> }/>
                <Route path='/media' element={ <Media /> }/>
                <Route path='/soma' element={ <Soma /> }/>
                <Route path='/tabuada' element={ <Tabuada /> }/>
                <Route path='/temperatura' element={ <Temperatura /> }/>

            </Routes>
        </BrowserRouter>
    )
}