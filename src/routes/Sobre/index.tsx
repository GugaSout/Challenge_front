import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Sobre.css'


export default function Sobre(){
    
    
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login'); 
      };

    return(
        <main className="main_sobre">
            
            <header className="navbar">
            <div className="logo">CarDoctor</div>
            <nav className="nav-links">
              <Link to='/'>Home</Link>
              <a href="#contact">Contatos</a>
              <a href="#services">Serviços</a>
              <Link to='/Sobre'>Sobre</Link>
            </nav>
            <button className="cta-button" onClick={handleLoginClick}>Fazer login</button>
            </header>
            <section className='sec-sobre'>

                <div className='Devs-so'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </section>

            

        </main>
    )
}