import { useState } from "react";
import Message from "./Message";

const Form = ({ show }) => {
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button>Entradas para: {show.artista}</button>
      </form>
      {flag ? <Message name={name} email={email} /> : null}
    </div>
  ); */

  const [costumer, setCostumer] = useState({
    name: '',
    email: ''
  })
  const [flag, setFlag] = useState(false);

  const hadleName = (e) => {
    setCostumer({...costumer, name: e.target.value})
  };

  const hadleEmail = (e) => {
    setCostumer({...costumer, email: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={costumer.name} onChange={hadleName} />
        <label>Email: </label>
        <input type="email" value={costumer.email} onChange={hadleEmail} />
        <button>Entradas para: {show.artista}</button>
      </form>
      {flag ? <Message name={costumer.name} email={costumer.email} /> : null}
    </div>
  )
};

export default Form;
