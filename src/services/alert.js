import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
let notificationCount = 0;
import { sendPasswordResetEmail } from "firebase/auth";


export function load(){
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

      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}

export function sucess(){
    // Notificação de Sucesso com redirecionamento
    Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Bem Vindo.',
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        toast: true
      })
    
}

export function fail_cad(){
// Exibe a notificação de erro

    Swal.fire({
      icon: 'error',
      title: 'Ops! Algo deu errado...',
      text: 'Revise as informações e tente novamente.',
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      toast: true
    });


}

export function load_cad(){
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

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}

export function sucess_cad(){
  // Notificação de Sucesso com redirecionamento
  Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Cadastro.',
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      toast: true
    })
  
}

export function fail(){
// Exibe a notificação de erro

  Swal.fire({
    icon: 'error',
    title: 'Ops! Algo deu errado...',
    text: 'Revise as informações e tente novamente.',
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    toast: true
  });


}


export function ForgotPassword() {
  Swal.fire({
    title: "Esqueceu sua senha?",
    text: "Digite seu e-mail para redefinir a senha:",
    input: "email",
    inputPlaceholder: "lovelace@gmail.com",
    showCancelButton: true,
    confirmButtonText: "Enviar",
  }).then((result) => {
    if (result.isConfirmed) {
      const email = result.value;
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Swal.fire("Sucesso!", "Um e-mail de redefinição de senha foi enviado para " + email, "success");
        })
        .catch((error) => {
          console.error(error);
          Swal.fire("Erro", "Não foi possível enviar o e-mail. Verifique o seu endereço de e-mail.", "error");
        });
    }
  });
}