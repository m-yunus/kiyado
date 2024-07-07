import './App.css'
import { Cart, Navbar, Sales } from './components'
function App() {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Sales endpoint={'Productlist'}/>
      
    </main>
   </>
  )
}

export default App
