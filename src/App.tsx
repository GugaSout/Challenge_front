
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
  
  const noNavbarRoutesRegex = /^\/(login|cadastro)$/;

  
  

  return (
    <>
    
      {!noNavbarRoutesRegex.test(location.pathname) && <Navbar />}
      <Outlet/>
      
    </>
  )
}

export default App
