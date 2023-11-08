import './App.css';
import Cabecalho from './componentes/Cabecalho';

function App() {
  return (
      <div className="App"> 
        <Cabecalho/>
        <section>
            <div className='Corpo'>
               <nav className='Esq'> </nav>
               <main className='Principal'> </main>
            </div>
        </section>
    </div>
  );
}

export default App;

