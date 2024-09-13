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
            <div className='div-Sobre'>

                <div className='dsec-sobre'>
                <section className='sec-sobre'>
                    <h1>CarDoctor</h1>
                </section>

                </div>
            </div>
            <footer className='footer_Sobre'>
                <div className='participantes'>
                    <div className='gusta'>
                        <img src="shrek 3.png" alt="" />
                        <p>Gustavo Souto </p>
                        <p><img src="git_icon.png" alt="" />RM558595</p>
                    </div>
                    <div className='miche'>
                        <img src="shrek 2.png" alt="" />
                        <p>Michele Souza</p>
                        <p><img src="git_icon.png" alt="" />RM558596</p>
                    </div>
                    <div className='luiza'>
                        <img src="shrek 4.png" alt="" />
                        <p>Luiza Danielle</p>
                        <p><img src="git_icon.png" alt="" />RM558597</p>
                    </div>
                </div>
            </footer>
            

        </main>
    )
}