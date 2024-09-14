import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){


    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login'); 
      };

      return(
        
      <header className="navbar" >
        <div className="logo">CarDoctor</div>
        <nav className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/Veicuos'>Veiculos</Link>
          <Link to='/Chat'>Serviços</Link>
          <Link to='/Sobre'>Sobre</Link>
        </nav>
        <button className="cta-button" onClick={handleLoginClick}>Fazer login</button>
      </header>
        
    )
}