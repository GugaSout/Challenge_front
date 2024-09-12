import React, { useState } from 'react';
import './Cadastro.css'

export default function Cadastro() {
const [formData, setFormData] = useState({
    email: '',
    senha: '',
    confirmaSenha: '',
    nome: '',
    cpf: '',
    telefone: ''
});
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
const validarSenha = () => {
    if (formData.senha !== formData.confirmaSenha) {
        alert('As senhas não coincidem.');
    } else {
        alert('Registrado com sucesso!');
        // Lógica para redirecionar ou realizar outra ação após o cadastro
        window.location.href = '/index.html';
    }
};
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validarSenha();
};
return (
    <main className="Maincad">
        <form onSubmit={handleSubmit} className="log">
        <div className='Divcad'>
            <h2>Cadastro</h2>
            <div className='Cadastro'>
                <input
                    className="objCad"
                    type="email"
                    name="email"
                    id="email"
                    size={30}
                    required
                    minLength={5}
                    autoComplete="email"
                    placeholder="Usuário ou e-mail"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="objCad"
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    minLength={4}
                    placeholder="Nome Completo"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <input
                    className="objCad"
                    type="text"
                    name="cpf"
                    id="cpf"
                    required
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    maxLength={14}
                    placeholder="CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                />
                <input
                    className="objCad"
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    pattern="[0-9\s]{10,15}"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                />
                <input
                    className="objCad"
                    type="password"
                    name="senha"
                    id="senha"
                    required
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                />
                <input
                    className="objCad"
                    type="password"
                    name="confirmaSenha"
                    id="confirmaSenha"
                    required
                    placeholder="Confirmação da Senha"
                    value={formData.confirmaSenha}
                    onChange={handleChange}
                />
                    <button className='btnCad'>Enviar</button>
            </div>
        </div>
                </form>
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
    

)

}