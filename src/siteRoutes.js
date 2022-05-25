import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.js'
import CorPrimaria from './pages/corprimaria/corprimaria.js'
import Frequencia from './pages/frequencia/freq.js'
import Ingresso from './pages/ingresso/ingresso.js'
import MaiorNumero from './pages/maiornumero/mn.js'
import Tabuada from './pages/tabuada/tabuada.js'

export default function SiteRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/corprimaria' element={ <CorPrimaria /> }/>
                <Route path='/frequencia' element={ <Frequencia /> }/>
                <Route path='/ingresso' element={ <Ingresso /> }/>
                <Route path='/mn' element={ <MaiorNumero /> }/>
                <Route path='/tabuada' element={ <Tabuada /> }/>
            </Routes>
        </BrowserRouter>
    )
}