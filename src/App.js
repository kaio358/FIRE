
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


// layout
import Navbar from './componentes/layout/Navbar';
import Container from './componentes/layout/Container';
import ParteSuperior from './componentes/layout/ParteSuperior';


// indicies
import Home from './componentes/indicies/Home';

import Destaque from './componentes/indicies/Destaque';
import DadosIncendios from './componentes/indicies/DadosIncendios';
// import Footer from './componentes/layout/Footer'
function App() {
  return (
    <Router>
      <ParteSuperior>
        <Navbar/>

        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
        
            {/* <Route exact path='/dados' element={<Dados/>}/> */}
            {/* <Route exact path='/contato' element={<Contato/>}/> */}
          
          </Routes>

        </Container>
      </ParteSuperior>
      <DadosIncendios/>
     <Destaque/>
     
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
