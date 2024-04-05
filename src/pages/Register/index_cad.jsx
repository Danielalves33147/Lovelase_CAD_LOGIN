import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import arrowImg from "../../assets/arrow.svg";
import { auth } from "../../services/firebaseConfig";
import { load, sucess, fail }  from "../../services/alert.js";

import "./styles.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    
  const navigate = useNavigate();

  // Function to clear input fields
  function clearFields() {
    setEmail("");
    setPassword("");
  }

  // Store input data in localStorage on any change
  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }, [email, password]);

  // Retrieve input data from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      load();
    }
    if (user) {
      sucess();
      navigate('/tool'); // Navigate to the tool page
    }else if(error){
      fail();
    }
  }, [loading, user, error]); // Update only on changes to these variables

  
  function handleSignIn(e) { //Envia os dados pro firebase
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Lovelace</h1>
        <span>Informações de Registro</span>
      </header>

      <form onSubmit={handleSignIn}>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="lovelace@gmail.com"
            value={email} // Pre-fill with stored value (if available)
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
            value={password} // Pre-fill with stored value (if available)
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="#">Esqueceu sua senha?</a>

        <button className="button" onClick={handleSignIn}>
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/login">Faça login aqui</Link>
        </div>
      </form>
    </div>
  );
}
