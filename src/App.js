import './App.css';
import Cabecalho from './componentes/Cabecalho';
import PesquisaProduto from './componentes/Corpo/PesquisaProduto';
import CardProduto from './componentes/Corpo/PesquisaProduto/CardProduto';
import CarrosselBootStrap from './componentes/SecaoPrincipal/Carrossel';

function App() {
  return (
      <div className="App"> 
        <Cabecalho/>
        <section>
            <div className='Corpo'>
               <nav className='Esq'> </nav>
               <main className='Principal'> 
               
                  <CarrosselBootStrap/>
                  <PesquisaProduto/>
            
               </main>
            </div>
        </section>
    </div>
  );
}

export default App;

