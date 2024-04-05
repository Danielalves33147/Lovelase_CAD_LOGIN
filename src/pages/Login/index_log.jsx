import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import arrowImg from "../../assets/arrow.svg";
import { auth } from "../../services/firebaseConfig";
import { load, sucess, fail, ForgotPassword }  from "../../services/alert.js";
import { sendPasswordResetEmail } from "firebase/auth";

import "./styles.css";

import Swal from 'sweetalert2';

export function Login() {
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

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  // Handle loading, success, and error states
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


  function handleForgotPassword() {
    ForgotPassword();
  }
  

  return (
    <div className="container">
      <header className="header">
        <h1>Lovelace</h1>
        <span>Informações de Login</span>
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
        <a href="#" onClick={handleForgotPassword}>Esqueceu sua senha?</a>
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
