import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
let notificationCount = 0;

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