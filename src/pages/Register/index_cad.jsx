import { useState } from "react";
import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import { auth } from "../../services/firebaseConfig";
import "./reg_styles.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
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
  return (
  <div className="container">
  <header className="header">
  <h1>Lovelace</h1>
    <span>Informações de Cadastro</span>
  </header>

  <form>
    <div className="inputContainer">
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="lovelace@gmail.com"
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
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <button onClick={handleSignOut} className="button">
      Cadastrar <img src={arrowImg} alt="->" />
    </button>
    <div className="footer">
      <p>Você já tem uma conta?</p>
      <Link to="/">Acesse sua conta aqui</Link>
    </div>
  </form>
</div> 
);
}
