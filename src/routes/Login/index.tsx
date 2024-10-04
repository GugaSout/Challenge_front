import './Login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate();

  const handleLogin = () => {navigate('/'); };

    return(
    <main className='Mainlog'>
      <div className="DivLogin">
        <h2>Login</h2>
        <div className="Login">
          <input className='objLogin' type="text " placeholder='E-mail ou Usuario' />
          <input className='objLogin' type="password" placeholder='Senha' />
          <button className='btnLog' onClick={handleLogin}>Entrar</button>
          <Link to='/Cadastro'>Não Possuo Login</Link>
        </div>
      </div>
      <footer className="icones_redes">
            <a href="https://www.instagram.com/porto/" target="_blank" rel="noreferrer">
                <img className="redes" src="insta.png" alt="Instagram" />
            </a>
            <a
                href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
                target="_blank"
                rel="noreferrer"
            >
                <img className="redes" src="phone.png" alt="Contato porto" />
            </a>
            <a href="https://www.portoseguro.com.br" target="_blank" rel="noreferrer">
                <img className="redes" src="web.png" alt="Site Porto" />
            </a>
        </footer>
    </main>
  );
};
