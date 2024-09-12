import './Home.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home(){

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login'); 
      };

    return(

    <div className="Home">
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

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Car Doctor</h1>
            <p>
              Saiba tudo sobre a saúde do seu carro com o CarDoctor.
            </p>
          </div>
          <div className="hero-image">
            <img className='carro' src="carro_azul.png" alt="Carro Azul" />
          </div>
        </section>
      </main>
    </div>
  );
}
