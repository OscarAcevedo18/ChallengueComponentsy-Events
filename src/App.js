import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import Input from "./components/Input";
import ButtonValidation from './components/ButtonValidation';

function App() {
  const [name, setName] = useState("")
  const [input, setInput] = useState("");
  const buttonClean = () => {
    if (name === '') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Olvidaste Ingresar tu Nombre',
        text: 'Vuelve y llena los campos vacios.',
        showConfirmButton: false,
        timer: 2500
      })
    }else{ 
      Swal.fire({
        title: 'Inicio de Sesión Correcto',
        text: 'Disfruta nuestra Página.',
        imageUrl: 'http://pa1.narvii.com/6876/2d206527019e23ca88a5f708e5d68a43a5ff15d1r1-289-243_00.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  }
  
  return (
    <>
    <div className='container'>
      <h1>Bienvenido a la Validación</h1>

      <Input setInput={setInput} setName={setName} />
      {input === "252525" ? <ButtonValidation buttonClean={buttonClean} /> : ''}
    </div>
    </>
  );
}

export default App;
