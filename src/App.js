
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


// layout
import Navbar from './componentes/layout/Navbar';
import Container from './componentes/layout/Container';
import ParteSuperior from './componentes/layout/ParteSuperior';


// indicies
import Home from './componentes/indicies/Home';
// import Footer from './componentes/layout/Footer'
function App() {
  return (
    <Router>
      <ParteSuperior>
        <Navbar/>

        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            {/* <Route exact path='/sobre' element={<Sobre/>}/> */}
            {/* <Route exact path='/dados' element={<Dados/>}/> */}
            {/* <Route exact path='/contato' element={<Contato/>}/> */}
          
          </Routes>
        </Container>
      </ParteSuperior>
     
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
