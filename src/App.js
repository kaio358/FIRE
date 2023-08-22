
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


// layout
import Navbar from './componentes/layout/Navbar';
import Container from './componentes/layout/Container';
import ParteSuperior from './componentes/layout/ParteSuperior';


// indicies
import Home from './componentes/indicies/Home';

import Destaque from './componentes/indicies/Destaque';
import DadosIncendios from './componentes/indicies/DadosIncendios';
import DadosPrototipo from './componentes/indicies/DadosPrototipo';
import Footer from './componentes/layout/Footer'
function App() {
  return (
    <Router>
      <ParteSuperior>
        <Navbar/>
  
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
        
            <Route  exact path='/dados_de_incendio' element={<DadosIncendios/>}/>
            <Route exact path='/destaque' element={<Destaque/>}/>
            <Route exact path='/dados_prototipo' element={<DadosPrototipo/>}/>
            
          </Routes>

        </Container>
      </ParteSuperior>

    <DadosIncendios/>
    <Destaque/>
    <DadosPrototipo/>
     
    <Footer/>
    </Router>
  );
}

export default App;
