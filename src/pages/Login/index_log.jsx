import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import arrowImg from "../../assets/arrow.svg";
import { auth } from "../../services/firebaseConfig";

import "./loginstyles.css";

import Swal from 'sweetalert2';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

  // Função para limpar os campos de entrada
  function clearFields() {
    setEmail("");
    setPassword("");
  }

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {

    Swal.fire({
      title: 'Carregando...',
      text: 'Por favor, aguarde...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    
    // Simula um processo de carregamento
    setTimeout(() => { //
      // Fecha a notificação após 2 segundos
      Swal.close();
    }, 2000);

  }
  if (user) {
    // Notificação de Sucesso com redirecionamento
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Bem Vindo.',
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      toast: true
    }).then(() => {
      // Redirecionamento para a rota "tool" após o login
      navigate('/tool');
    });
  }
  if(error){
    
// Exibe a notificação de erro
Swal.fire({
  icon: 'error',
  title: 'Ops! Algo deu errado...',
  text: 'Usuário ou senha incorretos.',
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  toast: true
});
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Lovelace</h1>
        <span>Informações de Login</span>
      </header>

      <form onSubmit="return ValidateForm()">
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="lovelace@gmail.com"
            value={email} // Valor do estado
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            value={password} // Valor do estado
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="#">Esqueceu sua senha?</a>

        <button className="button" onClick={handleSignIn}>
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
      
  );
}
