
import z1 from './assets/z1.jpeg'
import Carta from './componentes/Carta'
import Cartam from './componentes/Cartam'




import './App.css'

function App() {
 

  return (
    
  <>
  <div className='atras'>
    

  <div class="py-5 text-center">
        
        <h3>Chirishop Moron</h3>
        <p class="lead">Tienda de articulos varios y telefonos Moron,Ciego de Avila,Cuba.</p>
      </div>

      
    


    <div className='container  h-100 align-items-center justify-content-center'>
      <div className='row align-items-start '>
        <div className='col-md-4'>
          <Carta img={z1} price={'55 usd'} desc={'estos zapatos son unicos'} model={'Vanz'}></Carta>
        </div>
        <div className='col-md-4'>
          <Carta img={z1} price={'55 usd'} desc={'estos zapatos son unicos'} model={'Addidas'}></Carta>
        </div>
        <div className='col-md-4'>
          <Carta img={z1} price={'55 usd'} desc={'estos zapatos son unicos'} model={'Nike'}></Carta>
        </div>
      </div>
      <div className='row align-items-start '>
        <div className='col-md-4'>
          <Carta img={z1} price={'55 usd'} desc={'estos zapatos son unicos'} model={'Popo'}></Carta>
        </div>
        <div className='col-md-4'>
          {/* Add another column here if needed */}
        </div>
        <div className='col-md-4'>
          {/* Add another column here if needed */}
        </div>
      </div>
    </div>
  </div>
</>

  
  )
}

export default App
